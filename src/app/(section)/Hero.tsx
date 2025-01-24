import Image from "next/image";

const Hero = ({ }) => {
  return (
    <section
      id="hero"
      className="relative flex w-full items-center justify-center bg-[#080808]"
    >
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
      <div className="absolute w-full bottom-0 left-0 py-2 bg-[#bfa84a] z-30">
        <Image
          src="/images/home/hero/star.png"
          width={2148}
          height={55}
          alt=""
        />
      </div>
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <Image
          src='/images/home/hero/hero.png'
          width={1728}
          height={1117}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative mt-14 flex min-h-[100vh] w-full flex-col items-center justify-center gap-3 px-3 md:mt-0 md:flex-row md:gap-0 md:px-[130px]">
        <div className="flex flex-col justify-center items-center gap-5 z-30">
          <p className="text-center font-bebas_neue text-3xl leading-[60px] uppercase text-white md:text-8xl md:leading-[110px]">
            <span className="font-knewave tracking-normal capitalize"><span className="text-[#B0464B]">Experience</span> the</span><br />Authentic Flavors<br />
            <span className="text-[#F5AE52]">of <span className="font-crazydots">Lahore</span></span>
          </p>
          {/* <Button
            type="button"
            variant="outline"
            className="flex gap-3 rounded-none border border-white px-6 py-6 text-[#9A9A9A] bg-transparent"
          >
            <span>Order Now </span>
            <ChevronRight className="h-4 w-4 text-primary" />
          </Button> */}
        </div>
        {/* <div>
          <div
            className="flex h-fit w-fit items-center justify-center rounded-full border-[0.5px] border-[#080808] p-10 md:h-[700px] md:w-[700px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(17, 17, 17, 0.10) 50%, rgba(68, 68, 68, 0.10) 179%)",
            }}
          >
            <div
              className="relative flex h-fit w-fit items-center justify-end overflow-visible rounded-full px-0 md:h-[550px] md:w-[550px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(17, 17, 17, 0.56) 50%, rgba(68, 68, 68, 0.56) 100%)",
              }}
            >
              <Image
                src="/images/home/hero/hero.png"
                width={919}
                height={678}
                alt="hero"
                className="left-20 top-16 w-[900px] overflow-visible rounded-full md:absolute"
              />
            </div>
          </div>
        </div> */}

      </div>
    </section >
  );
};

export default Hero;
