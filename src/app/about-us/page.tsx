import BavetteStory from "@/app/about-us/(section)/BavetteStory";
import Hero from "@/app/about-us/(section)/Hero";
import Review from "@/app/about-us/(section)/Review";
import Navbar from "@/components/Navbar";
import Footer from "../(section)/Footer";

const page = ({ }) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#050505]">
        <Navbar position="absolute" />
        <Hero />
        <BavetteStory />
        <Review />
        <Footer />
      </div>
    </main>
  );
};

export default page;

// Images:
// public/images/about-us
