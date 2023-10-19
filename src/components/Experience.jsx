import React from 'react';
import amirfaysal from "../assets/Experince/experience -amir-faysal.png"

const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center  ">
      {/* Themes: blue, purple and teal */}
      <div className=' mb-5 text-center'>
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
                      className="h-full object-cover  ring-4  ring-green-600"
                      src={amirfaysal}
                      width="733"
                      height="412"
                      alt=''
                      typeof="foaf:Image"
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="p-6 bg-grey">
              <div className="leading-relaxed">
                <h2 className="leading-tight lg:text-3xl text-md font-bold text-white"> Building Tomorrow's Solutions 🚀</h2>
                <p className="mt-4 text-white">I'm a tech innovator with a flair for both development and product management. My career is fueled by a passion for staying on the tech forefront, crafting user-friendly solutions, and leading product development with enthusiasm and expertise. I thrive in collaborative settings and believe in building trust-based relationships for success. My goal is to bring innovation to life and drive organizational growth.📈</p>
              </div>
              <p className=' pt-5'><a className=" button  text-white bg-green-500 p-2" href="https://inviqa.com/cxcon-experience-transformation">Call Now</a></p>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
