"use client";

import { X, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function ChatPopup({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "Hi 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "This is an AI response 🤖" },
      ]);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-24 right-8 w-[320px] h-105 bg-white border rounded-xl shadow-lg flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <p className="text-sm font-semibold">Chat assistant</p>
        <button onClick={onClose}>
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] px-3 py-2 rounded-lg ${
              m.role === "user"
                ? "ml-auto bg-black text-white"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            {m.text}
          </div>
        ))}

        {loading && (
          <div className="bg-gray-100 px-3 py-2 rounded-lg w-fit text-xs text-muted-foreground">
            AI is typing...
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
