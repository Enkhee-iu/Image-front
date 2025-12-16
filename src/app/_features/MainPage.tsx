"use client";
import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
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

export default function MainPage() {
  const [openChat, setOpenChat] = useState(false);
    return(
       <>
       <div className="flex justify-center relative">
        <Tabs defaultValue="image" className="w-[580px] h-[888px] 
        pt-[24px] pb-[24px] gap-[24px]">
      {/* Tabs header */}
      <TabsList>
        <TabsTrigger value="analysis">Image analysis</TabsTrigger>
        <TabsTrigger value="recognition">Ingredient recognition</TabsTrigger>
        <TabsTrigger value="creator">Image creator</TabsTrigger>
      </TabsList>

      {/* Tabs content */}
      <TabsContent value="analysis">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <StarIcon/>
            <p className="text-[20px] leading-[28px] font-semibold font-inter text-[#09090b] text-left">Image analysis</p>
            </div>
            <div className="w-[48px] h-[40px] flex items-center justify-center">
              <RefreshButton/>
            </div>
        </div>

        <div className="mt-[20px] relative text-[14px] leading-[20px] font-inter text-[#71717a] text-left">
                <p className="mb-2">Upload a food photo, and AI will detect the ingredients.</p>
                <ImageUpload/>
        </div>

        <div className="mt-[24px] flex gap-1">
            <PaperIcon/>
            <p className="relative text-[20px] leading-[24px] font-semibold font-inter text-black text-left"
>Here is the summary</p>
        </div>
        <div className="mt-[16px]">
            <InputDemo/>
        </div>
      </TabsContent>

      <TabsContent value="recognition">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <StarIcon/>
            <p className="text-[20px] leading-[28px] font-semibold font-inter text-[#09090b] text-left">Ingredient recognition</p>
            </div>
            <div className="w-[48px] h-[40px] flex items-center justify-center">
              <RefreshButton/>
            </div>
        </div>

         <div className="mt-[20px] relative text-[14px] leading-[20px] font-inter text-[#71717a] text-left">
                <p className="mb-2">Describe the food, and AI will detect the ingredients.</p>
                <InputDisabled/>
                <div className="flex justify-end"><ButtonDefault/></div>
        </div>

        <div className="flex gap-2">
          <PaperIcon/>
          <p className="text-[20px] leading-[28px] font-semibold font-inter text-[#09090b] text-left">Identified Ingredients</p>
        </div>

        <div>
            <p className="mt-2 relative text-[14px] leading-[28px] font-inter text-[#71717a] text-left">First, enter your text to recognize an ingredients.</p>
        </div>
      </TabsContent>

       <TabsContent value="creator">
         <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <StarIcon/>
            <p className="text-[20px] leading-[28px] font-semibold font-inter text-[#09090b] text-left">Food image creator</p>
            </div>
            <div className="w-[48px] h-[40px] flex items-center justify-center">
              <RefreshButton/>
            </div>
        </div>

         <div className="mt-[20px] relative text-[14px] leading-[20px] font-inter text-[#71717a] text-left">
                <p className="mb-2">What food image do you want? Describe it briefly.</p>
                <InputEnabled/>
                <div className="flex justify-end"><ButtonDefault/></div>
        </div>

        <div className="flex gap-2">
          <ResultIcon/>
          <p className="text-[20px] leading-[28px] font-semibold font-inter text-[#09090b] text-left">Result</p>
        </div>

        <div>
            <p className="mt-2 relative text-[14px] leading-[28px] font-inter text-[#71717a] text-left">First, enter your text to recognize an ingredients.</p>
        </div>
      </TabsContent>
    </Tabs>
   <div
  className="fixed bottom-8 right-8 h-[48px] w-[48px]
             rounded-full bg-[#18181b]
             flex items-center justify-center
             cursor-pointer"
  onClick={() => setOpenChat(true)}
>
  <MessageCircle />
</div>

{openChat && (
  <ChatPopup onClose={() => setOpenChat(false)} />
)}


    </div>
    
    </>
    )
}