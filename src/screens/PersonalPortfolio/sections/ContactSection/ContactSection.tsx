import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col bg-[#080808] py-20 px-4">
      <div className="flex items-center justify-center">
        <h2 className="[font-family:'Raleway',Helvetica] font-extrabold text-white text-[34px] text-center tracking-[0] whitespace-nowrap">
          Get In Touch
        </h2>
      </div>

      <div className="flex justify-center mt-2.5">
        <p className="w-full max-w-[570px] text-center [font-family:'IBM_Plex_Mono',Helvetica] font-normal text-[#9c9c9c] text-sm tracking-[0.14px] leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="flex flex-col items-center mt-10 gap-5 w-full max-w-[350px] mx-auto">
        <div className="flex flex-col gap-[5px] w-full">
          <Label className="[font-family:'IBM_Plex_Mono',Helvetica] font-semibold text-white text-xs tracking-[0]">
            Email
          </Label>
          <Input
            type="email"
            placeholder="Please enter your email"
            className="h-10 bg-[#f7f7f7] border-[#d7d7d7] rounded [font-family:'IBM_Plex_Mono',Helvetica] font-normal text-[#757575] text-xs tracking-[0] placeholder:text-[#757575]"
          />
        </div>

        <div className="flex flex-col gap-[5px] w-full">
          <Label className="[font-family:'IBM_Plex_Mono',Helvetica] font-semibold text-white text-xs tracking-[0]">
            Mobile
          </Label>
          <Input
            type="tel"
            placeholder="Enter mobile"
            className="h-10 bg-[#f7f7f7] border-[#d7d7d7] rounded [font-family:'IBM_Plex_Mono',Helvetica] font-normal text-[#757575] text-xs tracking-[0] placeholder:text-[#757575]"
          />
        </div>

        <div className="flex flex-col gap-[5px] w-full">
          <Label className="[font-family:'IBM_Plex_Mono',Helvetica] font-semibold text-white text-xs tracking-[0]">
            Message
          </Label>
          <Textarea
            placeholder="Enter your message"
            className="h-[120px] bg-[#f7f7f7] border-[#d7d7d7] rounded [font-family:'IBM_Plex_Mono',Helvetica] font-normal text-[#757575] text-xs tracking-[0] placeholder:text-[#757575] resize-none"
          />
        </div>

        <Button className="h-[50px] w-full bg-[#3e8e00] hover:bg-[#3e8e00]/90 border border-solid border-[#61b91b] shadow-[0px_8px_30px_#3f8e004c] rounded [font-family:'IBM_Plex_Mono',Helvetica] font-bold text-white text-sm tracking-[0] flex items-center justify-center gap-2.5">
          Submit
          <img className="w-[5.89px] h-2.5" alt="Vector" src="/vector.svg" />
        </Button>
      </div>
    </section>
  );
};
