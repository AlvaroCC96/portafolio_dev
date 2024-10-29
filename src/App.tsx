import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code2, Database, Globe, Cpu, Blocks, Cloud, Terminal, Palette } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { TypewriterHeader } from './components/TypewriterHeader';
import { TechCard } from './components/TechCard';
import { ExperienceCard } from './components/ExperienceCard';
import { SocialLink } from './components/SocialLink';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Imagen from './assets/profile.png';

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:alvarolucascc96@gmail.com?subject=Formulario de contacto de ${name}&body=${message}`;
    window.location.href = mailtoLink;
  };


  const technologies = [
    { icon: <Database size={40} />, title: "Backend", items: ["Laravel", "Python", "MySQL", "BigQuery", "OracleSQL"] },
    { icon: <Code2 size={40} />, title: "Frontend", items: ["React", "Jquery", "CSS", "HTML"] },
    { icon: <Terminal size={40} />, title: "DevOps", items: ["CI/CD", "Docker", "Jenkins" , "Terraform"] },
    { icon: <Cpu size={40} />, title: "Tools", items: ["Git", "Jira", "Postman" ] },
    { icon: <Globe size={40} />, title: "Web", items: ["REST APIs", "Testing" , "WebScraping"] },    
    { icon: <Cloud size={40} />, title: "Cloud", items: ["AWS", "GCP"] },
    { icon: <Palette size={40} />, title: "Design", items: ["Figma"] },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <TypewriterHeader />

      {/* About Me Section */}
      <section className="py-10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 flex-shrink-0">
              <img
                src="https://i.ibb.co/mbxCBxY/b859906f-31bc-4ad4-8b28-cbcc99096239.png"
                alt="Profile"
                className="w-full h-full rounded-full object-cover shadow-lg ring-4 ring-purple-500/50"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                About Me
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
              I am a proactive professional with +4 years of experience in software development, infrastructure management, and technological solutions.
              My goal is to contribute my knowledge and skills while continuing my professional growth and learning new technologies. 
              I have experience in web application development, DevOps, and managing collaboration tools like Git and Jira.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-10 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Technologies
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="tech-carousel"
          >
            {technologies.map((tech, index) => (
              <SwiperSlide key={index}>
                <TechCard {...tech} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-10 bg-gradient-to-br from-purple-900/20 to-indigo-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Professional Experience
          </h2>
          <div className="space-y-12">
            <ExperienceCard
              position="Backend Developer"
              company="LATAM Airlines."
              date="2024 - Present"
              description="Integrations development for Latam Airlines, using Google Cloud Platform (GCP) and Python, applying CI/CD practices through Cloud Build and managing services on Cloud Run.
              Focused on the compliance area, validating and verifying data integrity to ensure regulatory compliance."
            />
            <ExperienceCard
              position="Fullstack Developer"
              company="Kuantaz."
              date="2024 - 2024"
              description='Design, develop, and implement modules for governmental systems such as "ChileAtiende" and the "Chile Crece Contigo". Monitoring and Tracking System, 
              using technologies like Laravel, Python, React.js, Oracle SQL, and MySQL.'
            />
            <ExperienceCard
              position="Fullstack Developer"
              company="RedCapital"
              date="2023 - 2024"
              description="Automate and build integrations with services such as SUNAT (Peru), CAVALI (Peru), DICOM, General Treasury of the Republic, Judicial Power, and the Internal Revenue Service of Chile. 
              Implementation using AWS services like Lambda, S3, Elastic Container Registry, API Gateway, among others.
              Administration and automation of infrastructure."
            />
            <ExperienceCard
              position="Backend Developer"
              company="RedCapital"
              date="2021 - 2023"
              description="Design, develop, and integrate modules in PHP Laravel to automate Factoring and Credit processes, with the aim of improving the company's financial management efficiency."
            />
            <ExperienceCard
              position="Software Engineer"
              company="Seremi De Salud Antofagasta."
              date="2021 - 2021"
              description="Development of solutions to streamline the TTA (Testing, Tracing, and Isolation) strategy during the C-19 contingency, creating tools using Scrapers, Python, and Selenium. 
              Data analysis through Dataframe and Google Data Studio."
            />
            <ExperienceCard
              position="Professional Internship"
              company="Ferrocarril De Antofagasta a Bolivia (FCAB)."
              date="2020 - 2020"
              description="Development and implementation of modules for evaluating railway operators through data analysis. The modules were developed using OctoberCMS."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center space-x-8 mb-12">
              <SocialLink href="https://www.linkedin.com/in/alvarocc96" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="mailto:alvarolucascc96@gmail.com" icon={<Mail />} label="Email" />
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-500/10 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/70"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-500/10 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/70"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-500/10 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-white/70"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Álvaro Lucas Castillo Calabacero. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;