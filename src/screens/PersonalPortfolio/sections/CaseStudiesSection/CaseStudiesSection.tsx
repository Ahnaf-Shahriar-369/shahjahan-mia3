import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const caseStudiesData = [
  {
    category: "Fintech",
    categoryColor: "bg-[#fff6e8] text-[#ffa217]",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/mask-group-4.png",
    buttonColor: "bg-[#ffa217]",
    imagePosition: "right",
  },
  {
    category: "EdTech",
    categoryColor: "bg-[#d0e5ff] text-[#000aff]",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/mask-group-3.png",
    buttonColor: "bg-[#000aff]",
    imagePosition: "left",
  },
  {
    category: "Pharma",
    categoryColor: "bg-[#e0fff7] text-[#29b090]",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/mask-group-2.png",
    buttonColor: "bg-[#2ab090]",
    imagePosition: "right",
  },
];

export const CaseStudiesSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center py-12 px-4">
      <div className="max-w-[897px] w-full flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-6">
          <h2 className="[font-family:'Raleway',Helvetica] font-extrabold text-[#080808] text-[34px] text-center tracking-[0] leading-[normal]">
            Case Studies
          </h2>
          <p className="max-w-[570px] [font-family:'IBM_Plex_Mono',Helvetica] font-normal text-[#9c9c9c] text-sm text-center tracking-[0.14px] leading-6">
            Solving user &amp; business problems since last 15+ years.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="w-full flex flex-col gap-20">
          {caseStudiesData.map((study, index) => (
            <article
              key={index}
              className={`w-full flex ${
                study.imagePosition === "left" ? "flex-row-reverse" : "flex-row"
              } gap-6 items-start`}
            >
              <div className="flex-1 flex flex-col gap-6">
                <Badge
                  className={`${study.categoryColor} rounded-[60px] px-2.5 py-0 w-fit [font-family:'IBM_Plex_Mono',Helvetica] font-bold text-xs tracking-[0.12px] leading-6`}
                >
                  {study.category}
                </Badge>

                <h3 className="[font-family:'Raleway',Helvetica] font-extrabold text-[#080808] text-2xl tracking-[0] leading-[normal]">
                  {study.title}
                </h3>

                <p className="[font-family:'IBM_Plex_Mono',Helvetica] font-normal text-[#9c9c9c] text-sm tracking-[0.14px] leading-6">
                  {study.description}
                </p>

                <Button
                  className={`${study.buttonColor} hover:opacity-90 rounded shadow-[0px_8px_30px_rgba(42,176,144,0.1)] px-6 py-2.5 w-fit`}
                >
                  <span className="[font-family:'IBM_Plex_Mono',Helvetica] font-bold text-white text-sm tracking-[0] leading-[normal]">
                    View case study
                  </span>
                  <ChevronRightIcon className="w-3 h-2.5 ml-2" />
                </Button>
              </div>

              <div className="flex-1">
                <img
                  className="w-full h-[300px] object-cover rounded"
                  alt={`${study.category} case study`}
                  src={study.image}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
