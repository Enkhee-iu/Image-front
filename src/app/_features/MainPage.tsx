"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import StarIcon from "../Icons/StartIcon";
import ImageUpload from "@/components/ui/inputFile";
import PaperIcon from "../Icons/PaperIcon";
import { InputDemo } from "@/components/InputDemo";
import RefreshButton from "../Icons/RefreshButton";
import { InputDisabled } from "@/components/ui/inputdisabled";
import { ButtonDefault } from "@/components/ui/GenerButton";
import { InputEnabled } from "@/components/ui/InputEnabled";
import ResultIcon from "../Icons/resulticon";
import MessageCircle from "../Icons/MessageCircle";
import ChatPopup from "../_components/Chatpopup";
import { Input } from "@/components/ui/input";

export default function MainPage() {
  const [openChat, setOpenChat] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="flex justify-center relative">
        <Tabs
          defaultValue="image"
          className="w-145 h-222 
        pt-6 pb-6 gap-6"
        >
          {/* Tabs header */}
          <TabsList>
            <TabsTrigger value="analysis">Image analysis</TabsTrigger>
            <TabsTrigger value="recognition">
              Ingredient recognition
            </TabsTrigger>
            <TabsTrigger value="creator">Image creator</TabsTrigger>
          </TabsList>

          {/* Tabs content */}
          <TabsContent value="analysis">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <StarIcon />
                <p className="text-[20px] leading-7 font-semibold font-inter text-[#09090b] text-left">
                  Image analysis
                </p>
              </div>
              <div className="w-12 h-10 flex items-center justify-center">
                <RefreshButton />
              </div>
            </div>

            <div className="mt-5 relative text-[14px] leading-5 font-inter text-[#71717a] text-left">
              <p className="mb-2">
                Upload a food photo, and AI will detect the ingredients.
              </p>
              <ImageUpload />
            </div>

            <div className="mt-6 flex gap-1">
              <PaperIcon />
              <p className="relative text-[20px] leading-6 font-semibold font-inter text-black text-left">
                Here is the summary
              </p>
            </div>
            <div className="mt-4">
              <Input />
            </div>
          </TabsContent>

          <TabsContent value="recognition">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <StarIcon />
                <p className="text-[20px] leading-7 font-semibold font-inter text-[#09090b] text-left">
                  Ingredient recognition
                </p>
              </div>
              <div className="w-12 h-10 flex items-center justify-center">
                <RefreshButton />
              </div>
            </div>

            <div className="mt-5 relative text-[14px] leading-5 font-inter text-[#71717a] text-left">
              <p className="mb-2">
                Describe the food, and AI will detect the ingredients.
              </p>
              <InputDisabled />
              <div className="flex justify-end">
                <ButtonDefault />
              </div>
            </div>

            <div className="flex gap-2">
              <PaperIcon />
              <p className="text-[20px] leading-7 font-semibold font-inter text-[#09090b] text-left">
                Identified Ingredients
              </p>
            </div>

            <div>
              <p className="mt-2 relative text-[14px] leading-7 font-inter text-[#71717a] text-left">
                First, enter your text to recognize an ingredients.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="creator">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <StarIcon />
                <p className="text-[20px] leading-7 font-semibold font-inter text-[#09090b] text-left">
                  Food image creator
                </p>
              </div>
              <div className="w-12 h-10 flex items-center justify-center">
                <RefreshButton />
              </div>
            </div>

            <div className="mt-5 relative text-[14px] leading-5 font-inter text-[#71717a] text-left">
              <p className="mb-2">
                What food image do you want? Describe it briefly.
              </p>
              <InputEnabled />
              <div className="flex justify-end">
                <ButtonDefault />
              </div>
            </div>

            <div className="flex gap-2">
              <ResultIcon />
              <p className="text-[20px] leading-7 font-semibold font-inter text-[#09090b] text-left">
                Result
              </p>
            </div>

            <div>
              <p className="mt-2 relative text-[14px] leading-7 font-inter text-[#71717a] text-left">
                First, enter your text to recognize an ingredients.
              </p>
            </div>
          </TabsContent>
        </Tabs>
        <div
          className="fixed bottom-8 right-8 h-12 w-12
             rounded-full bg-[#18181b]
             flex items-center justify-center
             cursor-pointer"
          onClick={() => setOpenChat(true)}
        >
          <MessageCircle />
        </div>

        {openChat && <ChatPopup onClose={() => setOpenChat(false)} />}
      </div>
    </>
  );
}
