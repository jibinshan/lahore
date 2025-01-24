import Image from "next/image"

const Description = ({ }) => {
    return (
        <section className="relative w-full md:h-[550px] flex py-12 md:py-24 px-4 md:px-[130px]  items-center justify-center">
            <div className="absolute w-full h-full left-0 top-0 flex items-end justify-center">
                <Image
                    src='/images/ourstory/bg.png'
                    width={2400}
                    height={465}
                    alt="bg"
                />
            </div>
            <p className="w-full text-center font-manrope max-w-[550px] text-xl tracking-[1px] font-[300]">
                Kerala, a southern Indian state renowned for its breathtaking landscapes and rich cultural heritage, is also a global hub for spices. With a history dating back thousands of years, Kerala`s spice trade has played a pivotal role in shaping its economy and culture.
            </p>
        </section>
    )
}

export default Description