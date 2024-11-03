import HeroImage from "../assets/images/foto.jpg";
import { Link } from 'react-router-dom';

const HomePages = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          {/* Section teks */}
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Hello,My Name Is <span className="font-bold text-sky-400 underline">Dedi Andre Martua Raja Panggabean</span>
            </h1>
            <p className="text-base/8 mb-7">
             
            </p>
            <Link to="/about" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full font-bold">
              About Me <i className="ri-eye-line ms-1"></i>
            </Link>
          </div>

          {/* Section gambar */}
          <div className="box">
            <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] mx-auto md:m-0 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
