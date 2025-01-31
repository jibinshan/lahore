import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
        <h2 className="font-oswald text-center text-8xl text-[#262626] md:left-[15%] md:text-8xl">
          The Lahori
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/lahori2.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-oswald max-w-[500px] text-center text-6xl sm:text-7xl md:text-start">
              From Spice <br />
              to Soul
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] tracking-[2px] text-[#C1B6A6] md:text-start">
              Bringing the essence of Lahore to life begins with a deep passion
              for bold flavors and a commitment to authenticity. At Lahori,
              every dish is a tribute to time-honored traditions, enriched by
              the finest ingredients and perfected with care. Our mission is to
              unite people through the love of food—where every bite tells a
              story of heritage, warmth, and culinary artistry.
              <br />
              <br />
              From the first sizzle of Karahi to the rich aroma of slow-cooked
              biryanis, every detail is crafted to create an unforgettable
              experience. Each spice, each flavor, and each dish is a
              celebration of Pakistan’s vibrant food culture. At Lahori, it’s
              more than just a meal—it’s a journey through taste, history, and
              togetherness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
