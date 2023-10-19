import React from "react";

function SliderComponent() {
  return (
    <div className="relative mb-10">
      <div className="sticky top-0 border h-screen lg:flex flex-col items-center justify-center bg-gradient-to-b pl-10 pr-10 bg-gray-900">
        <h2 className="text-4xl font-bold">Craft Your Digital Identity</h2>
        <p className="mt-2  ">
          I specialize in creating responsive and feature-rich websites that are
          tailored specifically to your requirements. From the initial design
          concepts to the implementation of advanced functionality, I'll ensure
          that your online platform is nothing short of exceptional. 🚀🎨💡🔧🔒
        </p>
      </div>
      <div className="sticky pl-10 pr-10 top-0 border h-screen lg:flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
        <h2 className="text-4xl font-bold">
          Captivate and Delight Your Audience ✨
        </h2>
        <p className="mt-2 text-justify">
          My design expertise is dedicated to shaping engaging user interfaces
          and delivering seamless user experiences. I'm passionate about
          creating designs that not only look fantastic but also captivate and
          delight your audience, ensuring that every interaction is a memorable
          one. 🌟💻🎨
        </p>
      </div>
      <div className="sticky pl-10 pr-10 top-0 h-screen border lg:flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
        <h2 className="text-4xl font-bold">
          Let's connect to turn your startup dreams into reality. 🚀
        </h2>
        <p className="mt-2">
          Navigating the complexities of the startup world can be daunting. With
          my expert guidance, you'll gain valuable insights and strategies from
          the idea's conceptualization to execution. I'm here to help you
          transform your startup dreams into a successful reality. 🌟💼💡🗺️
        </p>
      </div>
      <div className="sticky pl-10 pr-10 top-0 h-screen border  text-white lg:flex flex-col items-center justify-center bg-gradient-to-b bg-gray-900 ">
        <h2 className="text-4xl font-bold">
          Get in touch for ongoing support. 🔧🔒
        </h2>
        <p className=" mt-2">
          I understand that the digital landscape is constantly evolving. That's
          why I offer comprehensive maintenance and support services. I'll
          ensure that your digital presence is always in top shape with regular
          updates, bug fixes, and security enhancements, allowing you to focus
          on what you do best. 🔧🔒📞💼🌐
        </p>
      </div>
    </div>
  );
}

export default SliderComponent;
