import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";

const Location = ({ }) => {
    return (
        <section id="location" className="flex flex-col gap-4 w-full items-center justify-center bg-[#080808]">
            <div className="w-full max-w-[1300px] px-3 md:px-0 py-12 md:py-24 flex flex-col md:flex-row gap-3">
                <div className="w-full md:w-1/2 flex flex-col gap-8 items-start justify-start">
                    <p className="text-[#FCB017] font-jakarta uppercase">Our Location</p>
                    <p className="text-[#9A9A9A] font-jakarta text-5xl md:text-7xl uppercase font-[300] md:tracking-[20px] md:leading-[90px]">Find Us<br />
                        at These<br /> Convenient<br /> Locations</p>
                    <Button variant='outline' className="flex items-center justify-center px-6 py-6 rounded-none gap-3"><span>our store</span> <Icons.rightArrow /></Button>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-8 items-center justify-center">
                    <div className="bg-[#090909] border-[2px] border-[#1D1D1D] rounded-full p-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.112952400776!2d-1.5240115239397474!3d52.40462907203107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774bff1a6980f5%3A0xa719bfb056f23ce3!2sThe%20Tiffin%20Box.!5e0!3m2!1sen!2sin!4v1733119234740!5m2!1sen!2sin"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full invert grayscale"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;