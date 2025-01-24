import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#B0464B] py-12 lg:py-20">
      <div className="flex flex-col items-center justify-center gap-4 lg:gap-6">
        <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-40">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-28">
            <Link
              href={"#"}
              className="text-center font-bebas_neue text-base font-[400] uppercase tracking-[0.72px] text-[#fff] lg:text-xl"
            >
              Home
            </Link>
            <Link
              href={"#"}
              className="text-center font-bebas_neue text-base font-[400] uppercase tracking-[0.72px] text-[#fff] lg:text-xl"
            >
              Menu
            </Link>
          </div>
          <div>
            <Link href={"#"}>
              <Image
                src={"/images/home/footer/logo.png"}
                width={164}
                height={59}
                alt="logo"
                className="w-32 pb-2"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-28">
            <Link
              href={"#"}
              className="text-center font-bebas_neue text-base font-[400] uppercase tracking-[0.72px] text-[#fff] lg:text-xl"
            >
              About
            </Link>
            <Link
              href={"#"}
              className="text-center font-bebas_neue text-base font-[400] uppercase tracking-[0.72px] text-[#fff] lg:text-xl"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 lg:mr-[2%]">
          <Link href={"#"}>
            <Image
              src={"/images/home/footer/insta.svg"}
              width={42}
              height={42}
              alt="logo"
              className="w-12"
            />
          </Link>
          <Link href={"#"}>
            <Image
              src={"/images/home/footer/fb.svg"}
              width={42}
              height={42}
              alt="logo"
              className="w-12"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4 lg:mr-[4%] lg:mt-12 lg:flex-row lg:items-start lg:gap-60">
          <div className="flex flex-col items-center justify-center gap-4 lg:mt-3">
            <h5 className="font-bebas_neue text-lg font-[400] capitalize tracking-[2.5px] text-[#ffc43c] lg:text-xl">
              Hours of Operation
            </h5>
            <p className="font-inter text-center text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6] lg:text-base">
              Mon: 1:00pm-11:30pm{" "}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h5 className="font-bebas_neue text-lg font-[400] capitalize tracking-[2.5px] text-[#ffc43c] lg:text-xl">
              Address{" "}
            </h5>
            <p className="font-inter text-center text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6] lg:text-base">
              824 Stockport Rd, <br /> Levenshulme, <br /> M19 3AW, United
              Kingdom{" "}
            </p>
            <p className="font-inter text-center text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6] lg:text-base">
              +441612493919
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"/images/home/footer/bike.svg"}
              width={42}
              height={42}
              alt="logo"
              className="w-12"
            />
            <p className="font-inter text-center text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6] lg:text-base">
              Craving LAHORI at home? <br /> Get it delivered <br /> via{" "}
              <span className="text-[#D3AF5E]">UberEats.</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
