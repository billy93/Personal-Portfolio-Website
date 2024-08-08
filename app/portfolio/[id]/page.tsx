import Footer from "@/components/Footer";
import BackButton from "@/components/ui/BackButton";
import Carousel from "@/components/ui/Carousel";
import { Spotlight } from "@/components/ui/Spotlight";
import withTransition from "@/components/withTransition";
import { getProjectById, projects } from "@/data";
import { cn } from "@/lib/utils";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PortfolioDetail = async ({ params: { id } }: SearchParamProps) => {
  const portfolio = getProjectById(Number(id))!;
  const icon = [
    "/re.svg",
    "/tail.svg",
    "/ts.svg",
    "/gsap.svg",
    "/chakra.svg",
    "/re.svg",
    "/tail.svg",
    "/ts.svg",
    "/gsap.svg",
    "/chakra.svg",
  ];
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <section id="portfolio">
          {/* <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="h-[80vh] w-[50vw] top-10 left-full"
              fill="purple"
            />
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
          </div> */}

          <div className="py-20 flex flex-col justify-center items-center m-auto">
            <div className="relative flex flex-col justify-center items-center m-auto">
              <BackButton />

              <h1 className="heading w-[50vw] text-center">
                {portfolio?.title}
              </h1>
              {portfolio?.subtitle ? (
                <p className="my-4 mb-10 text-center">{portfolio?.subtitle}</p>
              ) : (
                <br />
              )}
            </div>

            <div className="w-[100%] md:w-[70%]">
              <Carousel slides={portfolio.img} />
            </div>

            <div className="w-[100%] md:w-[70%] flex flex-col gap-10">
              {portfolio?.overview && (
                <div>
                  <h1 className="font-bold text-3xl md:text-4xl">Overview</h1>
                  <p className="my-4 font-light">{portfolio?.overview}</p>
                </div>
              )}

              {portfolio?.problem && (
                <div>
                  <h1 className="font-bold text-3xl md:text-4xl">Problem</h1>
                  <p className="my-4 font-light">{portfolio?.problem}</p>
                </div>
              )}

              <div>
                <h1 className="font-bold text-3xl md:text-4xl">Tech Stack</h1>
                <div className="grid gap-10 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 my-10 justify-evenly items-center flex-wrap">
                  {portfolio?.iconLists.map((e, i) => (
                    <div
                      key={i}
                      className="rounded-full bg-[#1D1F25] w-24 h-24 flex justify-center items-center "
                    >
                      <Image
                        width={0}
                        height={0}
                        style={{ width: "60%", height: "60%" }}
                        src={e}
                        className="block object-fill"
                        alt={`Logo`}
                      ></Image>
                    </div>
                  ))}
                </div>
              </div>

              {portfolio?.reflection && (
                <div>
                  <h1 className="font-bold text-3xl md:text-4xl">Reflection</h1>
                  <p className="my-4 font-light">
                    Morrent, our cutting-edge car rental application developed
                    using the robust MERN stack, is revolutionizing the car
                    rental industry. With a dynamic homepage showcasing featured
                    vehicles, convenient pickup and drop-off locations, and a
                    comprehensive list of available cars, It ensures a seamless
                    and visually appealing experience for users.
                  </p>
                </div>
              )}

              <div>
                <h1 className="font-bold text-3xl md:text-4xl">Final Site</h1>
                {portfolio?.link.map((e: any, i: any) => (
                  <p key={i} className="my-4 font-light">
                    <a className="text-blue-400" target="_blank" href={e}>
                      {e} <img src="/link-2.svg" className="inline" />
                    </a>
                  </p>
                ))}
                <Carousel slides={[portfolio.img[0]]} />
              </div>

              {portfolio?.learning && (
                <div>
                  <h1 className="font-bold text-3xl md:text-4xl">Learning</h1>
                  <ul className="list-decimal px-5">
                    <li>
                      <p className="my-4 font-light">
                        Morrent, our cutting-edge car rental application
                        developed using the robust MERN stack, is
                        revolutionizing the car rental industry. With a dynamic
                        homepage showcasing featured vehicles, convenient pickup
                        and drop-off locations, and a comprehensive list of
                        available cars, It ensures a seamless and visually
                        appealing experience for users.
                      </p>
                    </li>
                    <li>
                      <p className="my-4 font-light">
                        Morrent, our cutting-edge car rental application
                        developed using the robust MERN stack, is
                        revolutionizing the car rental industry. With a dynamic
                        homepage showcasing featured vehicles, convenient pickup
                        and drop-off locations, and a comprehensive list of
                        available cars, It ensures a seamless and visually
                        appealing experience for users.
                      </p>
                    </li>
                    <li>
                      <p className="my-4 font-light">
                        Morrent, our cutting-edge car rental application
                        developed using the robust MERN stack, is
                        revolutionizing the car rental industry. With a dynamic
                        homepage showcasing featured vehicles, convenient pickup
                        and drop-off locations, and a comprehensive list of
                        available cars, It ensures a seamless and visually
                        appealing experience for users.
                      </p>
                    </li>
                  </ul>
                </div>
              )}

              {portfolio?.challenge && (
                <div>
                  <h1 className="font-bold text-3xl md:text-4xl">Challenges</h1>
                  <ul className="list-decimal px-5">
                    <li>
                      <p className="my-4 font-light">
                        Morrent, our cutting-edge car rental application
                        developed using the robust MERN stack, is
                        revolutionizing the car rental industry. With a dynamic
                        homepage showcasing featured vehicles, convenient pickup
                        and drop-off locations, and a comprehensive list of
                        available cars, It ensures a seamless and visually
                        appealing experience for users.
                      </p>
                    </li>
                    <li>
                      <p className="my-4 font-light">
                        Morrent, our cutting-edge car rental application
                        developed using the robust MERN stack, is
                        revolutionizing the car rental industry. With a dynamic
                        homepage showcasing featured vehicles, convenient pickup
                        and drop-off locations, and a comprehensive list of
                        available cars, It ensures a seamless and visually
                        appealing experience for users.
                      </p>
                    </li>
                    <li>
                      <p className="my-4 font-light">
                        Morrent, our cutting-edge car rental application
                        developed using the robust MERN stack, is
                        revolutionizing the car rental industry. With a dynamic
                        homepage showcasing featured vehicles, convenient pickup
                        and drop-off locations, and a comprehensive list of
                        available cars, It ensures a seamless and visually
                        appealing experience for users.
                      </p>
                    </li>
                  </ul>
                </div>
              )}

              {portfolio?.future && (
                <div>
                  <h1 className="font-bold text-3xl md:text-4xl">Future</h1>
                  <p className="my-4 font-light">
                    Morrent, our cutting-edge car rental application developed
                    using the robust MERN stack, is revolutionizing the car
                    rental industry. With a dynamic homepage showcasing featured
                    vehicles, convenient pickup and drop-off locations, and a
                    comprehensive list of available cars, It ensures a seamless
                    and visually appealing experience for users.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioDetail;
