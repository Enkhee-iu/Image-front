"use client";

import { X } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ChatPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-24 right-8 w-[320px] h-[420px] bg-white border rounded-xl shadow-lg flex flex-col">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <p className="text-sm font-semibold">How can I help you today?</p>
        <button onClick={onClose}>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages area */}
      <div className="flex-1 p-4 text-sm text-muted-foreground">
        {/* messages энд орно */}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2">
        <Input placeholder="Type your message..." />
        <button className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center">
          ➤
        </button>
      </div>
    </div>
  );
}
