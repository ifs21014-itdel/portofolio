import HeroImage from "../assets/images/foto.jpg";

const About = () => {
  return (
    <div className="about-page container mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-10">
      {/* Foto di sebelah kiri */}
      <div className="photo-section w-full md:w-1/2 pt-35">
        <img
          src={HeroImage}
          alt="Deskripsi Foto"
          className="w-full rounded-full shadow-lg "
        />
      </div>

      {/* Keterangan di sebelah kanan */}
      <div className="description-section w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-4">
        I am Dedi Andre Martua Raja Panggabean, a
            highly motivated 7th semester student at the Del
            Technology Institute with a strong academic
            background (GPA: 3.60). Beyond academics, I
            actively participate in various organizations,
            where I exemplify versatility and a collaborative
            mindset.
            With a fervent interest in software development, I
            am actively pursuing an internship opportunity to
            expand my technical proficiency and cultivate
            invaluable experience in team collaboration,
            leadership, and effective communication within
            the realm of backend development. I firmly
            believe that my skills and passion are poised to
            drive tangible advancements in the technology
            industry.
        </p>
      </div>
    </div>
  );
};

export default About;
