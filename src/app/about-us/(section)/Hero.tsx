import Image from "next/image";

const Hero = ({ }) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row px-4 lg:px-0 gap-6 lg:gap-0">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="flex flex-col gap-6 items-start lg:w-8/12 mt-20 lg:mt-0">
              <h1 className="font-oswald text-[#fbead2] leading-[66px] font-semibold text-5xl lg:text-6xl">Where Every<br /> Taste Weaves<br /> a Tale</h1>
              <p className="text-[#C1B6A6] font-manrope font-normal tracking-[2px] text-lg">Embark on a culinary journey at Tiffinbox, where tradition blends seamlessly with innovation. Indulge in authentic Kerala curries, flavorful biryanis, and globally inspired fusion creations, each crafted with precision and care. At Tiffinbox, we offer more than just meals—we create unforgettable dining experiences. Immerse yourself in the vibrant spices, celebrate the diversity, and savor the true essence of Asian cuisine.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6">
            <Image src='/images/about-us/hero.png' width={951} height={975} alt="hero" className="md:max-h-[900px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
