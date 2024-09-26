import Logo from "../assets/Logo2.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${Logo})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Empowering Future Leaders in Africa
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-bold text-white">
          BUILD-IN-A-BOX: Our annual entrepreneurial leadership camp in
          partnership with the African Leadership Academy.
        </p>
        <div className="mt-6">
          <Link to="/donate">
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-400">
            Support Our Mission
          </button>
          </Link>
          <button className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
