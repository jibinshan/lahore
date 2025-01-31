import Image from "next/image";
import React from "react";

const Map: React.FC = () => {
  return (
    <section className="h-fit w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.12461146128!2d-2.1946679234057815!3d53.44835867231902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3db16ae1223%3A0x4094dd62da50d408!2sLahori%20Karahi%20Manchester!5e0!3m2!1sen!2sin!4v1738224075213!5m2!1sen!2sin"
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
