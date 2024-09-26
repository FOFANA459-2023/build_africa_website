import { Link } from "react-router-dom"; 
const Programs = () => {
    return (
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Our Programs</h2>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold">BUILD-IN-A-BOX</h3>
              <p className="mt-2">An annual week-long leadership camp designed to inspire Africa’s next generation of entrepreneurs.</p>
              <Link to="/gallary">
              <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">Discover BUILD-IN-A-BOX</button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold">Education Outreach</h3>
              <p className="mt-2">Increasing access to quality education through mentoring, scholarships, and learning initiatives.</p>
              <Link to="/gallary">
              <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">Learn More</button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold">Entrepreneurship Training</h3>
              <p className="mt-2">Supporting young entrepreneurs with the tools and resources to launch successful ventures.</p>
              <Link to="/gallary">
              <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">Get Involved</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Programs;
  