"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  console.log(reviews, "==review");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitType = document.querySelectorAll(".review-head");
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.2,
        });
      }
    });

    gsap.to(".review-underline", {
      scrollTrigger: {
        trigger: ".review-underline",
        toggleActions: "restart none none none",
      },
      scale: 1,
      duration: 1.5,
    });

    // const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e, "===e");
    // })

    // const raf = (time: number) => {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)

    // return () => {
    //   lenis.destroy(); // Cleanup Lenis instance to avoid memory leaks
    // };
  }, []);
  return (
    <section className="relative flex h-full w-full justify-center bg-[#F2A137]">
      <div className="absolute left-0 top-8 lg:top-20">
        <Image
          src={"/images/home/hello/left1.png"}
          width={919}
          height={1249}
          alt="bg"
          className="h-full w-full"
        />
      </div>
      <div className="absolute right-0 top-8 lg:top-20">
        <Image
          src={"/images/home/hello/right1.png"}
          width={919}
          height={1249}
          alt="bg"
          className="h-full w-full"
        />
      </div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-4 py-12 md:py-28">
        <div className="flex h-full w-full flex-col items-start justify-center gap-2 lg:gap-4">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <h2 className="text-center font-bebas_neue text-5xl font-[400] capitalize tracking-[2px] text-[#921233] lg:text-7xl">
              WHAT <span className="font-crazydots">OUR GUESTS</span> SAY
            </h2>
          </div>
        </div>
        <div className="flex w-full items-center justify-center p-4">
          {reviews && (
            <Carousel className="w-full px-4">
              <CarouselContent className="ml-4 flex w-full justify-center gap-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full basis-full flex-col gap-6 rounded-2xl border border-[#B0464B] bg-[#B0464B] px-6 py-10 md:basis-1/3 lg:py-16"
                  >
                    <div className="flex w-full items-center gap-2">
                      <Image
                        src={
                          review.profile_photo_url ||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={64}
                        height={64}
                        alt={review.author_name}
                      />
                      <div className="flex flex-col gap-2">
                        <p className="font-inter text-base font-[600] tracking-[0.57px] text-[#fff]">
                          {review.author_name}
                        </p>
                        <span className="font-inter text-sm font-[400] tracking-[0.57px] text-[#fff]">
                          {review.relative_time_description}
                        </span>
                      </div>
                    </div>
                    <div className="flex w-full">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <Icons.star key={index} className="text-[#f5ae52]" />
                      ))}
                    </div>
                    <div className="">
                      <p className="font-inter line-clamp-4 text-sm font-[600] tracking-[0.57px] text-[#fff]">
                        {review.text}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-6 transition-transform duration-300 ease-in-out lg:pb-0">
                <CarouselPrevious className="border-[#B0464B] text-[#fff] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#B0464B] text-[#fff] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
