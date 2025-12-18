"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DeleteIcon from "@/app/Icons/DeleteIcon";

type ImageUploadProps = {
  setResult: (text: string) => void;
};

export default function ImageUpload({ setResult }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setPreview(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleGenerate = async () => {
    if (!preview) return;

    const res = await fetch("http://localhost:999/caption", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: preview }),
    });

    const data = await res.json();
    setResult(data.caption); // MainPage-ийн textarea-д орно
  };

  return (
    <div className="space-y-4">
      <Input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      {preview && (
        <div className="relative w-40 h-40">
          <img
            src={preview}
            alt="preview"
            className="w-full h-full object-cover rounded border"
          />
          <button
            onClick={handleRemove}
            className="absolute bottom-2 right-2 w-6 h-6 bg-white flex  items-center justify-center rounded-sm"
          >
            <DeleteIcon />
          </button>
        </div>
      )}

      <div className="flex justify-end">
        <Button onClick={handleGenerate} disabled={!preview || loading}>
          {loading ? "Analyzing..." : "Generate"}
        </Button>
      </div>
    </div>
  );
}
