import React from "react";
import img1 from "../assets/review/1.png";
import img2 from "../assets/review/2.png";
import img3 from "../assets/review/3.png";
import img4 from "../assets/review/4.png";
import img5 from "../assets/review/5.png";
import img6 from "../assets/review/6.png";
import img7 from "../assets/review/7.png";
import img8 from "../assets/review/8.png";
import img9 from "../assets/review/9.png";
import img10 from "../assets/review/10.png";
import img11 from "../assets/review/11.png";

function Review() {
  return (
    <section id="testimonies" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              It's not just me.
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
              Here's what others have to say about me.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/kanyewest"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src={img1}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          John Smith
                        </h3>
                        <p className="text-gray-500 text-md">Entrepreneur</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      " Working with Amir Faysal and the MERN stack team was a
                      game-changer for our company. They delivered a stunning
                      web application that has transformed the way we do
                      business. Their expertise and dedication are second to
                      none. "
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src={img2}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Sarah Johnson
                        </h3>
                        <p className="text-gray-500 text-md">
                          Marketing Manager
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      " I couldn't be happier with the web app Amir Faysal and
                      the team created for us. It's sleek, efficient, and
                      user-friendly, helping us streamline our marketing
                      efforts. The communication throughout the project was
                      excellent."
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/kanyewest"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src={img3}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Kanye West
                        </h3>
                        <p className="text-gray-500 text-md">Entrepreneur</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      " E-commerce is all about speed and user experience.Amir
                      Faysal and their team delivered an e-commerce platform
                      that's not only fast but also beautiful. Our conversion
                      rates have never been better."
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src={img4}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Mark Williams
                        </h3>
                        <p className="text-gray-500 text-md">
                          Creative Directo
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      "As a design-centric company, we have high standards for
                      aesthetics.Amir Faysal and their MERN stack developers
                      integrated our designs flawlessly into the website. Their
                      work is a masterpiece."
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          <ul className="hidden space-y-8 sm:block">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="https://twitter.com/paraga" className="cursor-pointer">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src={img5}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Parag Agrawal"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Parag Agrawal
                        </h3>
                        <p className="text-gray-500 text-md">HR Manager</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      "We needed a custom HR management system, and Amir Faysal
                      delivered a solution that simplified our operations. Their
                      dedication to understanding our unique needs made all the
                      difference."
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src={img6}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Alex Turner
                        </h3>
                        <p className="text-gray-500 text-md">COO</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      "Amir Faysal and their team are not just developers; they
                      are problem solvers. Their ability to tackle complex
                      challenges and create innovative solutions sets them
                      apart. They are a true asset."
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="https://twitter.com/paraga" className="cursor-pointer">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src={img7}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Parag Agrawal"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Rachel White
                        </h3>
                        <p className="text-gray-500 text-md">
                          Marketing Director
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      "We're a startup with limited resources, and Amir Faysal
                      was understanding of our budget constraints. They provided
                      cost-effective solutions without compromising on quality.
                      We're grateful for their support."
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          <ul className="hidden space-y-8 lg:block">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/satyanadella"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src={img8}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Satya Nadella"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Michael Davis
                        </h3>
                        <p className="text-gray-500 text-md">Founder</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      "The Fitness First app created by Amir Faysal has become a
                      go-to for fitness enthusiasts. It's responsive, scalable,
                      and user-friendly. Their attention to the user experience
                      is evident in every detail."
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/dan_schulman"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src={img9}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Dan Schulman"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Tom Anderson
                        </h3>
                        <p className="text-gray-500 text-md">CFO</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      "Our financial analysis tools were outdated, and Amir
                      Faysal modernized our systems using the MERN stack. The
                      resulting web application is not only faster but also more
                      secure. Their expertise in data handling is impressive."
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/satyanadella"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src={img10}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Satya Nadella"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Satya Nadella
                        </h3>
                        <p className="text-gray-500 text-md">
                          Operations Manager
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      "We needed a robust booking platform for our travel
                      agency, and Amir Faysal delivered a feature-rich system
                      that's made managing bookings a breeze. It's been a
                      game-changer for our business."
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/dan_schulman"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src={img11}
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Dan Schulman"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          David Robinson
                        </h3>
                        <p className="text-gray-500 text-md">Manager</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      "The MERN stack developers led by Amir Faysal exceeded our
                      expectations. They turned our complex project into a
                      reality with precision and skill. Their attention to
                      detail and problem-solving abilities are truly
                      remarkable."
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Review;
