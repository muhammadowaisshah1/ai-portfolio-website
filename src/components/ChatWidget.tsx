'use client';

import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, Bot, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { Card } from "./ui/card";
import Image from "next/image";
import chatBox from "@/assets/chat box.jpg";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm here to help you learn more about Muhammad Owais Shah's work and expertise. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const WEBHOOK_URL = "https://n8n.srv1324748.hstgr.cloud/webhook/d982511e-b82c-4f8a-92b7-54754638255d";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
          timestamp: userMessage.timestamp.toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      let responseContent = data.response || data.message || data.output || data.text || data.reply;

      if (typeof data === 'string') {
        responseContent = data;
      }

      if (!responseContent) {
        console.warn("Unknown webhook response format:", data);
        responseContent = JSON.stringify(data);
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: responseContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });

      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-[10000] pointer-events-auto">
          <div className="relative">
            {showGreeting && (
              <div className="absolute bottom-24 right-0 w-64 pointer-events-none">
                <Card className="relative p-3 bg-gradient-to-br from-card/98 to-background/95 border-2 border-primary/50 shadow-2xl rounded-2xl" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-background" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-foreground mb-1">
                        👋 Hi! I'm Your AI Assistant
                      </p>
                      <p className="text-[10px] text-muted-foreground leading-relaxed">
                        Ask me anything about Muhammad Owais Shah!
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-5 w-5 flex-shrink-0 pointer-events-auto hover:bg-primary/10"
                      onClick={() => setShowGreeting(false)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="absolute -bottom-2 right-6 w-3 h-3 bg-card border-r-2 border-b-2 border-primary/50 rotate-45" />
                </Card>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-40" />

            <Button
              onClick={() => {
                setIsOpen(true);
                setShowGreeting(false);
              }}
              size="lg"
              className="relative h-16 w-16 rounded-full bg-gradient-to-br from-card/90 to-background/80 shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-300 border-3 border-primary/50 p-1 overflow-visible"
              style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-2">
                <Image
                  src={chatBox}
                  alt="AI Assistant"
                  fill
                  className="object-cover drop-shadow-lg rounded-full"
                />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-background shadow-lg" />
            </Button>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          ref={chatContainerRef}
          className="fixed bottom-6 right-6 z-[10000] w-[380px] h-[600px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)] flex flex-col pointer-events-auto"
        >
          <Card className="flex flex-col h-full bg-gradient-to-b from-card/98 to-background/95 border-2 border-primary/30 rounded-3xl shadow-2xl overflow-hidden" style={{ backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)' }}>
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 bg-[length:200%_200%] animate-gradient" />

              <div className="relative flex items-center justify-between p-4 border-b border-primary/20">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-sm opacity-40" />
                    <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary via-accent to-primary bg-[length:200%_200%] animate-gradient flex items-center justify-center shadow-lg">
                      <Bot className="w-5 h-5 text-background" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                  </div>

                  <div>
                    <h3 className="font-bold text-base bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      AI Assistant
                    </h3>
                    <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      Online
                    </p>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 hover:bg-primary/10 rounded-full transition-all hover:rotate-90 duration-300"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} gap-2 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {message.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <Bot className="w-3.5 h-3.5 text-primary" />
                    </div>
                  )}

                  <div className={`flex flex-col ${message.role === "user" ? "items-end" : "items-start"} max-w-[78%]`}>
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 ${
                        message.role === "user"
                          ? "bg-gradient-to-br from-primary to-accent text-background shadow-lg"
                          : "bg-muted/60 text-foreground border border-primary/20"
                      }`}
                      style={message.role === "assistant" ? { backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' } : undefined}
                    >
                      <p className="text-[13px] leading-relaxed whitespace-pre-wrap break-words">
                        {message.content}
                      </p>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1 px-2">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start gap-2 animate-fade-in">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Bot className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="bg-muted/60 rounded-2xl px-3.5 py-2.5 border border-primary/20" style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-primary/20 bg-card/80" style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}>
              <div className="flex gap-2 items-center">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 h-10 bg-background/80 border-2 border-primary/30 focus:border-primary rounded-xl text-sm placeholder:text-muted-foreground/60 focus:shadow-md transition-all"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  size="icon"
                  className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent hover:shadow-glow hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>

              <p className="text-[10px] text-center text-muted-foreground/50 mt-2.5 flex items-center justify-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                Powered by AI
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};
