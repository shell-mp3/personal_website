import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Users, Award, Briefcase } from 'lucide-react';
import shellyImg from './IMG_2165.jpg';  // file is in the same folder as App.js


// Neural Network Node Component
const NeuralNode = ({ x, y, size = 8, delay = 0, pulseSpeed = 3 }) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animation: `neuralPulse ${pulseSpeed}s ease-in-out infinite, float ${8 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      <div
        className={`rounded-full bg-cyan-400/30 backdrop-blur-sm`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.4), 0 0 40px rgba(34, 211, 238, 0.2)'
        }}
      >
        <div className="absolute inset-0 rounded-full bg-cyan-300/50 animate-ping" style={{ animationDuration: '3s' }}></div>
      </div>
    </div>
  );
};


const GalaxyCard = ({ icon: Icon, title, children, className = "" }) => {
  return (
    <div className={`relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg rounded-3xl p-8
                       border border-purple-300/10 hover:border-purple-300/30 transition-all duration-500
                       hover:shadow-2xl hover:shadow-purple-500/20 group hover:scale-[1.02] overflow-hidden ${className}`}>
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{
             background: 'linear-gradient(90deg, rgba(34, 211, 238, 0.3), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3), rgba(34, 211, 238, 0.3))',
             backgroundSize: '200% 100%',
             animation: 'gradientFlow 3s linear infinite',
             padding: '2px',
             WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
             WebkitMaskComposite: 'xor',
             maskComposite: 'exclude'
           }}>
      </div>

      {/* Floating particles inside card */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        {[...Array(5)].map((_, i) => (
          <div
            key={`card-particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animation: `cardFloat ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border border-cyan-300/20 group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-cyan-300 group-hover:text-cyan-200 transition-colors" size={24} />
          </div>
          <h3 className="text-xl font-semibold text-white/90">{title}</h3>
        </div>
        {children}
      </div>
    </div>
  );
};

// Image Carousel Component
const ImageCarousel = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-300/20 relative">
      <img
        src={images[currentIndex]}
        alt={`${alt} - Image ${currentIndex + 1}`}
        className="w-full h-auto object-cover aspect-video transition-opacity duration-500"
      />
      {/* Image indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-cyan-400 w-6'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Futuristic Background with Neural Network and Grid
const FuturisticBackground = () => {
  const [nodes] = useState(() => {
    // Generate neural network nodes
    return Array.from({ length: 15 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 6 + Math.random() * 6,
      delay: Math.random() * 5,
      pulseSpeed: 2 + Math.random() * 3
    }));
  });

  return (
    <>
      {/* Geometric Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0.3)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.3)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Geometric accent lines */}
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="url(#gridGradient)" strokeWidth="1" opacity="0.3"
                style={{animation: 'shimmer 4s ease-in-out infinite'}} />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="url(#gridGradient)" strokeWidth="1" opacity="0.3"
                style={{animation: 'shimmer 4s ease-in-out infinite', animationDelay: '2s'}} />
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="url(#gridGradient)" strokeWidth="1" opacity="0.2"
                style={{animation: 'shimmer 5s ease-in-out infinite', animationDelay: '1s'}} />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="url(#gridGradient)" strokeWidth="1" opacity="0.2"
                style={{animation: 'shimmer 5s ease-in-out infinite', animationDelay: '3s'}} />
        </svg>
      </div>

      {/* Neural Network Nodes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {nodes.map((node, i) => (
          <NeuralNode key={i} {...node} />
        ))}
      </div>

      {/* Connecting Lines Between Nodes (SVG) */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {nodes.map((node1, i) =>
            nodes.slice(i + 1).map((node2, j) => {
              const distance = Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2));
              if (distance < 35) {
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={`${node1.x}%`}
                    y1={`${node1.y}%`}
                    x2={`${node2.x}%`}
                    y2={`${node2.y}%`}
                    stroke="rgba(34, 211, 238, 0.2)"
                    strokeWidth="1"
                    style={{
                      animation: `neuralLine ${3 + Math.random() * 2}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                );
              }
              return null;
            })
          )}
        </svg>
      </div>

      {/* Holographic Shimmer Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? 'rgba(34, 211, 238, 0.4)' :
                         i % 3 === 1 ? 'rgba(168, 85, 247, 0.4)' :
                         'rgba(236, 72, 153, 0.4)',
              animation: `particleFloat ${15 + Math.random() * 20}s linear infinite, shimmer ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Ambient Glow Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full filter blur-[100px]"
             style={{animation: 'ambientPulse 8s ease-in-out infinite'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full filter blur-[100px]"
             style={{animation: 'ambientPulse 8s ease-in-out infinite', animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-pink-500/4 rounded-full filter blur-[100px]"
             style={{animation: 'ambientPulse 8s ease-in-out infinite', animationDelay: '2s'}}></div>
      </div>
    </>
  );
};




export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    // Add keyframes to document head
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        33% { transform: translateY(-20px) translateX(10px); }
        66% { transform: translateY(10px) translateX(-10px); }
      }
      @keyframes neuralPulse {
        0%, 100% {
          opacity: 0.4;
          transform: scale(1);
        }
        50% {
          opacity: 1;
          transform: scale(1.2);
        }
      }
      @keyframes shimmer {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.6; }
      }
      @keyframes particleFloat {
        0% { transform: translateY(100vh) translateX(0); opacity: 0; }
        10% { opacity: 0.6; }
        90% { opacity: 0.6; }
        100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
      }
      @keyframes neuralLine {
        0%, 100% { opacity: 0.1; stroke-width: 0.5; }
        50% { opacity: 0.4; stroke-width: 1.5; }
      }
      @keyframes ambientPulse {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(1.1); }
      }
      @keyframes heroGlow {
        0%, 100% {
          text-shadow: 0 0 20px rgba(34, 211, 238, 0.3),
                       0 0 40px rgba(34, 211, 238, 0.2),
                       0 0 60px rgba(168, 85, 247, 0.1);
        }
        50% {
          text-shadow: 0 0 30px rgba(34, 211, 238, 0.5),
                       0 0 60px rgba(34, 211, 238, 0.3),
                       0 0 80px rgba(168, 85, 247, 0.2);
        }
      }
      @keyframes buttonGlow {
        0%, 100% {
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.3),
                      0 0 40px rgba(34, 211, 238, 0.1);
        }
        50% {
          box-shadow: 0 0 30px rgba(34, 211, 238, 0.5),
                      0 0 60px rgba(34, 211, 238, 0.2);
        }
      }
      @keyframes gradientFlow {
        0% { background-position: 0% 50%; }
        100% { background-position: 200% 50%; }
      }
      @keyframes cardFloat {
        0%, 100% {
          transform: translateY(0px) translateX(0px);
          opacity: 0.4;
        }
        50% {
          transform: translateY(-15px) translateX(10px);
          opacity: 0.8;
        }
      }
      @keyframes tagShimmer {
        0% {
          background-position: -200% center;
        }
        100% {
          background-position: 200% center;
        }
      }
      .hero-glow {
        animation: heroGlow 4s ease-in-out infinite;
      }
      .tag-shimmer {
        position: relative;
        overflow: hidden;
      }
      .tag-shimmer::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.2),
          transparent
        );
        animation: tagShimmer 3s infinite;
      }
    `;
    document.head.appendChild(styleSheet);

    setIsVisible(true);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0820] via-[#1a1234] to-[#0a0612] text-white relative overflow-x-hidden">
      <FuturisticBackground />
      
      {/* Header - Minimal Futuristic Design */}
      <header className="relative z-10 p-6">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-xl font-light tracking-wider">
            <span className="text-cyan-400/90 font-mono">SHELLY NORMATOV</span>
            <span className="text-gray-500 mx-2">/</span>
            <span className="text-gray-400 text-sm">portfolio</span>
          </div>
          <div className="flex gap-6 bg-black/30 backdrop-blur-md rounded-lg px-6 py-2.5 border border-cyan-400/20">
            <a href="#about" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-light">About</a>
            <a href="#experience" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-light">Experience</a>
            <a href="#projects" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-light">Projects</a>
            <a href="#involvement" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-light">Involvement</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-light">Contact</a>
          </div>
        </nav>
      </header>

