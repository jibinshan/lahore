const Hero = ({ }) => {
    return (
        <section
            id="hero"
            className="flex h-full min-h-[400px] w-full flex-col items-center justify-center gap-[1.38rem] text-[1.5rem] leading-[110%]"
            style={{
                background:
                    "linear-gradient(170deg, rgba(0, 0, 0, 0.00) 7.51%, rgba(0, 0, 0, 0.80) 92.93%), url(/images/ourstory/hero.png) lightgray 50% / cover no-repeat",
            }}
        >
            <p className="w-full font-gotu text-center text-lg">our story</p>
            <h1 className="w-full text-center font-gotu text-[4.75rem] leading-[80%]">
                Gods Own Country
            </h1>
        </section>
    );
};

export default Hero;
