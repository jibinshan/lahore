import Image from "next/image"

const Kerala = ({ }) => {
    return (
        <section className="w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-[130px] bg-[#0f0f0f] py-12 md:py-24 gap-9">
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="w-fit flex flex-col gap-10">
                    <p className="text-5xl font-gotu font-[400] capitalize">Kerala`s Spice <br />Offerings</p>
                    <p className="w-full text-[#ACACAC] font-manrope max-w-[400px] text-sm">Kerala is home to a diverse range of spices, many of which are considered among the finest in the world. Some of the most famous spices from Kerala include:</p>
                    <ul className="w-full max-w-[400px]">
                        <li className="w-full text-[#ACACAC] font-manrope text-sm">Black Pepper: Known as the {'"'}King of Spices,{'"'} Kerala`s black pepper is renowned for its flavor and aroma.</li>
                        <li className="w-full text-[#ACACAC] font-manrope text-sm">Cardamom: This {'"'}Queen of Spices{'"'} is a highly prized spice used in both culinary and medicinal applications.</li>
                        <li className="w-full text-[#ACACAC] font-manrope text-sm">Cinnamon: With its distinct sweet and warm flavor, Kerala cinnamon has been used for centuries in perfumes, cooking, and medicine.</li>
                        <li className="w-full text-[#ACACAC] font-manrope text-sm">Clove: These aromatic flower buds are a staple in Indian cuisine and are also used for their medicinal properties.</li>
                    </ul>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <Image
                    src='/images/ourstory/kerala.png'
                    width={731}
                    height={721}
                    alt="bg"
                    className="max-h-[680px] object-cover"
                />
            </div>
        </section >
    )
}

export default Kerala