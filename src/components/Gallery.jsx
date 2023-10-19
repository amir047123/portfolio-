import React from "react";

const Gallery = () => {
  const images = [
    {
      src: "https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/329331204_2354265194750466_8907569857664889697_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFwJNhoxb71wXghggIuuFFQe19SYotlGUN7X1Jii2UZQ_z6AvK9UM28UNA-hBPTE_UkGSD2oFyYQRrjPPbyGi6w&_nc_ohc=gC_LewC4YLIAX-Frn77&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfAOOhf1x-u8fb1WbWWwhliU6S2794H5ZOuG7PqZZ_vMSw&oe=64604053",
      alt: "Image 1",
    },
    {
      src: "https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/328868790_633806768506159_5219820431331550909_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF1ZnNLoXu5ex2iKmMzszngiEDZtXf2Ai-IQNm1d_YCL3-Ph4Xcs3FE9f__jyGDYQRJIylGGDSI8_dvO_XeXK0Y&_nc_ohc=YPWTKrlrepkAX_SDX3x&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfAvj4GNV5lIG_0s8iM6EhVuVpqwawslwYMcBMUfY66IwQ&oe=645FBA37",
      alt: "Image 2",
    },
    {
      src: "https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/330352906_506472201560230_2082215086342543064_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGMyLpCRk12CyndKWChkNcJ7XU2hh7MfF3tdTaGHsx8Xftd3-LNaNVP0unKOWLO7HQZCxpbIj5Dc488sRg24qwB&_nc_ohc=1VrHwtw71HUAX8OXn_E&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfBCzJfGa_i-ErmePgMlzTtS0OIcd70EqmxpK353KZLMxQ&oe=64608505",
      alt: "Image 3",
    },
    {
      src: "https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/330316466_181786377924047_4293087326942431249_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeELZdqASAdDvVQ88gMNGIitpUPhdiyx2rGlQ-F2LLHasSaZTDype96u88mCWv4OahIeizZXiSSAvpAkdV8EBoDg&_nc_ohc=lrx2b-oCNdEAX9qKfBA&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfAfOBpaxX246PjN0K-Q-WqggdjrDd8QElrGvVAJYPPrJA&oe=6460305C",
      alt: "Image 4",
    },
  ];

  return (
    <section id="gallery" className="py-10 px-3">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Our <span className="text-cyan-600">Gallery</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          A selection of our finest work
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {images.map((image, i) => (
          <div key={i}>
            <img src={image.src} alt={image.alt} className="rounded-lg https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/330352906_506472201560230_2082215086342543064_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGMyLpCRk12CyndKWChkNcJ7XU2hh7MfF3tdTaGHsx8Xftd3-LNaNVP0unKOWLO7HQZCxpbIj5Dc488sRg24qwB&_nc_ohc=1VrHwtw71HUAX8OXn_E&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfBCzJfGa_i-ErmePgMlzTtS0OIcd70EqmxpK353KZLMxQ&oe=64608505" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
