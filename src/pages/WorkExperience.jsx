const WorkExperience = () => {
    return (
      <div className="pt-40 work-experience container mx-auto px-4 py-12 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Work Experience</h2>
        <div className="experience-list space-y-8">
          {[
            {
              company: "Permana Solutions",
              period: "May 2024 - Aug 2024",
              role: "Full Stack Developer",
              description:
                "Development of the Wahanabhara Bhakti Explosive Material Transportation Resource Planning Management Website Application using .NET and Next.js."
            },
            {
              company: "PT Citra Bonang",
              period: "September - Present",
              role: "Full Stack Developer",
              description:
                "Contributing as a Full Stack Developer, responsible for developing and maintaining web applications."
            }
          ].map((exp, index) => (
            <div key={index} className="experience-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-sky-600 mb-2">{exp.company}</h3>
              <p className="text-gray-500 italic mb-1">{exp.period}</p>
              <p className="text-lg font-medium mb-2">{exp.role}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WorkExperience;
  