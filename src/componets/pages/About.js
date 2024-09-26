import React from 'react';
import Programs from './Programs';
import Team from './Team';

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">About Build Africa</h1>
        <p className="text-lg text-gray-600 mt-4">
          Building the future of Africa through education and entrepreneurship.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Build Africa empowers young African leaders to develop the entrepreneurial skills and leadership
          capacity necessary to drive positive change. Our mission is to provide the tools and platforms for young people 
          to transform their communities through innovation, education, and sustainable business development.
        </p>
      </div>

      {/* Vision Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We envision an Africa where young leaders drive sustainable growth and create opportunities for 
          the next generation. Through a network of passionate entrepreneurs and changemakers, Build Africa
          aims to nurture a culture of collaboration, innovation, and leadership across the continent.
        </p>
      </div>


      {/* Team Section */}
      <Team />


      {/* Programs Section */}
      <Programs />
      

    </div>
  );
};

export default About;
