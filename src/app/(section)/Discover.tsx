import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Discover = ({}) => {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center bg-[#673147] px-4 py-12 md:flex-row md:px-[130px] md:py-24">
      <div className="absolute left-0 top-0 hidden h-full w-full items-start justify-center px-4 py-24 md:flex md:px-[320px]">
        <Image
          src="/images/home/discover/lahori.png"
          width={1585}
          height={403}
          alt="lahori"
        />
      </div>
      <div className="z-20 flex w-full flex-col items-center justify-center gap-14 md:pt-[160px]">
        <p className="text-4xl text-[#F5AE52] md:text-7xl">
          <span className="font-knewave">DISCOVER</span>&nbsp;&nbsp; THE &nbsp;{" "}
          <span className="font-knewave">TASTE</span>
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row">
          <div className="flex w-full items-center justify-center md:w-1/2">
            <div className="rounded-lg bg-[#E2A14B] p-7 md:w-2/3">
              <Image
                src="/images/home/discover/image1.png"
                width={467}
                height={459}
                alt="image"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-5 md:w-1/2">
            <p className="max-w-[400px] font-inter text-xl font-[600] leading-7 text-[#F5AE52]">
              We offer food and cuisine from the city of Lahore in Punjab,
              Pakistan. People from Lahore are renowned and over the country for
              their love of food. Lahore is a city with an extremely rich food
              culture and a vast variety of gastronomic delights. At Lahori
              Karahi, our experienced chefs from Lahore make sure they prepare
              Authentic Lahori Food
            </p>
            <Button className="w-fit bg-[#F5AE52] px-6 py-6 font-bebas_neue text-lg tracking-[1px]">
              <Link href={"/menu"}>VIEW MENU</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
