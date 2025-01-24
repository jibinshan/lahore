import Image from "next/image";

const BavetteStory = ({ }) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center lg:py-16 p-4">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
        <h2 className="font-oswald text-8xl text-[#262626] md:left-[15%] md:text-8xl text-center">
          The TiffinBox<br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/story.png"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-oswald text-6xl sm:text-7xl md:text-start">
              From Spice <br />to Symphony
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6] md:text-start tracking-[2px]">
              Bringing culinary dreams to life begins with a deep love for authentic flavors and an unwavering commitment to excellence. At Tiffinbox, every dish is born from a vision rooted in tradition and enhanced by innovation. Our mission is to bring people together over meals that celebrate culture, creativity, and the artistry of dining.
              <br />
              <br />
              From the first waft of aromatic spices to the harmonious blend of flavors on your plate, every detail reflects our dedication to creating memorable dining experiences. Each ingredient tells a story, coming together to craft moments that linger long after the meal. At Tiffinbox, it’s not just about food—it’s about a journey worth cherishing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
