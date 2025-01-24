import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Discover from "./(section)/Discover";
import Special from "./(section)/(special)/Special";
import BookTable from "./(section)/BookTable";
import Explore from "./(section)/Explore";
import Reviews from "./(section)/Review";
import Hello from "./(section)/Hello";
import Instagram from "./(section)/Instagram";
import Map from "./(section)/Map";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
        <Navbar position="absolute" />
        <Hero />
        <Discover />
        <Explore />
        <Special />
        <BookTable />
        <Reviews />
        <Hello />
        <Instagram />
        <Map />

        {/* <About />
        <Special />
        <Orders />
        <BookTable />
        <Specialities />
        <Chef />
        <Reviews />
        <Location />
        <ConnectWithUs /> */}
        <Footer />
      </div>
    </main>
  );
}
