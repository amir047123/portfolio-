import React from "react";

const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-10 bg-gray-800 bg-gradient-to-r  to-gray-500  text-align: justify">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-1/2 pr-6">
            <h2 className="text-4xl font-bold text-white-800 mb-4">Mission</h2>
            <p className="text-lg text-white-600 leading-relaxed ">
              At Thinkystorm, our mission is to develop innovative and high-quality software solutions that solve real-world problems for businesses and individuals. We believe that technology has the power to transform industries and improve people's lives, and we are committed to being at the forefront of this change.
            </p>
          </div>
          <div className="w-1/2 pl-6">
            <h2 className="text-4xl font-bold text-cyan-600 mb-4">Vision</h2>
            <p className="text-lg text-white-600 leading-relaxed">
              Our vision is to be a leading software company that is recognized for its exceptional products, talented team, and commitment to customer success. We aspire to be a company that empowers its employees to achieve their full potential and fosters a culture of innovation, collaboration, and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
