"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DeleteIcon from "@/app/Icons/DeleteIcon";

export default function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string); // base64
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setPreview(null);
    setResult("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleGenerate = async () => {
    console.log("SENDING:", preview?.slice(0, 30));

    if (!preview) return;

    setLoading(true);
    setResult("");

    const res = await fetch("http://localhost:999/ocr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: preview }),
    });

    const data = await res.json();
    setResult(data.text);
    setLoading(false);
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
          <button onClick={handleRemove} className="absolute bottom-2 right-2">
            <DeleteIcon />
          </button>
        </div>
      )}

      <div className="flex justify-end">
        <Button onClick={handleGenerate} disabled={!preview || loading}>
          {loading ? "Analyzing..." : "Generate"}
        </Button>
      </div>

      {result && (
        <div className="border rounded-lg p-4 text-sm">
          <h4 className="font-semibold mb-2">Here is the summary</h4>
          <pre className="whitespace-pre-wrap">{result}</pre>
        </div>
      )}
    </div>
  );
}
