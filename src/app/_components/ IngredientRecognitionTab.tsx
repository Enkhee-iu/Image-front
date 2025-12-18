"use client";

import { Textarea } from "@/components/ui/textarea";
import { ButtonDefault } from "@/components/ui/GenerButton";
import PaperIcon from "../Icons/PaperIcon";
import RefreshButton from "../Icons/RefreshButton";
import StarIcon from "../Icons/StartIcon";
import { useState } from "react";

export default function IngredientRecognitionTab() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setResult("• Rice\n• Chicken\n• Egg");
    if (!text.trim()) return;

    setLoading(true);
    setResult("");

    try {
      const res = await fetch("http://localhost:999/ingredients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      setResult(data.ingredients);
    } catch (err) {
      setResult("Failed to recognize ingredients");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <StarIcon />
          <p className="text-[20px] font-semibold">Ingredient recognition</p>
        </div>

        <div
          className="cursor-pointer"
          onClick={() => {
            setText("");
            setResult("");
          }}
        >
          <RefreshButton />
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 mb-2 text-sm text-[#71717a]">
        Describe the food, and AI will detect the ingredients.
      </p>

      {/* INPUT — Food description */}
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="e.g. Chicken fried rice with egg and carrot"
        className="min-h-30"
      />

      {/* Generate button */}
      <div className="flex justify-end mt-3">
        <ButtonDefault onClick={generate} disabled={loading}>
          {loading ? "Analyzing..." : "Generate"}
        </ButtonDefault>
      </div>

      {/* Result header */}
      <div className="mt-6 flex gap-2 items-center">
        <PaperIcon />
        <p className="text-[20px] font-semibold">Identified Ingredients</p>
      </div>

      {/* RESULT — AI output */}
      <Textarea
        value={result}
        readOnly
        placeholder="Result will appear here..."
        className="mt-2 "
      />
    </>
  );
}
