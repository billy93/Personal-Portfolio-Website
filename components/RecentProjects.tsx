"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { projects, otherProjects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { InfiniteWorkCards } from "./ui/InfiniteWorkCards";
import MagicButton from "./MagicButton";
import { useState } from "react";

const RecentProjects = () => {
  const [max, setMax] = useState<number>(4);
  const router = useRouter();
  const handleDivClick = (item: any) => {
    // window.open(item.link, '_blank');
    router.replace(`/portfolio/${item.id}`);
  };
  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          Here are my&nbsp;
          <span className="text-purple">Amazing Works</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 md:gap-16 gap-10 mt-10">
          {projects.slice(0, max).map((item, i) => (
            <div
              onClick={() => handleDivClick(item)}
              data-aos={i % 2 == 0 ? "fade-left" : "fade-right"}
              className="h-[25rem] flex items-center justify-center sm:w-[36rem] w-[80vw] mt-10 md:mt-20"
              key={item.id}
            >
              <PinContainer
                title={item.title}
                href="https://twitter.com/billy_impact"
              >
                <div className="relative flex items-center justify-center sm:w-[36rem] w-[80vw] overflow-hidden mb-10">
                  <img src={item.img[0]} alt="cover" className="z-10" />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Explore More
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center mt-10">
          <MagicButton
            title={
              max >= projects.length ? "Time to Showcase Yours" : "View more"
            }
            icon={null}
            position="right"
            handleClick={() => {
              if (max >= projects.length) {
              } else {
                setMax(max + 4);
              }
            }}
          />
        </div>
        {/* <div className="flex flex-col items-center max-lg:mt-10">
            <div
              // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
              className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
            >
              <InfiniteWorkCards
                items={otherProjects}
                direction="left"
                speed="slow"
              />
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default RecentProjects;
