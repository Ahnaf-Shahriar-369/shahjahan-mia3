import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const portfolioItems = [
  {
    image: "/mask-group.png",
    title: "Work name here",
    description:
      "Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: "/mask-group-1.png",
    title: "Work name here",
    description:
      "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",
  },
];

export const PortfolioSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16">
      <div className="container mx-auto px-4 max-w-[1110px]">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-6">
            <h2 className="[font-family:'Raleway',Helvetica] font-extrabold text-[#080808] text-[34px] text-center tracking-[0] leading-[normal]">
              Recent Work
            </h2>
            <p className="w-full max-w-[570px] [font-family:'IBM_Plex_Mono',Helvetica] font-normal text-[#9c9c9c] text-sm text-center tracking-[0.14px] leading-6">
              Solving user &amp; business problems since last 15+ years.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="relative w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] px-[30px]">
              {portfolioItems.map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-none bg-transparent"
                >
                  <CardContent className="p-0 flex flex-col gap-10">
                    <img
                      className="w-full h-[300px] object-cover"
                      alt="Portfolio work"
                      src={item.image}
                    />

                    <div className="flex flex-col gap-5">
                      <h3 className="[font-family:'Raleway',Helvetica] font-extrabold text-[#080808] text-2xl tracking-[0] leading-[normal]">
                        {item.title}
                      </h3>

                      <p className="[font-family:'IBM_Plex_Mono',Helvetica] font-normal text-[#9c9c9c] text-sm tracking-[0.14px] leading-6">
                        {item.description}
                      </p>

                      <Button className="w-fit bg-[#3e8e00] hover:bg-[#3e8e00]/90 text-white border border-solid border-[#61b91b] shadow-[0px_8px_30px_#3f8e004c] rounded px-6 py-2.5 h-[38px] [font-family:'IBM_Plex_Mono',Helvetica] font-bold text-sm">
                        Know more
                        <img
                          className="w-[5.89px] h-2.5 ml-2.5"
                          alt="Arrow"
                          src="/vector.svg"
                        />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <button
              className="absolute top-1/2 -translate-y-1/2 left-0 w-[30px] h-[30px] flex items-center justify-center"
              aria-label="Previous"
            >
              <img
                className="w-[30px] h-[30px]"
                alt="Previous"
                src="/call-to-action-1.svg"
              />
            </button>

            <button
              className="absolute top-1/2 -translate-y-1/2 right-0 w-[30px] h-[30px] flex items-center justify-center"
              aria-label="Next"
            >
              <img
                className="w-[30px] h-[30px]"
                alt="Next"
                src="/call-to-action.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
