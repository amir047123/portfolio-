import React from "react";
import hero from "../assets/images/hero.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const social_media = [
  { icon: "logo-instagram", url: "https://www.instagram.com/amir__faysal/" },
  { icon: "logo-facebook", url: "https://www.facebook.com/amirfaysal047/" },
  { icon: "logo-linkedin", url: "https://www.linkedin.com/in/amir-faysal/" },
  {
    icon: "logo-twitter",
    url: "https://twitter.com/Amir__Faysal?t=nPNxS8IF2zFW567e__2_Qw&s=09",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is
            <Typewriter
              options={{
                strings: ["Amir Faysal"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            <Typewriter
              options={{
                strings: [" Product Manager", "Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
          <Link to="contact">
            <button
              className="btn-primary mt-10"
              // onClick={() =>
              //   window.open("https://wa.me/8801960064557", "_blank")
              // }
            >
              Contact Me
            </button>
          </Link>

          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map(({ icon, url }) => (
              <a
                key={icon}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
