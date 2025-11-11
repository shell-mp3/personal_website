import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Users, Award, Briefcase } from 'lucide-react';


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
    <div className={`bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg rounded-3xl p-8
                       border border-purple-300/10 hover:border-purple-300/30 transition-all duration-500
                       hover:shadow-2xl hover:shadow-purple-500/20 group hover:scale-[1.02] ${className}`}>
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border border-cyan-300/20">
          <Icon className="text-cyan-300 group-hover:text-cyan-200 transition-colors" size={24} />
        </div>
        <h3 className="text-xl font-semibold text-white/90">{title}</h3>
      </div>
      {children}
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
      .hero-glow {
        animation: heroGlow 4s ease-in-out infinite;
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
            <span className="text-cyan-400/90 font-mono">SN</span>
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
                I'm currently in my second year of Computer Science Honours Co-op at the University of Guelph,
                where I'm building a strong foundation in software development and computer systems.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                My passion lies in creating innovative technological solutions that make a real difference in people's lives.
                I believe technology should be a force for good, and I'm constantly exploring new ways to apply my skills
                to solve meaningful problems.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                When I'm not coding, you'll find me mentoring young learners, leading initiatives in tech communities,
                or staying up-to-date with the latest advancements in AI and software development.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl p-8 backdrop-blur-lg border border-purple-300/20">
              <h3 className="text-xl font-semibold mb-6 text-cyan-300">Current Focus</h3>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Full-stack web development
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  AI and machine learning applications
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  Community leadership and mentorship
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                  Innovative problem-solving through technology
                </li>
              </ul>
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
            <GalaxyCard icon={Briefcase} title="Marketing Sales Associate - Nike">
              <p className="text-gray-200 mb-6">
                Utilized CRM systems and data analytics to drive sales while managing customer relationships for Nike's premium brand.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm">CRM Systems</span>
                <span className="bg-cyan-400/20 text-cyan-200 px-4 py-2 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm">Data Analytics</span>
                <span className="bg-pink-400/20 text-pink-200 px-4 py-2 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm">Digital Marketing</span>
                <span className="bg-violet-400/20 text-violet-200 px-4 py-2 rounded-full text-sm border border-violet-400/30 backdrop-blur-sm">Customer Relations</span>
              </div>
            </GalaxyCard>

            <GalaxyCard icon={Code} title="Tech Coach - Vaughan Public Libraries (VPL)"> 
              <p className="text-gray-200 mb-6">
                Taught programming fundamentals including Python, JavaScript, and web development to help students learn how to code.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm">Python</span>
                <span className="bg-cyan-400/20 text-cyan-200 px-4 py-2 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm">JavaScript</span>
                <span className="bg-pink-400/20 text-pink-200 px-4 py-2 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm">Web Development</span>
                <span className="bg-violet-400/20 text-violet-200 px-4 py-2 rounded-full text-sm border border-violet-400/30 backdrop-blur-sm">Technical Mentoring</span>
              </div>
            </GalaxyCard>

            <GalaxyCard icon={Users} title="Math Tutor - Tutorax">
              <p className="text-gray-200 mb-6">
                Provided personalized mathematics tutoring to students, helping them understand complex concepts and improve academic performance.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm">Mathematics Education</span>
                <span className="bg-cyan-400/20 text-cyan-200 px-4 py-2 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm">Problem Solving</span>
                <span className="bg-pink-400/20 text-pink-200 px-4 py-2 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm">Tutoring</span>
                <span className="bg-violet-400/20 text-violet-200 px-4 py-2 rounded-full text-sm border border-violet-400/30 backdrop-blur-sm">Student Mentorship</span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GalaxyCard icon={Users} title="Student Incubator Platform">
              <p className="text-gray-200 mb-6">
                Developed frontend and supported backend data management for a University of Guelph platform matching students with professor volunteer positions via quiz system. Includes forum collaboration and hackathon features. Currently under faculty review.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-purple-400/20 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm">React</span>
                <span className="bg-cyan-400/20 text-cyan-200 px-3 py-1 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm">Node.js</span>
                <span className="bg-pink-400/20 text-pink-200 px-3 py-1 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm">Database Design</span>
                <span className="bg-violet-400/20 text-violet-200 px-3 py-1 rounded-full text-sm border border-violet-400/30 backdrop-blur-sm">Security</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-400 text-sm italic">*Under Faculty Review</span>
              </div>
            </GalaxyCard>

            <GalaxyCard icon={Code} title="EcoTravel AI Planner">
              <p className="text-gray-200 mb-6">
                AI chatbot that plans eco-friendly trips by analyzing user preferences and calculating carbon emissions for transportation and activities. Suggests environmentally sustainable alternatives for travel planning.
              </p>
<div className="flex gap-4">
  <button
    type="button"
    onClick={() => alert('Coming soon')}
    className="text-cyan-300 hover:text-cyan-200 transition-colors inline-flex items-center gap-2"
  >
    <Github size={20} aria-hidden="true" />
    <span>Code</span>
  </button>

  <button
    type="button"
    disabled
    className="text-purple-300/60 cursor-not-allowed inline-flex items-center gap-2"
    aria-disabled="true"
  >
    <span>Live</span>
  </button>
</div>

            </GalaxyCard>

            <GalaxyCard icon={Code} title="Coming Soon...">
              <p className="text-gray-200 mb-6">
                Currently working on an exciting new project that combines my passion for technology and community impact. 
                Stay tuned for updates on this innovative solution that aims to bridge the gap between cutting-edge technology and real-world applications.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-gradient-to-r from-purple-400/20 to-cyan-400/20 text-white px-3 py-1 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm">In Development</span>
                <span className="bg-pink-400/20 text-pink-200 px-3 py-1 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm">Innovation</span>
              </div>
              <div className="flex gap-4">
                <span className="text-cyan-300 text-sm">More details coming soon!</span>
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
          <div className="grid md:grid-cols-2 gap-8">
            <GalaxyCard icon={Users} title="Vice President - Society of Computer and Information Sciences">
              <p className="text-gray-200 mb-6">
                Leading initiatives to foster community among computer science students at the University of Guelph,
                organizing events, workshops, and networking opportunities to enhance the academic experience.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm">Leadership</span>
                <span className="bg-cyan-400/20 text-cyan-200 px-4 py-2 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm">Event Planning</span>
                <span className="bg-pink-400/20 text-pink-200 px-4 py-2 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm">Community Building</span>
              </div>
            </GalaxyCard>


            <GalaxyCard icon={Code} title="Member - Google Developer Student Club">
              <p className="text-gray-200 mb-6">
                Actively participating in Google's developer community, engaging with cutting-edge technologies,
                attending workshops, and collaborating on projects that leverage Google's developer tools and platforms.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm">Google Technologies</span>
                <span className="bg-cyan-400/20 text-cyan-200 px-4 py-2 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm">Developer Community</span>
              </div>
            </GalaxyCard>


            <GalaxyCard icon={Award} title="Thryve AI Ambassador - University of Guelph">
              <p className="text-gray-200 mb-6">
                Representing the university's AI initiatives, promoting awareness of artificial intelligence applications,
                and helping bridge the gap between academic AI research and practical implementation.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm">Artificial Intelligence</span>
                <span className="bg-cyan-400/20 text-cyan-200 px-4 py-2 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm">Advocacy</span>
                <span className="bg-pink-400/20 text-pink-200 px-4 py-2 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm">Research</span>
              </div>
            </GalaxyCard>


            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl p-8 border border-purple-300/20
                               hover:border-purple-300/40 transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-xl font-semibold text-white/90 mb-6">Other Involvements</h3>
              <p className="text-gray-200 mb-4">
                [Add any additional clubs, organizations, volunteer work, or community involvement here]
              </p>
              <div className="text-cyan-300 text-sm">
                Always looking for new opportunities to contribute and grow!
              </div>
            </div>
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
            I'm always excited to discuss new opportunities, innovative projects, or just connect with fellow tech enthusiasts!
          </p>
          <div className="flex justify-center gap-8">
            <a href="mailto:your.email@example.com"
               className="flex items-center gap-3 bg-gradient-to-r from-purple-500/60 to-cyan-500/60 hover:from-purple-600/80 hover:to-cyan-600/80
                          px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105
                          shadow-lg shadow-purple-500/25 backdrop-blur-sm border border-purple-300/20">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://linkedin.com/in/yourprofile"
               className="flex items-center gap-3 border border-purple-300/40 hover:border-purple-300/60 px-8 py-4 rounded-full
                          font-semibold transition-all duration-300 hover:bg-purple-500/20 backdrop-blur-sm">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/yourusername"
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
            © 2025 Shelly. Built with React and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
}