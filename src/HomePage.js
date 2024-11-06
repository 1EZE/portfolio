import React, { useState } from 'react';
import { Menu, X, Mail, Phone, Link } from 'lucide-react';
import ezeImage from './images/eze.png';
import broImage from './images/project-5.png';
import boImage from './images/project-1.png';
import booImage from './images/project-6.png';
import koImage from './images/project-3.png';
import kooImage from './images/project-4.png';
import woImage from './images/project-2.png';
import wooImage from './images/food.png';
import roImage from './images/trip.png';
import rooImage from './images/we.PNG';
import ideImage from './images/ide.PNG';
import videoFile from './images/Products.mp4';
import videFile from './images/gym.mp4';
import v1File from './images/v1.mp4';
import v2File from './images/v2.mp4';
import v4File from './images/v4.mp4';
import v5File from './images/v5.mp4';
import d1Image from './images/D1.png';
import d2Image from './images/D2.png';
import pdFile from './images/GATARE Ezechiel CV.pdf';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('My gallery');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = ['My gallery', 'Graphic designs', 'Websites', 'Video animations', 'Data Analysis'];

  const projects = [
    {
      id: 1,
      image: broImage,
      category: "Graphic designs",
      title: "Portrait Illustration",
    },
    {
      id: 2,
      videoUrl: videoFile,
      mediaType: "video",
      category: "Video animations",
      title: "TechRise"
    },
    {
      id: 3,
      image: boImage,
      category: "Graphic designs",
      title: "Sports Illustration"
    },
    {
      id: 4,
      image: rooImage,
      category: "Websites",
      title: "Tourism website",
       link: "https://addaxtravel.com/index.html"
    },
    {
      id: 5,
      image: booImage,
      category: "Graphic designs",
      title: "Portrait Series"
    },
    {
      id: 6,
      image: koImage,
      category: "Graphic designs",
      title: "Fashion Design",
    },
    {
      id: 7,
      image: ideImage,
      category: "Websites",
      title: "Film Production",
      link: "https://indestructiblefilms.icu/index.html#home"
    },
    {
      id: 9,
      image: kooImage,
      category: "Graphic designs",
      title: "Portrait Illustration",
    },
    {
      id: 10,
      image: woImage,
      category: "Graphic designs",
      title: "Portrait Illustration",
    },
    {
      id: 11,
      image: wooImage,
      category: "Graphic designs",
      title: "Portrait Illustration",
    },
    {
      id: 12,
      image: roImage,
      category: "Graphic designs",
      title: "Portrait Illustration",
    },
    {
      id: 13,
      videoUrl: videFile,
      mediaType: "video",
      category: "Video animations",
      title: "WAKA Gym"
    },
    {
      id: 14,
      videoUrl: v1File,
      mediaType: "video",
      category: "Video animations",
      title: "MOSAFREN"
    },
    {
      id: 15,
      videoUrl: v2File,
      mediaType: "video",
      category: "Video animations",
      title: "ADDAXTRAVEL"
    },
    {
      id: 16,
      videoUrl: v4File,
      mediaType: "video",
      category: "Video animations",
      title: "ADDAXTRAVEL"
    },
    {
      id: 17,
      videoUrl: v5File,
      mediaType: "video",
      category: "Video animations",
      title: "ADDAXTRAVEL"
    },
    {
      id: 18,
      image: d1Image,
      category: "Data Analysis",
      title: "AirBnB Project",
      link: "https://public.tableau.com/app/profile/ezechiel.gatare/viz/AirBnBProject_17182724835210/Dashboard1",
    },
    {
      id: 19,
      image: d2Image,
      category: "Data Analysis",
      title: "Covid-19 In Indian Analysis",
      link: "https://public.tableau.com/app/profile/ezechiel.gatare/viz/Covid-19InIndianAnalysis/Dashboard2",
    },
  ];

  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies"
    },
    {
      title: "Graphic Design",
      description: "Creative designs for digital and print media"
    },
    {
      title: "Video Animation",
      description: "Engaging motion graphics and animations"
    },
    {
      title: "Data Analysis",
      description: "Insightful data visualization and analysis"
    }
  ];

  const handleMediaClick = (project) => {
    if (project.link) {
      window.open(project.link, "_blank");
    } else {
      setSelectedMedia(project);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
  };

  const downloadCV = () => {
    fetch(pdFile)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = pdFile;
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">Gatare.</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white">About</a>
              <a href="#services" className="text-gray-300 hover:text-white">Services</a>
              <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Services</a>
              <a href="#projects" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto px-4 pt-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Creative Developer</h1>
            <p className="text-xl mb-8">Bringing ideas to life through code and design</p>
            <a href="#contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700">
              Get in touch
            </a>
          </div>
        </div>
      </section>

    {/* About Section */}
<section id="about" className="py-20 bg-gray-900 text-gray-200">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <img src={ezeImage} alt="Eze" className="rounded-lg shadow-lg" />
      </div>
      <div>
        <p className="text-lg mb-6">
          I'm a passionate developer and designer with expertise in creating beautiful, functional websites and applications. My goal is to bridge the gap between technology and creativity, delivering solutions that are not only effective but also engaging.
        </p>
        <p className="text-lg">
          With a keen eye for detail and a love for problem-solving, I continuously strive to learn and improve my skills. I'm excited to collaborate on new projects and bring innovative ideas to life.
        </p>
        {/* Download CV Button */}
        <a onClick={downloadCV} className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 cursor-pointer" target='_blank'>
    Download CV
</a>


      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => (
              <div key={service.title} className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900 text-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="flex justify-center mb-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`mx-2 px-4 py-2 rounded-lg ${activeCategory === category ? 'bg-indigo-600' : 'bg-gray-700'}`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects
              .filter(project => activeCategory === 'My gallery' || project.category === activeCategory)
              .map((project) => (
                <div 
                  key={project.id} 
                  className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer" 
                  onClick={() => handleMediaClick(project)}
                >
                  {project.mediaType === 'video' ? (
                    <video
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      src={project.videoUrl}
                      alt={project.title}
                      controls
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm">{project.category}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

    {/* Contact Section */}
<section id="contact" className="py-20 bg-gray-900 text-gray-200">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">Send me a message!</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
        <p className="text-gray-400 mb-8">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-indigo-500" />
          <span className="text-gray-400">ezegatare@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-indigo-500" />
            <span className="text-gray-400">(+250) 785768078</span>
          </div>
        </div>
      </div>

    <form className="space-y-6" action="https://formspree.io/f/xyyropoz" method="post" target="_blank">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      type="text"
      name="name" // Add the name attribute
      placeholder="Name"
      required // Add the required attribute
      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-200"
    />
    <input
      type="email"
      name="email" // Add the name attribute
      placeholder="Email"
      required // Add the required attribute
      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-200"
    />
  </div>
  <input
    type="text"
    name="subject" // Add the name attribute
    placeholder="Subject"
    required // Add the required attribute
    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-200"
  />
  <textarea
    rows={6}
    name="message" // Add the name attribute
    placeholder="Message"
    required // Add the required attribute
    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-200"
  ></textarea>
  <button
    type="submit"
    className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
  >
    Send Message
  </button>
</form>

    </div>
  </div>
</section>

{/* Footer */}
<footer className="py-4 bg-gray-800 text-gray-200">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <p className="mb-2">© 2023 Gatare. All rights reserved.</p>
    <div className="flex justify-center space-x-4">
      <a href="https://twitter.com/home" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="https://www.linkedin.com/in/gatare-eze-0744201b8" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/1EZE" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://instagram.com/gatareeze?igshid=YmMyMTA2M2Y=" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Instagram</a>
    </div>
  </div>
</footer>


      {/* Modal for Media Preview */}
      {isModalOpen && selectedMedia && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            {selectedMedia.mediaType === 'video' ? (
              <video className="max-w-full max-h-screen" controls>
                <source src={selectedMedia.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={selectedMedia.image} alt="Preview" className="max-w-full max-h-screen" />
            )}
            <button onClick={closeModal} className="absolute top-2 right-2 text-white bg-red-600 px-2 rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};



export default Portfolio;
