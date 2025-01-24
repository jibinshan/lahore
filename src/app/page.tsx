import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Footer from "./(section)/Footer";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
        <Navbar position="absolute" />
        <Hero />
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
