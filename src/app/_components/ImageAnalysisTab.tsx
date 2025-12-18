"use client";

import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "@/components/ui/inputFile";
import PaperIcon from "../Icons/PaperIcon";
import RefreshButton from "../Icons/RefreshButton";
import StarIcon from "../Icons/StartIcon";

export default function ImageAnalysisTab({
  result,
  setResult,
}: {
  result: string;
  setResult: (v: string) => void;
}) {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <StarIcon />
          <p className="text-[20px] font-semibold">Image analysis</p>
        </div>

        <div className="cursor-pointer" onClick={() => setResult("")}>
          <RefreshButton />
        </div>
      </div>

      {/* Upload */}
      <div className="mt-5 text-sm text-[#71717a]">
        <p className="mb-2">
          Upload a food photo, and AI will detect the ingredients.
        </p>

        {/* ImageUpload дотор Generate button байгаа */}
        <ImageUpload setResult={setResult} />
      </div>

      {/* Result */}
      <div className="mt-6 flex gap-1 items-center">
        <PaperIcon />
        <p className="text-[20px] font-semibold">Here is the summary</p>
      </div>

      <Textarea
        value={result}
        readOnly
        placeholder="First, enter your image to recognize ingredients."
        className="mt-2 "
      />
    </>
  );
}
