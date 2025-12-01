import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  const clientLogos = [{ src: "/clients-logos.svg", alt: "Client logos" }];

  return (
    <header className="relative w-full bg-[#080808] py-[150px]">
      <div className="container mx-auto px-[180px]">
        <div className="flex items-center justify-between gap-12">
          <div className="flex flex-col items-start justify-center gap-[30px] max-w-[538px]">
            <div className="inline-flex flex-col items-start gap-2.5">
              <div className="inline-flex flex-col items-start">
                <div className="flex flex-col items-start gap-2.5 px-0 py-2.5">
                  <h1 className="[font-family:'Raleway',Helvetica] font-extrabold text-white text-[44px] tracking-[0] leading-[normal]">
                    Md. Shahjahan Miah
                  </h1>
                </div>
              </div>

              <div className="inline-flex flex-col items-start justify-center gap-2.5">
                <p className="w-[492px] [font-family:'IBM_Plex_Mono',Helvetica] font-normal text-[#9c9c9c] text-sm tracking-[0.14px] leading-6">
                  Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
            </div>

            <Button className="inline-flex items-center gap-2.5 px-16 py-[21px] bg-[#3e8e00] hover:bg-[#3e8e00]/90 rounded border border-solid border-[#61b91b] shadow-[0px_8px_30px_#3f8e0080] h-auto">
              <span className="[font-family:'IBM_Plex_Mono',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal]">
                Let&apos;s get started
              </span>
              <ChevronRightIcon className="w-[5.89px] h-2.5" />
            </Button>

            <div className="inline-flex flex-col items-start gap-2.5 mt-[76px]">
              <p className="[font-family:'IBM_Plex_Mono',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                Worked with
              </p>
            </div>

            <div className="w-full">
              {clientLogos.map((logo, index) => (
                <img
                  key={index}
                  className="w-full max-w-[920px] h-[60px]"
                  alt={logo.alt}
                  src={logo.src}
                />
              ))}
            </div>
          </div>

          <div className="flex-shrink-0">
            <img
              className="w-[350px] h-[350px] rounded-full"
              alt="Photo here"
              src="/photo-here.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
