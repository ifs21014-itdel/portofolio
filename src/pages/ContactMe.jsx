import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGlobe } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className="contact-me container mx-auto px-4 py-12 bg-gray-50 rounded-lg shadow-md">
      <h2 className="mt-10 text-4xl font-extrabold text-center mb-10 text-gray-800">Contact Me</h2>
      <div className="contact-info space-y-6">
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-sky-600 text-2xl" />
          <span className="text-lg text-gray-700">081396460403</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-sky-600 text-2xl" />
          <span className="text-lg text-gray-700">dediandree22@gmail.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaLinkedin className="text-sky-600 text-2xl" />
          <a
            href="https://www.linkedin.com/in/dedi-panggabean-569a57272/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-sky-600 hover:underline"
          >
            linkedin.com/in/dedi-panggabean-569a57272/
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <FaGlobe className="text-sky-600 text-2xl" />
          <a
            href="https://ifs21014-itdel.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-sky-600 hover:underline"
          >
            ifs21014-itdel.github.io
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <FaGlobe className="text-sky-600 text-2xl" />
          <a
            href="https://dedi-portfolio.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-sky-600 hover:underline"
          >
            dedi-portfolio.github.io
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
