import { ArrowRight } from "lucide-react"
import Image from "next/image"

const Explore = ({ }) => {
    return (
        <section className="w-full h-full flex flex-col justify-center items-center gap-12 px-4 md:px-[130px] py-12 md:py-24 bg-[#BFA84A]">
            <div className="w-full flex flex-col gap-4 items-center justify-center">
                <p className="w-full text-[#921233] font-crazydots text-4xl md:text-8xl text-center uppercase">Explore <span className="font-bebas_neue">with</span> us</p>
                <p className="font-inter max-w-[600px] text-center leading-7 text-xl text-[#B0464B]">From grill to plate, Lahori Karahi serves fresh, authentic dishes that transport you to the vibrant streets of Lahore</p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-6">
                <div className="w-full flex flex-col gap-4 justify-center items-center">
                    <div className="rounded-t-full p-7 bg-[#921233]">
                        <Image
                            src='/images/home/explore/1.png'
                            width={598}
                            height={628}
                            alt="image"
                            className="rounded-t-full"
                        />
                    </div>
                    <p className="font-inter max-w-[600px] text-center leading-7 text-2xl text-[#921233] uppercase font-[600] flex gap-2">main <ArrowRight className="text-[#921233] -rotate-45" /></p>
                </div>
                <div className="w-full flex flex-col gap-4 justify-center items-center">
                    <div className="rounded-t-full p-7 bg-[#921233]">
                        <Image
                            src='/images/home/explore/2.png'
                            width={598}
                            height={628}
                            alt="image"
                            className="rounded-t-full"
                        />
                    </div>
                    <p className="font-inter max-w-[600px] text-center leading-7 text-2xl text-[#921233] uppercase font-[600] flex gap-2">Sundries <ArrowRight className="text-[#921233] -rotate-45" /></p>
                </div>
                <div className="w-full flex flex-col gap-4 justify-center items-center">
                    <div className="rounded-t-full p-7 bg-[#921233]">
                        <Image
                            src='/images/home/explore/3.png'
                            width={598}
                            height={628}
                            alt="image"
                            className="rounded-t-full"
                        />
                    </div>
                    <p className="font-inter max-w-[600px] text-center leading-7 text-2xl text-[#921233] uppercase font-[600] flex gap-2">Desserts <ArrowRight className="text-[#921233] -rotate-45" /></p>
                </div>
                <div className="w-full flex flex-col gap-4 justify-center items-center">
                    <div className="rounded-t-full p-7 bg-[#921233]">
                        <Image
                            src='/images/home/explore/4.png'
                            width={598}
                            height={628}
                            alt="image"
                            className="rounded-t-full"
                        />
                    </div>
                    <p className="font-inter max-w-[600px] text-center leading-7 text-2xl text-[#921233] uppercase font-[600] flex gap-2">drinks <ArrowRight className="text-[#921233] -rotate-45" /></p>
                </div>
            </div>
        </section>
    )
}

export default Explore