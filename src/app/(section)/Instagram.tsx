import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Instagram: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#F5AE52] px-4 py-12 md:px-[50px] lg:px-[80px] lg:py-24 2xl:px-[140px]">
      <div className="flex flex-col gap-5 lg:gap-20">
        <div className="flex flex-col items-center justify-end gap-4 lg:mr-8 lg:flex-row lg:gap-72">
          <h2 className="font-crazydots text-3xl font-[400] capitalize text-[#921233] lg:text-5xl">
            INSTAGRAM
          </h2>
          <div className="flex justify-end">
            <Button className="text bg-[#B0464B] px-5 py-6 font-bebas_neue text-lg font-[400] uppercase tracking-[2.px] text-[#fff] lg:px-8 lg:py-7 lg:text-2xl">
              @lahorikarahi
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
          <div className="relative flex items-center justify-center">
            <Image
              src={"/images/home/instagram/bg.png"}
              width={379}
              height={379}
              alt="bg"
              className="h-auto w-auto object-cover lg:h-[300px] lg:w-[300px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/images/home/instagram/image1.png"}
                width={230}
                height={230}
                alt="image"
                className="h-auto w-auto object-contain lg:h-[250px] lg:w-[250px]"
              />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src={"/images/home/instagram/bg1.png"}
              width={379}
              height={379}
              alt="bg"
              className="h-auto w-auto object-cover lg:h-[300px] lg:w-[300px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/images/home/instagram/image2.png"}
                width={230}
                height={230}
                alt="image"
                className="h-auto w-auto object-contain lg:h-[250px] lg:w-[250px]"
              />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src={"/images/home/instagram/bg.png"}
              width={379}
              height={379}
              alt="bg"
              className="h-auto w-auto object-cover lg:h-[300px] lg:w-[300px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/images/home/instagram/image3.png"}
                width={230}
                height={230}
                alt="image"
                className="h-auto w-auto object-contain lg:h-[250px] lg:w-[250px]"
              />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src={"/images/home/instagram/bg1.png"}
              width={379}
              height={379}
              alt="bg"
              className="h-auto w-auto object-cover lg:h-[300px] lg:w-[300px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/images/home/instagram/image4.png"}
                width={230}
                height={230}
                alt="image"
                className="h-auto w-auto object-contain lg:h-[250px] lg:w-[250px]"
              />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src={"/images/home/instagram/bg1.png"}
              width={379}
              height={379}
              alt="bg"
              className="h-auto w-auto object-cover lg:h-[300px] lg:w-[300px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/images/home/instagram/image5.png"}
                width={230}
                height={230}
                alt="image"
                className="h-auto w-auto object-contain lg:h-[250px] lg:w-[250px]"
              />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src={"/images/home/instagram/bg.png"}
              width={379}
              height={379}
              alt="bg"
              className="h-auto w-auto object-cover lg:h-[300px] lg:w-[300px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/images/home/instagram/image6.png"}
                width={230}
                height={230}
                alt="image"
                className="h-auto w-auto object-contain lg:h-[250px] lg:w-[250px]"
              />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src={"/images/home/instagram/bg1.png"}
              width={379}
              height={379}
              alt="bg"
              className="h-auto w-auto object-cover lg:h-[300px] lg:w-[300px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/images/home/instagram/image7.png"}
                width={230}
                height={230}
                alt="image"
                className="h-auto w-auto object-contain lg:h-[250px] lg:w-[250px]"
              />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src={"/images/home/instagram/bg.png"}
              width={379}
              height={379}
              alt="bg"
              className="h-auto w-auto object-cover lg:h-[300px] lg:w-[300px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/images/home/instagram/image8.png"}
                width={230}
                height={230}
                alt="image"
                className="h-auto w-auto object-contain lg:h-[250px] lg:w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
