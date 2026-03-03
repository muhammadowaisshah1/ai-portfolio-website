'use client';

import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, Linkedin, MapPin, ArrowRight, Send, Loader2 } from "lucide-react";
import { useToast } from "./ui/use-toast";

const EMAILJS_SERVICE_ID  = 'service_33fgmh9';
const EMAILJS_TEMPLATE_ID = 'template_z2pukzq';
const EMAILJS_PUBLIC_KEY  = '2QBVytctGre1C79EC';

export const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "syedowaisshah1010@gmail.com",
      href: "mailto:syedowaisshah1010@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 322 2191822",
      href: "tel:+923222191822",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "muhammad-owais-shah",
      href: "https://www.linkedin.com/in/muhammad-owais-shah-1b39962b7",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Sindh, Pakistan",
      href: null,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 relative" id="contact">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Open to opportunities in AI engineering, Full-Stack Web Development, and automation.
            Let's build something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Send me a Message</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                  <Input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow h-full animate-fade-in"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                        <div className="text-foreground font-medium break-all">{info.value}</div>
                      </div>
                      {info.href && (
                        <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      )}
                    </div>
                  </div>
                );
                return info.href ? (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Footer Section */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30">
              <h3 className="text-2xl font-bold mb-4 text-foreground">What I'm Looking For</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                Roles or projects where I can build AI-powered web applications with clean frontends,
                automate workflows using N8N and APIs, and create intelligent agents that assist with
                decision-making and repetitive tasks.
              </p>
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300"
                onClick={() => (window.location.href = "mailto:syedowaisshah1010@gmail.com")}
              >
                Send Email
                <Mail className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