{/* Hero Section - Futuristic Minimalist Design */}
<section className="relative z-10 min-h-screen flex items-center justify-center px-6">
  {/* Decorative Frame Elements */}
  <div className="absolute top-20 left-10 w-32 h-32 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-lg"
       style={{animation: 'shimmer 4s ease-in-out infinite'}}></div>
  <div className="absolute bottom-20 right-10 w-32 h-32 border-b-2 border-r-2 border-purple-400/30 rounded-br-lg"
       style={{animation: 'shimmer 4s ease-in-out infinite', animationDelay: '2s'}}></div>

  <div
    className={`text-center max-w-4xl transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
  >
    {/* Data Label Effect */}
    <div className="text-cyan-400/60 text-sm font-mono mb-4 tracking-wider">
      &lt; PORTFOLIO_INITIALIZE /&gt;
    </div>

    {/* Main Heading with Soft Glow */}
    <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
      <span className="bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 bg-clip-text text-transparent hero-glow font-medium">
        Hey, I'm Shelly
      </span>
    </h1>

    {/* Thin Accent Line */}
    <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mx-auto mb-8"
         style={{animation: 'shimmer 3s ease-in-out infinite'}}></div>

    {/* Subtitle with data-like styling */}
    <div className="text-base md:text-lg mb-8 text-gray-300/90 font-light tracking-wide">
      <span className="text-cyan-400/80">role:</span> Computer Science Student @ University of Guelph
    </div>

    {/* Description with minimalist spacing */}
    <p className="text-base md:text-lg max-w-2xl mx-auto mb-6 text-gray-400 leading-relaxed font-light">
      Fell in love with <span className="text-cyan-400/90">front-end development</span> back in high school.
      Discovered the nuance of <span className="text-purple-400/90">back-end work</span>.
      Now, I enjoy the challenge of <span className="text-pink-400/90">full-stack development</span>.
    </p>

    <p className="text-base md:text-lg max-w-2xl mx-auto mb-12 text-gray-400 leading-relaxed font-light">
      Driven to keep growing and create solutions that make life easier and more enjoyable.
    </p>

    {/* CTA Buttons with Glow Effect */}
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      <a
        href="#contact"
        className="group relative px-8 py-3 rounded-lg font-medium text-sm tracking-wide
                   bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-sm
                   hover:bg-cyan-500/20 hover:border-cyan-400/60
                   transition-all duration-500 overflow-hidden"
        style={{animation: 'buttonGlow 3s ease-in-out infinite'}}
      >
        <span className="relative z-10 text-cyan-300">Get In Touch</span>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0
                        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </a>
      <a
        href="#projects"
        className="group relative px-8 py-3 rounded-lg font-medium text-sm tracking-wide
                   border border-purple-400/30 backdrop-blur-sm
                   hover:bg-purple-500/10 hover:border-purple-400/60
                   transition-all duration-500 overflow-hidden"
      >
        <span className="relative z-10 text-purple-300">View Projects</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0
                        translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </a>
    </div>

    {/* Scroll Indicator */}
    <div className="flex flex-col items-center gap-2 opacity-60" style={{ animation: 'float 3s ease-in-out infinite' }}>
      <div className="text-xs font-mono text-cyan-400/50 tracking-widest">SCROLL</div>
      <ChevronDown size={20} className="text-cyan-400/60" />
    </div>
  </div>
</section>



      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-200 text-lg leading-relaxed">
What started as casually dipping my toes into programming turned into a steady dive into learning, building, and figuring things out with code.              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
When I'm not debugging, you'll find me hiking trails and exploring nature, turns out both coding and hiking involve figuring out the best path forward, just with different bugs.              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
Outside of school, I help drive SOCIS workshops, research mixers, and coding events, empowering students to turn their "just testing the waters" moments into real impact.              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl p-2 backdrop-blur-lg border border-purple-300/20 group-hover:border-cyan-300/40 transition-all duration-500 max-w-sm mx-auto">
                <img
                src={shellyImg}
                alt="Shelly"
                className="w-full h-auto rounded-2xl object-cover"
                style={{ aspectRatio: '3/4', maxHeight: '350px' }}
              />

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            <GalaxyCard icon={Code} title="Data Migration Contractor - Helios Technology Solutions Inc">
              <p className="text-gray-200 text-sm mb-2 opacity-80">Ontario, CA | May 2025</p>
              <ul className="text-gray-200 mb-6 space-y-2 list-disc list-inside">
                <li>Migrated legacy customer data into Shopify's platform, ensuring seamless integration with existing e-commerce workflows</li>
                <li>Validated and ensured data integrity throughout the migration process, preventing data loss and maintaining accuracy</li>
                <li>Collaborated with development team to troubleshoot migration issues and optimize data transfer processes</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <span className="tag-shimmer bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm hover:bg-purple-400/30 transition-all duration-300 hover:scale-105">Data Migration</span>
                <span className="tag-shimmer bg-cyan-400/20 text-cyan-200 px-4 py-2 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm hover:bg-cyan-400/30 transition-all duration-300 hover:scale-105">Shopify</span>
                <span className="tag-shimmer bg-pink-400/20 text-pink-200 px-4 py-2 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm hover:bg-pink-400/30 transition-all duration-300 hover:scale-105">Data Integrity</span>
                <span className="tag-shimmer bg-violet-400/20 text-violet-200 px-4 py-2 rounded-full text-sm border border-violet-400/30 backdrop-blur-sm hover:bg-violet-400/30 transition-all duration-300 hover:scale-105">E-commerce</span>
              </div>
            </GalaxyCard>

            <GalaxyCard icon={Code} title="Tech Coach - Vaughan Public Libraries">
              <p className="text-gray-200 text-sm mb-2 opacity-80">Ontario, CA | Jan 2022 – Jan 2024</p>
              <ul className="text-gray-200 mb-6 space-y-2 list-disc list-inside">
                <li>Taught C programming fundamentals, automation techniques, and problem-solving strategies to diverse student groups</li>
                <li>Built a reminder notification app featuring API integration, database management, and mobile-first design principles</li>
                <li>Developed curriculum and hands-on coding exercises to enhance student engagement and technical comprehension</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <span className="tag-shimmer bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm hover:bg-purple-400/30 transition-all duration-300 hover:scale-105">C Programming</span>
                <span className="tag-shimmer bg-cyan-400/20 text-cyan-200 px-4 py-2 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm hover:bg-cyan-400/30 transition-all duration-300 hover:scale-105">API Integration</span>
                <span className="tag-shimmer bg-pink-400/20 text-pink-200 px-4 py-2 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm hover:bg-pink-400/30 transition-all duration-300 hover:scale-105">Database Management</span>
                <span className="tag-shimmer bg-violet-400/20 text-violet-200 px-4 py-2 rounded-full text-sm border border-violet-400/30 backdrop-blur-sm hover:bg-violet-400/30 transition-all duration-300 hover:scale-105">Mobile Development</span>
              </div>
            </GalaxyCard>

        
            <GalaxyCard icon={Briefcase} title="Retail Sales Associate - Nike">
              <ul className="text-gray-200 mb-6 space-y-2 list-disc list-inside">
                <li>Used CRM tools and data insights to support sales for Nike’s premium products</li>
                <li>Helped strengthen customer relationships through targeted retail and costumer efforts</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <span className="tag-shimmer bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm hover:bg-purple-400/30 transition-all duration-300 hover:scale-105">CRM Systems</span>
                <span className="tag-shimmer bg-cyan-400/20 text-cyan-200 px-4 py-2 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm hover:bg-cyan-400/30 transition-all duration-300 hover:scale-105">Data Analytics</span>
                <span className="tag-shimmer bg-pink-400/20 text-pink-200 px-4 py-2 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm hover:bg-pink-400/30 transition-all duration-300 hover:scale-105">Digital Marketing</span>
                <span className="tag-shimmer bg-violet-400/20 text-violet-200 px-4 py-2 rounded-full text-sm border border-violet-400/30 backdrop-blur-sm hover:bg-violet-400/30 transition-all duration-300 hover:scale-105">Customer Relations</span>
              </div>
            </GalaxyCard>
          </div>
        </div>
      </section>

      


      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">

            {/* Neural Code Simulator */}
            <GalaxyCard icon={Code} title="Neural Code Simulator">
              <ImageCarousel
                images={[
                  "/images/neural-simulator-1.png",
                  "/images/neural-simulator-2.png"
                ]}
                alt="Neural Code Simulator"
              />

              <p className="text-gray-200 mb-6">
                A Neural Code Simulator that generates synthetic spike data and uses a custom Random Forest model to classify neural activity as normal, Parkinsonian, or epileptiform in real time
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="tag-shimmer bg-purple-400/20 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm hover:bg-purple-400/30 transition-all duration-300 hover:scale-105">Python</span>
                <span className="tag-shimmer bg-cyan-400/20 text-cyan-200 px-3 py-1 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm hover:bg-cyan-400/30 transition-all duration-300 hover:scale-105">Neural Networks</span>
                <span className="tag-shimmer bg-pink-400/20 text-pink-200 px-3 py-1 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm hover:bg-pink-400/30 transition-all duration-300 hover:scale-105">Simulation</span>
              </div>

              <div className="flex gap-4">
                <a href="https://neuraltool.streamlit.app/" target="_blank" rel="noopener noreferrer"
                   className="group relative px-6 py-3 rounded-lg font-semibold text-sm
                              bg-gradient-to-r from-purple-500/70 to-cyan-500/70 hover:from-purple-600/90 hover:to-cyan-600/90
                              transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2
                              shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-cyan-500/40">
                  <span>View Live Demo</span>
                  <span className="text-lg">→</span>
                </a>
              </div>
            </GalaxyCard>

            {/* Shape Shifting Chess */}
            <GalaxyCard icon={Code} title="Shape Shifting Chess">
              <ImageCarousel
                images={[
                  "/images/chess-game-1.png",
                  "/images/chess-game-2.png"
                ]}
                alt="Shape Shifting Chess"
              />

              <p className="text-gray-200 mb-6">
                A shape-shifting chess game where pieces dynamically change form and abilities as the match progresses, creating constantly evolving strategy
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="tag-shimmer bg-purple-400/20 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm hover:bg-purple-400/30 transition-all duration-300 hover:scale-105">HTML</span>
                <span className="tag-shimmer bg-cyan-400/20 text-cyan-200 px-3 py-1 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm hover:bg-cyan-400/30 transition-all duration-300 hover:scale-105">Game Development</span>
                <span className="tag-shimmer bg-pink-400/20 text-pink-200 px-3 py-1 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm hover:bg-pink-400/30 transition-all duration-300 hover:scale-105">UI/UX</span>
              </div>

              <div className="flex gap-4">
                <a href="https://shapeshifterchess.netlify.app/" target="_blank" rel="noopener noreferrer"
                   className="group relative px-6 py-3 rounded-lg font-semibold text-sm
                              bg-gradient-to-r from-purple-500/70 to-cyan-500/70 hover:from-purple-600/90 hover:to-cyan-600/90
                              transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2
                              shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-cyan-500/40">
                  <span>View Live Demo</span>
                  <span className="text-lg">→</span>
                </a>
              </div>
            </GalaxyCard>

            {/* ClubConnect Website */}
            <GalaxyCard icon={Users} title="ClubConnect Website">
              <ImageCarousel
                images={[
                  "/images/clubconnect-1.png",
                  "/images/clubconnect-2.png"
                ]}
                alt="ClubConnect Website"
              />

              <p className="text-gray-200 mb-6">
                A student incubator platform that matches students with professors and supports full project collaboration through real-time tools and a modern dashboard interface
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="tag-shimmer bg-purple-400/20 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm hover:bg-purple-400/30 transition-all duration-300 hover:scale-105">React</span>
                <span className="tag-shimmer bg-cyan-400/20 text-cyan-200 px-3 py-1 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm hover:bg-cyan-400/30 transition-all duration-300 hover:scale-105">Node.js</span>
                <span className="tag-shimmer bg-pink-400/20 text-pink-200 px-3 py-1 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm hover:bg-pink-400/30 transition-all duration-300 hover:scale-105">Database</span>
              </div>

              <div className="flex gap-4">
                <a href="https://club-connect-demo.vercel.app/" target="_blank" rel="noopener noreferrer"
                   className="group relative px-6 py-3 rounded-lg font-semibold text-sm
                              bg-gradient-to-r from-purple-500/70 to-cyan-500/70 hover:from-purple-600/90 hover:to-cyan-600/90
                              transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2
                              shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-cyan-500/40">
                  <span>View Live Demo</span>
                  <span className="text-lg">→</span>
                </a>
              </div>
            </GalaxyCard>

            {/* Travel Pal */}
            <GalaxyCard icon={Code} title="Travel Pal">
              <ImageCarousel
                images={[
                  "/images/travel-pal-1.png",
                  "/images/travel-pal-2.png"
                ]}
                alt="Travel Pal"
              />

              <p className="text-gray-200 mb-6">
                A smart travel planner that generates personalized, eco-friendly itineraries using AI, real-time data, and a clean, responsive dashboard
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="tag-shimmer bg-purple-400/20 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm hover:bg-purple-400/30 transition-all duration-300 hover:scale-105">React</span>
                <span className="tag-shimmer bg-cyan-400/20 text-cyan-200 px-3 py-1 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm hover:bg-cyan-400/30 transition-all duration-300 hover:scale-105">API Integration</span>
                <span className="tag-shimmer bg-pink-400/20 text-pink-200 px-3 py-1 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm hover:bg-pink-400/30 transition-all duration-300 hover:scale-105">Travel Tech</span>
              </div>

              <div className="flex gap-4">
                <a href="https://travelpal-taupe.vercel.app/" target="_blank" rel="noopener noreferrer"
                   className="group relative px-6 py-3 rounded-lg font-semibold text-sm
                              bg-gradient-to-r from-purple-500/70 to-cyan-500/70 hover:from-purple-600/90 hover:to-cyan-600/90
                              transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2
                              shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-cyan-500/40">
                  <span>View Live Demo</span>
                  <span className="text-lg">→</span>
                </a>
              </div>
            </GalaxyCard>

          </div>
        </div>
      </section>


      {/* Involvement Section */}
      <section id="involvement" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Leadership & Involvement
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <GalaxyCard icon={Users} title="Vice President - Society of Computer and Information Sciences">
              <ul className="text-gray-200 mb-6 space-y-2 list-disc list-inside">
                <li>Leading initiatives to foster community among computer science students at the University of Guelph</li>
                <li>Organizing events, workshops, and networking opportunities to enhance the academic experience</li>
                <li>Collaborating with faculty and students to improve the CS program and student engagement</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <span className="tag-shimmer bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm hover:bg-purple-400/30 transition-all duration-300 hover:scale-105">Leadership</span>
                <span className="tag-shimmer bg-cyan-400/20 text-cyan-200 px-4 py-2 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm hover:bg-cyan-400/30 transition-all duration-300 hover:scale-105">Event Planning</span>
                <span className="tag-shimmer bg-pink-400/20 text-pink-200 px-4 py-2 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm hover:bg-pink-400/30 transition-all duration-300 hover:scale-105">Community Building</span>
              </div>
            </GalaxyCard>


            <GalaxyCard icon={Code} title="Member - Google Developer Student Club">
              <ul className="text-gray-200 mb-6 space-y-2 list-disc list-inside">
                <li>Actively participating in Google's developer community and engaging with cutting-edge technologies</li>
                <li>Partook in the hackathon, collaborating with teams to build innovative solutions</li>
                <li>Attending workshops and tech talks on Google Cloud, Firebase, and Android development</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <span className="tag-shimmer bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm hover:bg-purple-400/30 transition-all duration-300 hover:scale-105">Google Technologies</span>
                <span className="tag-shimmer bg-cyan-400/20 text-cyan-200 px-4 py-2 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm hover:bg-cyan-400/30 transition-all duration-300 hover:scale-105">Developer Community</span>
              </div>
            </GalaxyCard>


            <GalaxyCard icon={Award} title="Thryve AI Ambassador - University of Guelph">
              <ul className="text-gray-200 mb-6 space-y-2 list-disc list-inside">
                <li>Representing the university's AI initiatives and promoting awareness of artificial intelligence applications</li>
                <li>Helping bridge the gap between academic AI research and practical implementation</li>
                <li>Mentoring students interested in AI and machine learning projects</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <span className="tag-shimmer bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm hover:bg-purple-400/30 transition-all duration-300 hover:scale-105">Artificial Intelligence</span>
                <span className="tag-shimmer bg-cyan-400/20 text-cyan-200 px-4 py-2 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm hover:bg-cyan-400/30 transition-all duration-300 hover:scale-105">Advocacy</span>
                <span className="tag-shimmer bg-pink-400/20 text-pink-200 px-4 py-2 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm hover:bg-pink-400/30 transition-all duration-300 hover:scale-105">Research</span>
              </div>
            </GalaxyCard>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-200 mb-12">
           I love chatting about new opportunities, cool projects, or anything tech-related, so feel free to reach out!
          </p>
          <div className="flex justify-center gap-8">
            <a href="shelly.normatov@gmail.com"
               className="flex items-center gap-3 bg-gradient-to-r from-purple-500/60 to-cyan-500/60 hover:from-purple-600/80 hover:to-cyan-600/80
                          px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105
                          shadow-lg shadow-purple-500/25 backdrop-blur-sm border border-purple-300/20">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/shellynormatov/"
               className="flex items-center gap-3 border border-purple-300/40 hover:border-purple-300/60 px-8 py-4 rounded-full
                          font-semibold transition-all duration-300 hover:bg-purple-500/20 backdrop-blur-sm">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/shell-mp3"
               className="flex items-center gap-3 border border-cyan-300/40 hover:border-cyan-300/60 px-8 py-4 rounded-full
                          font-semibold transition-all duration-300 hover:bg-cyan-500/20 backdrop-blur-sm">
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-purple-300/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300">
            © 2025 Shelly Normatov. Built with React, JS, and a lot of ☕
          </p>
        </div>
      </footer>
    </div>
  );
}
