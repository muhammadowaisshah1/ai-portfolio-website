"use client";

import dynamic from "next/dynamic";

const ChatWidget = dynamic(
  () => import("@/components/ChatWidget").then((mod) => ({ default: mod.ChatWidget })),
  {
    ssr: false,
    loading: () => null,
  }
);

export function ChatWidgetWrapper() {
  return <ChatWidget />;
}
