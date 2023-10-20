import React from "react";
import amirfaysal from "../assets/Experince/experience -amir-faysal.png";
import { Icon } from "@iconify/react";

const Experience = () => {
  const handleCallNow = () => {
    // Use the tel link to specify the phone number
    const phoneNumber = "+8801875071998";
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center  ">
      {/* Themes: blue, purple and teal */}
      <div className=" mb-5 text-center">
        <h3 className="text-4xl font-semibold">
          Tech <span className="text-cyan-600">Innovator</span>
        </h3>
      </div>
      <div data-theme="teal" className="mx-auto max-w-6xl">
        <h2 className="sr-only text-white">Featured case study</h2>
        <section className="font-sans text-black">
          <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
            <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
              <div className="h-full">
                <article className="h-full">
                  <div className="h-full">
                    <img
                      className="h-full object-cover   ring-4  ring-white"
                      src={amirfaysal}
                      width="733"
                      height="412"
                      alt=""
                      typeof="foaf:Image"
                    />
                  </div>
                  <div class="backdrop-contrast-200 "></div>
                </article>
              </div>
            </div>
            <div className="p-6 bg-grey">
              <div className="leading-relaxed">
                <h2 className="leading-tight lg:text-3xl text-md font-bold text-white">
                  {" "}
                  Building Tomorrow's Solutions 🚀
                </h2>
                <p className="mt-4 text-white">
                  I'm a tech innovator with a flair for both development and
                  product management. My career is fueled by a passion for
                  staying on the tech forefront, crafting user-friendly
                  solutions, and leading product development with enthusiasm and
                  expertise. I thrive in collaborative settings and believe in
                  building trust-based relationships for success. My goal is to
                  bring innovation to life and drive organizational growth.📈
                </p>
              </div>

              <div className=" mt-3   flex">
                <div className="bg-[#0891B2] flex text-white    p-1 rounded-md  justify-center items-center">
                  <Icon icon="ph:phone-call-light"></Icon>
                  <a
                    className="button transition duration-150 ease-in-out ... text-white p-2"
                    href="tel:+8801875071998"
                    onClick={handleCallNow} // Call the function on button click
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
