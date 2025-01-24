import { Button } from "@/components/ui/button"
import Image from "next/image"

const BookTable = ({ }) => {
    return (
        <section className="w-full h-full flex flex-col md:flex-row gap-12 px-4 md:px-[130px] py-12 md:py-24 bg-[#673147]">
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="rounded-t-full p-7 bg-[#E2A14B] md:w-3/4">
                    <Image
                        src='/images/home/book/book.png'
                        width={598}
                        height={628}
                        alt="image"
                        className="rounded-t-full"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-5 justify-center">
                <p className="text-3xl md:text-8xl text-[#F2A137]"><span className="font-knewave">BOOK</span>&nbsp; YOUR <br />TABLE &nbsp;<span className="font-knewave">NOW</span></p>
                <p className="font-inter max-w-[400px] leading-7 text-xl text-[#F5AE52] font-[600] tracking-[2px]">Reserve your table at Lahori Karahi to experience the authentic flavors and vibrant aromas of Lahore. Let our chefs take you on a culinary journey you won’t forget</p>
                <Button className="w-fit font-bebas_neue text-lg px-6 py-6 tracking-[1px] bg-[#F5AE52]">Book A Table</Button>
            </div>
        </section>
    )
}

export default BookTable