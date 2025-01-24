import { Button } from "@/components/ui/button"
import Image from "next/image"

const Discover = ({ }) => {
    return (
        <section className="relative w-full h-full  py-12 md:py-24 px-4 md:px-[130px] flex flex-col md:flex-row justify-center items-center bg-[#673147]">
            <div className="hidden absolute w-full h-full left-0 top-0 md:flex justify-center items-start py-24 px-4 md:px-[320px]">
                <Image
                    src='/images/home/discover/lahori.png'
                    width={1585}
                    height={403}
                    alt="lahori"
                />
            </div>
            <div className="w-full flex flex-col gap-14 justify-center items-center z-20 md:pt-[160px]">
                <p className="text-[#F5AE52] text-4xl md:text-7xl"><span className="font-knewave">DISCOVER</span>&nbsp;&nbsp; THE &nbsp; <span className="font-knewave">TASTE</span></p>
                <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center">
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="rounded-lg p-7 bg-[#E2A14B] md:w-2/3">
                            <Image
                                src='/images/home/discover/image1.png'
                                width={467}
                                height={459}
                                alt="image"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-5">
                        <p className="font-inter max-w-[400px] leading-7 text-xl text-[#F5AE52] font-[600]">We offer food and cuisine from the city of Lahore in Punjab, Pakistan. People from Lahore are renowned and over the country for their love of food. Lahore is a city with an extremely rich food culture and a vast variety of gastronomic delights. At Lahori Karahi, our experienced chefs from Lahore make sure they prepare Authentic Lahori Food</p>
                        <Button className="w-fit font-bebas_neue text-lg px-6 py-6 tracking-[1px] bg-[#F5AE52]">VIEW MENU</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discover