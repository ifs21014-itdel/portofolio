const OrganisationalExperience = () => {
    return (
      <div className=" organisational-experience container mx-auto px-4 py-12 bg-gray-50 rounded-lg shadow-md">
        <h2 className="pt-40 text-4xl font-extrabold text-center mb-10 text-gray-800">Organisational Experience</h2>
        <div className="experience-list space-y-8">
          {[
            {
              title: "MAJELIS PEMUSYAWARATAN MAHASISWA KM IT DEL",
              period: "May 2023 - Present",
              role: "Head of MPM KM IT Del 2023/2024"
            },
            {
              title: "IT DEL FEST",
              period: "Jun 2023 - Aug 2023",
              role: "Head of IT Del Fest 2023"
            },
            {
              title: "KPU IT DEL",
              period: "Mar 2023 - May 2023",
              role: "Head of KPU IT Del 2023"
            },
            {
              title: "MAJELIS PEMUSYAWARATAN MAHASISWA KM IT DEL",
              period: "Jun 2022 - May 2023",
              role: "Commission B"
            },
            {
              title: "MPK SMA N 3 TARUTUNG",
              period: "Oct 2018 - Oct 2019",
              role: "Head of MPK SMA N 3 Tarutung 2018/2019"
            }
          ].map((exp, index) => (
            <div key={index} className="experience-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-sky-600 mb-2">{exp.title}</h3>
              <p className="text-gray-500 italic mb-1">{exp.period}</p>
              <p className="text-lg text-gray-700">{exp.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OrganisationalExperience;
  