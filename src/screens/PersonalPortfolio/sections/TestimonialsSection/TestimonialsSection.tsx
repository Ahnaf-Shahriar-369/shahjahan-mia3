import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonialsData = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    clientName: "Client Name",
    clientPhoto: "/client-photo-1-1.png",
    position: "col-start-1 row-start-1",
  },
  {
    id: 2,
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    clientName: "Client Name",
    clientPhoto: "/client-photo-2-1.png",
    position: "col-start-2 row-start-1",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    clientName: "Client Name",
    clientPhoto: "/client-photo-1.png",
    position: "col-start-1 row-start-2",
  },
  {
    id: 4,
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    clientName: "Client Name",
    clientPhoto: "/client-photo-2.png",
    position: "col-start-2 row-start-2",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#080808] py-20">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="flex flex-col items-center gap-2.5 mb-[58px]">
          <h2 className="[font-family:'Raleway',Helvetica] font-extrabold text-white text-[34px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Testimonials
          </h2>
          <p className="w-full max-w-[570px] text-center [font-family:'IBM_Plex_Mono',Helvetica] font-normal text-[#9c9c9c] text-sm tracking-[0.14px] leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[30px] max-w-[920px] mx-auto">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`relative ${testimonial.position}`}
            >
              <div className="absolute top-[-32px] left-[10px] [font-family:'Raleway',Helvetica] font-normal text-white text-[100px] tracking-[1.00px] leading-[normal] whitespace-nowrap z-10">
                &quot;
              </div>
              <Card className="relative h-[212px] rounded-md border-[none] bg-transparent before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(90deg,rgba(72,72,72,1)_0%,rgba(27,27,27,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <CardContent className="p-[30px] h-full flex flex-col justify-between">
                  <p className="[font-family:'IBM_Plex_Mono',Helvetica] font-normal text-[#9c9c9c] text-sm tracking-[0.14px] leading-6">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-2.5 mt-auto">
                    <Avatar className="w-[50px] h-[50px]">
                      <AvatarImage
                        src={testimonial.clientPhoto}
                        alt="Client photo"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="[font-family:'Raleway',Helvetica] font-bold text-white text-lg text-center tracking-[0] leading-[normal] whitespace-nowrap">
                      {testimonial.clientName}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
