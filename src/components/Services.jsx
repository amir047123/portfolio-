import { Icon } from "@iconify/react";
import React from "react";

const Services = () => {
  return (
    <div className=" p-4 min-h-screen">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-secondary"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 007.466 7.89l.813-2.846a.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c.94.236 1.674.97 1.91 1.91l.258 1.036a.75.75 0 01-1.456 0l.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036a.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c.447.15.799.5.948.948l.395 1.183a.75.75 0 01-1.422 0l.395-1.183a1.5 1.5 0 00.948.948l-1.183.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948.948l.395-1.183a.75.75 0 0116.5 15z"
            ></path>
          </svg>
          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
          Digital Evolutionists

          </h2>
          <p className="text-gray-300">
          Transforming Ideas into Virtual Realities


          </p>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
             <Icon  className=" text-white text-4xl" icon="streamline:programming-browser-build-build-website-development-window-code-programming-web-backend-browser-dev"></Icon>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                Web Development

                </h5>
                <p className="text-gray-300">
                Craft responsive and feature-rich websites, tailored to your needs, from design to functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
            <Icon  className=" text-white text-4xl" icon="fluent:card-ui-24-regular"></Icon>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                UI/UX Design
                </h5>
                <p className="text-gray-300">
                Shape engaging user interfaces and seamless experiences that captivate and delight your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
            <Icon  className=" text-white text-4xl" icon="eos-icons:project"></Icon>

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                Startup Consulting

                </h5>
                <p className="text-gray-300">
                Navigate the complex startup ecosystem with expert guidance from idea to execution.

                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 py-12 p-8">
            <Icon  className=" text-white text-4xl" icon="wpf:maintenance"></Icon>

              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                Maintenance & Support


                </h5>
                <p className="text-gray-300">
                Ensure your digital presence is always in top shape with regular updates, bug fixes, and security enhancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
