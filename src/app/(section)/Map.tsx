import Image from "next/image";
import React from "react";

const Map: React.FC = () => {
  return (
    <section className="h-fit w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.5763999569513!2d-1.127379165422715!3d52.63692471535874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48776119bdd76483%3A0x136f774666d28d12!2s30-32%20Humberstone%20Rd%2C%20Leicester%20LE5%200AR%2C%20UK!5e0!3m2!1sen!2sin!4v1737571914432!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0px" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="invert(0.5) h-[50vh] w-full grayscale"
      ></iframe>
    </section>
  );
};

export default Map;
