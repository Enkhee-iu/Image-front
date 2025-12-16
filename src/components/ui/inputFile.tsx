"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="space-y-4">
      <Input type="file" accept="image/*" onChange={handleChange} />

      {preview && (
        <img
          src={preview}
          alt="preview"
          className="w-40 h-40 object-cover rounded-lg border"
        />
      )}
      <div className="flex justify-end">
      <Button>Generate</Button>
      </div>
    </div>
  );
}
