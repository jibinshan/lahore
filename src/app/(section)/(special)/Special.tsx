"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import { useEffect } from "react";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({ }) => {
  const { modelData } = useRestaurant();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia();

    mm.add("(max-width:690px)", () => {
      gsap.to('.special-description', {
        scrollTrigger: {
          trigger: ".special-description",
          toggleActions: "restart none none none"
        },
        x: 0,
      }
      )
    })

    mm.add("(min-width:691px)", () => {
      gsap.to('.special-description', {
        scrollTrigger: {
          trigger: ".special-description",
          toggleActions: "restart none none none"
        },
        x: 30,
        duration: 2
      }
      )
    })

    gsap.to('.special-title', {
      scrollTrigger: {
        trigger: ".special-title",
        toggleActions: 'restart none none none',
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      x: 30,
      duration: 1.5

    })

    const splitType = document.querySelectorAll(".special-head")
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" })
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
          },
          opacity: 0.2,
          stagger: 0.2
        })
      }
    })



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
  }, [])
  return (
    <section className="relative flex flex-col h-full w-full justify-center bg-[#f2a137] overflow-x-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 py-12 px-4 md:px-[130px]">
        <div className="w-full flex justify-between items-end">
          <h1 className="special-head text-center md:text-start text-3xl md:text-7xl font-bebas_neue uppercase text-[#921233] md:tracking-[7px] md:leading-[80px]">
            Authentic<br />
            <span className="font-knewave">
              LAHORE
            </span><br />
            SPECIALS<br />
          </h1>
          <h3 className="special-title -ml-[50px] font-inter text-xl text-[#921233] tracking-[2px] max-w-[300px]">Immerse yourself in the rich aroma of Lahori spices and flavors, and soon, you`ll feel as if you`re in the heart of Lahore</h3>
        </div>
        {/* <p className="special-description max-w-[500px] px-2 text-center font-light leading-[160%] text-[#C1B6A6] md:px-0 md:-ml-[50px] font-jakarta">
          We bring the finest cuts of beef to Tiffin Box with a commitment to quality and sustainability. Embracing the city`s vibrant culinary heritage, each dish reflects our dedication to responsible sourcing. Experience dining that honors both our guests and the environment.
        </p> */}
        {modelData && (
          <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
            <EmblaCarousel slides={modelData} options={OPTIONS} />
          </div>
        )}
      </div>
      <div className="absolute w-full h-full left-0 top-0 flex justify-center items-end">
        <div className="relative w-full flex justify-start items-start">
          <Image
            src='/images/home/special/bottom.png'
            width={2160}
            height={438}
            alt="bottom"
            className="w-full object-cover z-10"
          />
          <div className="absolute w-full left-0 top-0 h-full flex justify-start items-end">
            <div
              className="bg-[#673147] w-full h-[100px] left-0 bottom-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
