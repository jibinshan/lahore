import Image from "next/image";

const Hero = ({}) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-oswald text-5xl font-semibold leading-[66px] text-[#fbead2] lg:text-6xl">
                Where Every
                <br /> Taste Weaves
                <br /> a Tale
              </h1>
              <p className="font-manrope text-lg font-normal tracking-[2px] text-[#C1B6A6]">
                Step into Lahori, where every dish tells a story of tradition
                and flavor. Indulge in the rich, aromatic spices of authentic
                Lahori cuisine, from sizzling Karahi to tender Chargha and
                fragrant biryanis. At Lahori, we bring the true essence of
                Pakistani street food to your table, crafting every meal with
                passion and authenticity. Experience the warmth, the flavors,
                and the heritage—because at Lahori, every bite is a celebration
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
            <Image
              src="/images/about-us/lohori1.jpg"
              width={951}
              height={975}
              alt="hero"
              className="object-cover md:max-h-[900px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
