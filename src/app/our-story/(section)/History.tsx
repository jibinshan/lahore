import Image from "next/image"

const History = ({ }) => {
    return (
        <section className="w-full h-full flex flex-col items-center justify-center px-4 md:px-[130px] py-12 md:py-24 gap-9 md:gap-24">
            <p className="text-4xl md:text-6xl font-gotu font-[400]">Our History</p>
            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-start gap-6">
                <Image
                    src='/images/ourstory/history.png'
                    width={710}
                    height={687}
                    alt="bg"
                    className="max-h-[650px] object-cover"
                />
                <Image
                    src='/images/ourstory/history.svg'
                    width={10}
                    height={687}
                    alt="bg"
                    className="hidden md:block"
                />
                <div className="flex flex-col gap-6 md:gap-14 justify-center items-center">
                    <div className="w-full max-w-[400px] flex flex-col gap-5">
                        <p className="text-3xl font-gotu font-[400] capitalize">A History of Spice Trade</p>
                        <p className="font-manrope text-sm font-[300] text-[#ACACAC]">Kerala, a southern Indian state renowned for its breathtaking landscapes and rich cultural heritage, is also a global hub for spices. With a history dating back thousands of years, Kerala`s spice trade has played a pivotal role in shaping its economy and culture.</p>
                    </div>
                    <div className="w-full max-w-[400px] flex flex-col gap-5">
                        <p className="text-3xl font-gotu font-[400] capitalize">The Spice Trade Today</p>
                        <p className="font-manrope text-sm font-[300] text-[#ACACAC]">Kerala continues to be a dominant player in the global spice market. Today, three-fourths of India`s spice exports originate from this southern state. The cultivation and trade of spices have not only contributed to Kerala`s economy but have also deeply influenced its culture and cuisine.</p>
                    </div>
                    <div className="w-full max-w-[400px] flex flex-col gap-5">
                        <p className="text-3xl font-gotu font-[400] capitalize">Experience Kerala`s Spice Heritage</p>
                        <p className="font-manrope text-sm font-[300] text-[#ACACAC]">If you`re a spice enthusiast or simply curious about Kerala`s rich heritage, a visit to this beautiful state is a must. Explore spice plantations, learn about traditional cultivation methods, and savor the delicious flavors of Keralan cuisine, all infused with the region`s aromatic spices.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default History