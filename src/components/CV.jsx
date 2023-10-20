import React from "react";
import amirimg from "../assets/images/hireMe.png";
import { Icon } from "@iconify/react";

const CV = () => {
  return (
    <div>
      <div class="bg-gray-900 p-4   pt-32">
        <div class="border-1 shadow-lg shadow-gray-700 rounded-lg">
          {/* <!-- top content --> */}
          <div class="flex rounded-t-lg bg-top-color sm:px-2 w-full bg-gray-900 border">
            <div class="h-40 w-40 overflow-hidden sm:rounded-full  border sm:relative sm:p-0 top-10 left-5 p-3">
              <img className=" pt-3  " src={amirimg} />
            </div>

            <div class="w-2/3 sm:text-center pl-5 mt-10 text-start">
              <p class="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                Amir Faysal
              </p>
              <p class="text-heading">A passionate Web Developer from Bangladesh</p>
            </div>
          </div>

          {/* <!-- main content --> */}
          <div class="p-5 border">
            <div class="flex flex-col sm:flex-row sm:mt-10">
              <div class="flex flex-col sm:w-1/3">
                {/* <!-- My contact --> */}
                <div class="py-3 sm:order-none order-3">
                  <h2 class="text-lg font-poppins font-bold text-top-color">
                    My Contact
                  </h2>
                  <div class="border-2 w-20 border-top-color my-3"></div>

                  <div>
                    <div class="flex items-center my-1 ">
                      <a class="w-6 text-white hover:text-[#0891B2] ">
                        <Icon icon="ic:outline-email"></Icon>
                      </a>
                      <div class="ml-2 truncate">amirfaysal0471@gmail.com</div>
                    </div>
                    <div class="flex items-center my-1">
                      <a class="w-6 text-white hover:text-[#0891B2]">
                        <Icon icon="fluent:call-add-20-filled"></Icon>
                      </a>
                      <div class="ml-2 truncate">+880 18750-71998</div>
                    </div>
                    <div class="flex items-center my-1">
                      <a
                        class="w-6 text-white hover:text-[#0891B2]"
                        aria-label="Visit TrendyMinds YouTube"
                        href="https://www.linkedin.com/in/amir-faysal/"
                        target="_blank"
                      >
                        <Icon icon="ri:linkedin-fill"></Icon>
                      </a>
                      <div>amir-faysal</div>
                    </div>
                    <div class="flex items-center my-1">
                      <a
                        class="w-6 text-white hover:text-[#0891B2]"
                        aria-label="Visit TrendyMinds Facebook"
                        href="https://www.facebook.com/amirfaysal047/"
                        target="_blank"
                      >
                        <Icon icon="cib:facebook"></Icon>
                      </a>
                      <div>amirfaysal047</div>
                    </div>
                    <div class="flex items-center my-1">
                      <a
                        class="w-6 text-white hover:text-[#0891B2]"
                        aria-label="Visit TrendyMinds Twitter"
                        href="https://github.com/amir047123"
                        target="_blank"
                      >
                        <Icon icon="cib:github"></Icon>
                      </a>
                      <div>amir047123</div>
                    </div>
                  </div>
                </div>
                {/* <!-- Skills --> */}
                <div class="py-3 sm:order-none order-2">
                  <h2 class="text-lg font-poppins font-bold text-top-color">
                    Skills
                  </h2>
                  <div class="border-2 w-20 border-top-color my-3"></div>

                  <div>
                    <div class="flex items-center my-1">
                      <a class="w-6 text-white hover:text-[#0891B2]">
                        <Icon icon="ri:javascript-fill"></Icon>
                      </a>
                      <div class="ml-2">Javascript</div>
                    </div>
                    <div class="flex items-center my-1">
                      <a
                        class="w-6 text-white hover:text-orange-600"
                        aria-label="Visit TrendyMinds YouTube"
                        href=""
                        target="_blank"
                      >
                        <Icon icon="mdi:react"></Icon>
                      </a>
                      <div class="ml-2">ReactJS</div>
                    </div>
                    <div class="flex items-center my-1">
                      <a
                        class="w-6 text-white hover:text-orange-600"
                        aria-label="Visit TrendyMinds YouTube"
                        href=""
                        target="_blank"
                      >
                        <Icon icon="cib:node-js"></Icon>
                      </a>
                      <div class="ml-2">NodeJS</div>
                    </div>
                    <div class="flex items-center my-1 text-white">
                      <a
                        class="w-6 text-white hover:text-orange-600"
                        aria-label="Visit TrendyMinds Facebook"
                        href=""
                        target="_blank"
                      >
                        <Icon icon="simple-icons:express"></Icon>
                      </a>
                      <div class="ml-2">ExpressJS</div>
                    </div>
                    <div class="flex items-center my-1">
                      <a
                        class="w-6 text-white hover:text-orange-600"
                        aria-label="Visit TrendyMinds Twitter"
                        href=""
                        target="_blank"
                      >
                        <Icon icon="bxl:mongodb"></Icon>
                      </a>
                      <div class="ml-2">MongoDB</div>
                    </div>

                    <div class="flex items-center my-1">
                      <a
                        class="w-6 text-white hover:text-orange-600"
                        aria-label="Visit TrendyMinds Twitter"
                        href=""
                        target="_blank"
                      >
                        <Icon icon="simple-icons:mysql"></Icon>
                      </a>
                      <div class="ml-2">MySQL</div>
                    </div>

                    <div class="flex items-center my-1">
                      <a
                        class="w-6 text-white hover:text-orange-600"
                        aria-label="Visit TrendyMinds Twitter"
                        href=""
                        target="_blank"
                      >
                        <Icon icon="teenyicons:c-outline"></Icon>
                      </a>
                      <div class="ml-2">C</div>
                    </div>
                    <div class="flex items-center my-1">
                      <a
                        class="w-6 text-white hover:text-orange-600"
                        aria-label="Visit TrendyMinds Twitter"
                        href=""
                        target="_blank"
                      >
                        <Icon icon="gg:c-plus-plus"></Icon>
                      </a>
                      <div class="ml-2">C++</div>
                    </div>
                  </div>
                </div>
                {/* <!-- Education Background --> */}
                <div class="py-3 sm:order-none order-1">
                  <h2 class="text-lg font-poppins font-bold text-top-color">
                    Education Background
                  </h2>
                  <div class="border-2 w-20 border-top-color my-3"></div>

                  <div class="flex flex-col space-y-1">
                    <div class="flex flex-col">
                      <p class="font-semibold text-xs text-white">2021</p>
                      <p class="text-sm font-medium">
                        <span class="text-green-700">
                          B.S.C (Computer Science & Engineering (CSE))
                        </span>
                        , Imperial College of Engineering - Rajshahi University
                        Affiliated
                      </p>
                      <p class="font-bold text-xs text-white mb-2">
                      Session: 2019-2020
                      </p>
                    </div>
                    <div class="flex flex-col">
                      <p class="font-semibold text-xs text-white">2018</p>
                      <p class="text-sm font-medium uppercase">
                        <span class="text-green-700">HSC</span>, Shahid M.
                        Mansur Ali College ,Pabna
                      </p>
                      <p class="font-bold text-xs text-white mb-2">
                      Passing Year : 2018
                      </p>
                    </div>
                    <div class="flex flex-col">
                      <p class="font-semibold text-xs text-white">2016</p>
                      <p class="text-sm font-medium uppercase">
                        <span class="text-green-700 ">SSC</span>, Madhainagor
                        B.L High School,Tarash, Sirajgonj
                      </p>
                      <p class="font-bold text-xs text-white mb-2">
                      Passing Year : 2016
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
                {/* <!-- About me --> */}
                <div class="py-3">
                  <h2 class="text-lg font-poppins font-bold text-top-color">
                    About Me
                  </h2>
                  <div class="border-2 w-20 border-top-color my-3"></div>
                  <p>
                    I am a dedicated and passionate professional, blending the
                    roles of a web developer and product manager. My journey in
                    the tech industry has been characterized by a relentless
                    pursuit of knowledge and a fervent enthusiasm for product
                    innovation. As a web developer, I've honed my technical
                    skills to build exceptional digital experiences. As a
                    product manager, I've harnessed this technical acumen to
                    guide product development and deliver user-centric
                    solutions.
                  </p>
                </div>

                {/* <!-- Professional Experience --> */}
                <div class="py-3">
                  <h2 class="text-lg font-poppins font-bold text-top-color">
                    Professional Experience
                  </h2>
                  <div class="border-2 w-20 border-top-color my-3"></div>

                  <div class="flex flex-col">
                    <div class="flex flex-col">
                      <p class="text-lg font-bold text-white">
                        Lskit | Product Manager
                      </p>
                      <p class="font-semibold text-sm text-white">
                        2020 - 2021{" "}
                      </p>
                      <p class="font-semibold text-sm  text-white mt-2 mb-1">
                        Key Responsibilities
                      </p>
                      <ul class="text-sm list-disc pl-4 space-y-1">
                        <li>
                          Successfully developed the latest platform of the
                          internet sensation, Lskit.
                        </li>
                        <li>
                          Developed relationships with partners and users to
                          drive content and opportunity for the new platform.
                        </li>
                        <li>
                          Established and monitored timelines in association
                          with product launch.
                        </li>
                      </ul>
                    </div>

                    <div class="flex flex-col mt-8">
                      <p class="text-lg font-bold text-white">
                        ThinkyStorm | Product Manager
                      </p>
                      <p class="font-semibold text-sm text-white">
                        2021 Present
                      </p>
                      <p class="font-semibold text-sm text-white mt-2 mb-1">
                        Key Responsibilities
                      </p>
                      <ul class="text-sm list-disc pl-4 space-y-1">
                        <li>
                          Worked to improve existing products based on customer
                          evaluations and needs.
                        </li>
                        <li>
                          Led collaboration meetings to develop key processes
                          for creation of new products.
                        </li>
                        <li>
                          Successfully prioritized product requirements and set
                          realistic expectations in regards to development and
                          timeline.
                        </li>
                        <li>Tested product usability with UX research team.</li>
                        <li>
                          Identified failures and successes of a product, using
                          them as a springboard for future development goals.{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <!-- Projects --> */}
                <div class="py-3">
                  <h2 class="text-lg font-poppins font-bold text-top-color">
                    Projects
                  </h2>
                  <div class="border-2 w-20 border-top-color my-3"></div>

                  <div class="flex flex-col">
                    <div class="flex flex-col">
                      <p class="text-lg font-semibold text-white">
                        Most Advanced Vision Therapy
                      </p>
                      <p class="font-normal text-sm text-white mb-1 pl-2">
                        Refractive Errors and Vision Correction, Binocular
                        Vision Disorders, Sports Vision Enhancement, Digital Eye
                        Strain Management, Low Vision Support.
                      </p>
                    </div>
                    <div class="flex flex-col">
                      <p class="text-lg font-semibold text-white">Edufixup</p>
                      <p class="font-normal text-sm text-white mb-1 pl-2">
                        Edufixup was a visionary project aimed at democratizing
                        education for children from remote areas. Recognizing
                        the vast potential of online platforms, Edufixup was
                        developed to simplify and make quality education
                        accessible at everyone's doorstep.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
