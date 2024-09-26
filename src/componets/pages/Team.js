import React from "react";
import Tijan from '../assets/Tijan.jpg'

function Team() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        Meet Our Team
      </h2>
      <div className="flex flex-col space-y-8">
        {/* Team member 1 */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6">
          <img
            src={Tijan}
            alt="John Doe"
            className="w-32 h-32 mx-auto md:mx-0 md:w-48 md:h-48 rounded-full object-cover"
          />
          <div className="md:ml-6 text-center md:text-left">
            <h3 className="text-xl font-semibold text-green-600 mt-4 md:mt-0">
              John Doe
            </h3>
            <p className="text-gray-600">Co-Founder & CEO</p>
            <p className="mt-2 text-gray-600">
              John is passionate about driving innovation in African education
              and entrepreneurship. With over 15 years of experience, he leads
              Build Africa’s strategic vision and growth.
            </p>
          </div>
        </div>

        {/* Team member 2 */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6">
          <img
            src={Tijan}
            alt="Jane Smith"
            className="w-32 h-32 mx-auto md:mx-0 md:w-48 md:h-48 rounded-full object-cover"
          />
          <div className="md:ml-6 text-center md:text-left">
            <h3 className="text-xl font-semibold text-green-600 mt-4 md:mt-0">
              Kcaliphate H. Dulleh
            </h3>
            <p className="text-gray-600">Co-Founder & COO</p>
            <p className="mt-2 text-gray-600">
              Kcaliphate F.H. Dulleh (Liberia), studies Finance & Accounting at
              Ritsumeikan Asia Pacific University, and is an alumnus of the
              African Leadership Academy, Class of 2019. Passionate about
              leveraging business for social impact, he returned to Liberia
              post-ALA to support small enterprises and closely assisted the CEO
              of City Lion to manage importation of refined petroleum products.
              Previously, he led the BUILD-IN-BOX online curriculum during
              COVID-19 at ALA and coordinated the Launch X Club. As CEO of the
              Union for Business and Entrepreneurship Development in Africa, he
              connected student enterprises to external opportunities.
              Additionally, he was a Business Strategist at Educate Children,
              enhancing foundational learning outcomes for out-of-school
              children.
            </p>
          </div>
        </div>

        {/* Team member 3 */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6">
          <img
            src={Tijan}
            alt="Sarah Johnson"
            className="w-32 h-32 mx-auto md:mx-0 md:w-48 md:h-48 rounded-full object-cover"
          />
          <div className="md:ml-6 text-center md:text-left">
            <h3 className="text-xl font-semibold text-green-600 mt-4 md:mt-0">
              Sarah Johnson
            </h3>
            <p className="text-gray-600">Program Director</p>
            <p className="mt-2 text-gray-600">
              Sarah coordinates our educational and entrepreneurship programs,
              ensuring they reach students and young leaders across Africa.
            </p>
          </div>
        </div>

        {/* Team member 4 */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6">
          <img
            src={Tijan}
            alt="Michael Brown"
            className="w-32 h-32 mx-auto md:mx-0 md:w-48 md:h-48 rounded-full object-cover"
          />
          <div className="md:ml-6 text-center md:text-left">
            <h3 className="text-xl font-semibold text-green-600 mt-4 md:mt-0">
              Michael Brown
            </h3>
            <p className="text-gray-600">Head of Partnerships</p>
            <p className="mt-2 text-gray-600">
              Michael leads Build Africa's strategic partnerships and
              fundraising efforts, working with corporations, foundations, and
              government bodies to scale our programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
