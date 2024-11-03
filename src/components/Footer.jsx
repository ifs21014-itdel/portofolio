import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGlobe } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-sky-400 text-white py-8 w-full">
      <div className="container mx-auto text-center space-y-4">
        <h2 className="text-2xl font-bold">Contact Information</h2>
        <div className="flex justify-center space-x-6">
          {/* Kontak Telepon */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-white text-xl" />
            <span className="text-lg">081396460403</span>
          </div>

          {/* Kontak Email */}
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-white text-xl" />
            <span className="text-lg">dediandree22@gmail.com</span>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-white text-xl" />
            <a
              href="https://www.linkedin.com/in/dedi-panggabean-569a57272/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              LinkedIn
            </a>
          </div>

          {/* Portfolio */}
          <div className="flex items-center space-x-2">
            <FaGlobe className="text-white text-xl" />
            <a
              href="https://ifs21014-itdel.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              Portfolio 1
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <FaGlobe className="text-white text-xl" />
            <a
              href="https://dedi-portfolio.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              Portfolio 2
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
