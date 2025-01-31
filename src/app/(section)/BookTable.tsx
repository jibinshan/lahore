import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const BookTable = ({}) => {
  return (
    <section className="flex h-full w-full flex-col gap-12 bg-[#673147] px-4 py-12 md:flex-row md:px-[130px] md:py-24">
      <div className="flex w-full items-center justify-center md:w-1/2">
        <div className="rounded-t-full bg-[#E2A14B] p-7 md:w-3/4">
          <Image
            src="/images/home/book/book.png"
            width={598}
            height={628}
            alt="image"
            className="rounded-t-full"
          />
        </div>
      </div>
      <div className="flex w-full flex-col justify-center gap-5 md:w-1/2">
        <p className="text-3xl text-[#F2A137] md:text-8xl">
          <span className="font-knewave">BOOK</span>&nbsp; YOUR <br />
          TABLE &nbsp;<span className="font-knewave">NOW</span>
        </p>
        <p className="max-w-[400px] font-inter text-xl font-[600] leading-7 tracking-[2px] text-[#F5AE52]">
          Reserve your table at Lahori Karahi to experience the authentic
          flavors and vibrant aromas of Lahore. Let our chefs take you on a
          culinary journey you won’t forget
        </p>
        <Button className="w-fit bg-[#F5AE52] px-6 py-6 font-bebas_neue text-lg tracking-[1px]">
          <Link href={"/table-booking"}>Book A Table</Link>
        </Button>
      </div>
    </section>
  );
};

export default BookTable;
