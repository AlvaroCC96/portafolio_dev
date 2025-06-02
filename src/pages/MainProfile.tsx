import React, { useState, useRef } from 'react';
import { Github, Linkedin, Mail, Code2, Database, Globe, Cpu, Blocks, Cloud, Terminal, Palette } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import emailjs from '@emailjs/browser';
import { TypewriterHeader } from '../components/TypewriterHeader';
import { TechCard } from '../components/TechCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { SocialLink } from '../components/SocialLink';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function MainProfile() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    message: '',
    type: ''
  });
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: '', type: '' });

    try {
        await emailjs.sendForm(
            'service_7icpweg',
            'template_qm7j5dl',
            form.current,
            'kSBrrpB89qNnrrClL'
        );

      setStatus({
        message: 'Message sent successfully!',
        type: 'success'
      });
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      setStatus({
        message: 'Failed to send message. Please try again.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const technologies = [
    { 
      icon: <Database size={40} />, 
      title: "Backend", 
      items: ["Laravel", "Python", "MySQL", "BigQuery", "OracleSQL"] 
    },
    { 
      icon: <Code2 size={40} />, 
      title: "Frontend", 
      items: ["React", "jQuery", "CSS", "HTML"] 
    },
    { 
      icon: <Terminal size={40} />, 
      title: "DevOps", 
      items: ["CI/CD", "Docker", "Jenkins", "Terraform"] 
    },
    { 
      icon: <Cpu size={40} />, 
      title: "Tools", 
      items: ["Git", "Jira", "Postman", "VSCode"] 
    },
    { 
      icon: <Globe size={40} />, 
      title: "Web", 
      items: ["REST APIs", "Testing", "WebScraping"] 
    },    
    { 
      icon: <Cloud size={40} />, 
      title: "Cloud", 
      items: ["AWS", "GCP"] 
    },
    { 
      icon: <Palette size={40} />, 
      title: "Design", 
      items: ["Figma"] 
    },
  ];

  return (
    <div className="min-h-screen bg-secondary text-gray-100">
      <TypewriterHeader />

      {/* About Me Section */}
      <section className="py-10 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 flex-shrink-0">
              <img
                src="https://i.ibb.co/mbxCBxY/b859906f-31bc-4ad4-8b28-cbcc99096239.png"
                alt="Profile"
                className="w-full h-full rounded-full object-cover shadow-lg ring-4 ring-primary/50"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                About Me
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I am a proactive professional with +4 years of experience in software development, infrastructure management, and technological solutions.
                My goal is to contribute my knowledge and skills while continuing my professional growth and learning new technologies. 
                I have experience in web application development, DevOps, and managing collaboration tools like Git and Jira.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-10 bg-gradient-to-br from-accent/20 to-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
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
      <section className="py-10 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
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
              position="Software Architect"
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
      <section className="py-10 bg-gradient-to-br from-accent/20 to-primary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center space-x-8 mb-12">
              <SocialLink href="https://www.linkedin.com/in/alvarocc96" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="https://github.com/AlvaroCC96" icon={<Github />} label="GitHub" />
            </div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/10 focus:ring-2 focus:ring-primary focus:border-transparent text-black placeholder-gray-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/10 focus:ring-2 focus:ring-primary focus:border-transparent text-black placeholder-gray-600"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/10 focus:ring-2 focus:ring-primary focus:border-transparent text-black placeholder-gray-600"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-lg hover:from-primary/90 hover:to-accent/90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {status.message && (
                <div className={`text-center p-3 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-accent text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Álvaro Lucas Castillo Calabacero. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default MainProfile;