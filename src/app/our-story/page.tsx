import Navbar from "@/components/Navbar"
import Hero from "./(section)/Hero"
import Description from "./(section)/Description"
import History from "./(section)/History"
import Kerala from "./(section)/Kerala"
import Footer from "../(section)/Footer"

const page = ({ }) => {
    return (
        <section className="w-full h-full flex flex-col items-center justify-center">
            <Navbar position="absolute" />
            <Hero />
            <Description />
            <History />
            <Kerala />
            <Footer />
        </section>
    )
}

export default page