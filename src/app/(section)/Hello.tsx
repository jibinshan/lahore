import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hello: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#B0464B] py-12 lg:h-[115vh] lg:py-24">
      <div className="absolute inset-0 hidden items-end justify-center lg:flex">
        <div className="relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-3">
                <h6 className="text-center font-bebas_neue text-xl font-[400] capitalize tracking-[1.2px] text-[#921233]">
                  Booking request
                </h6>
                <div className="flex flex-col items-center">
                  <span className="text-center font-inter text-2xl font-[700] text-[#B0464B]">
                    <Link className="text-center" href={"tel:+441612493919"}>
                      +441612493919
                    </Link>
                  </span>
                  <span className="text-center font-inter text-2xl font-[400] text-[#B0464B]">
                    <Link href={"mailto:info@lahorimanchester.co.uk"}>
                      info@lahorimanchester.co.uk
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h6 className="text-center font-bebas_neue text-xl font-[400] capitalize tracking-[1.2px] text-[#921233]">
                  Location{" "}
                </h6>
                <div>
                  <span className="text-center font-inter text-lg font-[400] text-[#B0464B]">
                    <Link href={"https://maps.app.goo.gl/pRH9eLWiPSh2wEYc9"}>
                      824 Stockport Rd, Levenshulme, <br /> Manchester M19 3AW,
                      United Kingdom{" "}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h6 className="text-center font-bebas_neue text-xl font-[400] capitalize tracking-[1.2px] text-[#921233]">
                  Opening Hours{" "}
                </h6>
                <div>
                  <p className="text-center font-inter text-lg font-[400] text-[#B0464B]">
                    Monday-Sunday: 1:00PM - 11:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={"/images/home/hello/bg.png"}
            width={625}
            height={829}
            alt="bg"
            className="h-[350px] w-[250px] lg:h-[650px] lg:w-[450px]"
          />
        </div>
      </div>

      <div className="absolute -left-24 bottom-0 hidden lg:block">
        <div className="relative">
          <div className="absolute -left-2 bottom-0">
            <Image
              src={"/images/home/hello/left.png"}
              width={476}
              height={720}
              alt="bg"
              className="h-[610px] w-[470px] rounded-tl-[250px] rounded-tr-[250px] object-cover"
            />
          </div>
          <Image
            src={"/images/home/hello/bg.png"}
            width={625}
            height={829}
            alt="bg"
            className="h-[650px] w-[500px]"
          />
        </div>
      </div>

      <div className="absolute -right-24 bottom-0 hidden lg:block">
        <div className="relative">
          <div className="absolute -right-2 bottom-0">
            <Image
              src={"/images/home/hello/right.png"}
              width={476}
              height={720}
              alt="bg"
              className="h-[610px] w-[470px] rounded-tl-[250px] rounded-tr-[250px] object-cover"
            />
          </div>
          <Image
            src={"/images/home/hello/bg.png"}
            width={625}
            height={829}
            alt="bg"
            className="h-[650px] w-[500px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="lg:pb-2">
          <h3 className="text-center font-crazydots text-3xl font-[400] capitalize text-[#f2a137] lg:text-5xl">
            Say hello
          </h3>
        </div>
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
          <div className="relative lg:hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/images/home/hello/left.png"}
                width={476}
                height={720}
                alt="bg"
                className="h-[300px] w-[230px] rounded-tl-[150px] rounded-tr-[150px] object-cover"
              />
            </div>
            <Image
              src={"/images/home/hello/bg.png"}
              width={625}
              height={829}
              alt="bg"
              className="h-[350px] w-[250px] lg:h-[650px] lg:w-[450px]"
            />
          </div>
          <div className="relative lg:hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h6 className="text-center font-bebas_neue text-sm font-[400] capitalize tracking-[1.2px] text-[#921233]">
                    Booking request
                  </h6>
                  <div>
                    <p className="text-center font-inter text-base font-[700] text-[#B0464B]">
                      +441612493919
                    </p>
                    <p className="text-center font-inter text-base font-[400] text-[#B0464B]">
                      info@lahorimanchester.co.uk
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h6 className="text-center font-bebas_neue text-sm font-[400] capitalize tracking-[1.2px] text-[#921233]">
                    Location{" "}
                  </h6>
                  <div>
                    <p className="text-center font-inter text-base font-[400] text-[#B0464B]">
                      824 Stockport Rd, Levenshulme, <br /> Manchester M19 3AW,
                      United Kingdom{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h6 className="text-center font-bebas_neue text-sm font-[400] capitalize tracking-[1.2px] text-[#921233]">
                    Opening Hours{" "}
                  </h6>
                  <div>
                    <p className="text-center font-inter text-base font-[400] text-[#B0464B]">
                      Monday-Sunday: 1:00PM - 11:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={"/images/home/hello/bg.png"}
              width={625}
              height={829}
              alt="bg"
              className="h-[350px] w-[250px] lg:h-[650px] lg:w-[550px]"
            />
          </div>
          <div className="relative lg:hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/images/home/hello/right.png"}
                width={476}
                height={720}
                alt="bg"
                className="h-[300px] w-[230px] rounded-tl-[150px] rounded-tr-[150px] object-cover"
              />
            </div>
            <Image
              src={"/images/home/hello/bg.png"}
              width={625}
              height={829}
              alt="bg"
              className="h-[350px] w-[250px] lg:h-[650px] lg:w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hello;
