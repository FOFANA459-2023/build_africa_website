import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import social icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex space-x-6 text-lg">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Programs</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Donate</a>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition duration-300">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p>© 2024 Build Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
