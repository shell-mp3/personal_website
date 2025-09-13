import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Users, Award, Briefcase } from 'lucide-react';


const FloatingPlanet = ({ children, delay = 0, size = 'w-20 h-20', color = 'from-purple-500/30 to-cyan-500/30' }) => {
  const orbitStyle = {
    animation: `orbit 20s linear infinite, float 8s ease-in-out infinite`,
    animationDelay: `${delay}s, ${delay * 0.5}s`
  };


  return (
    <div
      className={`${size} rounded-full bg-gradient-to-br ${color}
                 backdrop-blur-md border border-white/10 flex items-center justify-center
                 shadow-2xl relative overflow-hidden`}
      style={orbitStyle}
    >
      {/* Planet surface texture */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-white/20"></div>
      <div className="absolute bottom-3 right-3 w-1 h-1 rounded-full bg-white/30"></div>
      
      <div className="text-white/90 font-mono text-sm font-bold z-10">
        {children}
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

const SpaceBackground = () => {
  return (
    <>
      {/* Starfield */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-px h-px bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* MODIFIED: Glowing Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 1.5 + 0.5; // Orbs are now smaller (0.5px to 2px)
          return (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full bg-cyan-300/20" // Made orb core more transparent
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animation: `glow ${6 + Math.random() * 8}s ease-in-out infinite, float ${10 + Math.random() * 10}s ease-in-out infinite`, // Slower glow animation
                animationDelay: `${Math.random() * 8}s, ${Math.random() * 8}s`
              }}
            />
          );
        })}
      </div>


      {/* Floating Planets */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20">
          <FloatingPlanet delay={0} size="w-24 h-24" color="from-orange-500/40 to-red-500/40">JS</FloatingPlanet>
        </div>
        <div className="absolute top-40 right-32">
          <FloatingPlanet delay={2} size="w-20 h-20" color="from-blue-500/40 to-cyan-500/40">PY</FloatingPlanet>
        </div>
        <div className="absolute top-60 left-1/4">
          <FloatingPlanet delay={4} size="w-16 h-16" color="from-green-500/40 to-emerald-500/40">C++</FloatingPlanet>
        </div>
        <div className="absolute bottom-40 right-20">
          <FloatingPlanet delay={1} size="w-28 h-28" color="from-purple-500/40 to-pink-500/40">Java</FloatingPlanet>
        </div>
        <div className="absolute bottom-60 left-16">
          <FloatingPlanet delay={3} size="w-32 h-32" color="from-cyan-400/40 to-blue-600/40">C</FloatingPlanet>
        </div>
        <div className="absolute top-1/3 right-1/4">
          <FloatingPlanet delay={5} size="w-20 h-20" color="from-yellow-500/40 to-orange-500/40">HTML</FloatingPlanet>
        </div>
        <div className="absolute bottom-1/3 left-1/3">
          <FloatingPlanet delay={2.5} size="w-14 h-14" color="from-indigo-500/40 to-purple-600/40">CSS</FloatingPlanet>
        </div>
        
        {/* Additional cosmic elements */}
        <div className="absolute top-1/2 left-10">
          <FloatingPlanet delay={6} size="w-12 h-12" color="from-pink-400/30 to-rose-500/30">AI</FloatingPlanet>
        </div>
        <div className="absolute top-3/4 right-1/3">
          <FloatingPlanet delay={4.5} size="w-12 h-12" color="from-violet-500/30 to-purple-700/30">ML</FloatingPlanet>
        </div>
      </div>


      {/* Nebula effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl opacity-40"
             style={{animation: 'pulse 6s ease-in-out infinite'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full filter blur-3xl opacity-40"
             style={{animation: 'pulse 6s ease-in-out infinite', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-pink-600/5 rounded-full filter blur-3xl opacity-30"
             style={{animation: 'pulse 6s ease-in-out infinite', animationDelay: '4s'}}></div>
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
      @keyframes orbit {
        0% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(30px, -20px) rotate(90deg); }
        50% { transform: translate(0, -40px) rotate(180deg); }
        75% { transform: translate(-30px, -20px) rotate(270deg); }
        100% { transform: translate(0, 0) rotate(360deg); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-30px); }
      }
      @keyframes gentleGlow {
        0%, 100% { text-shadow: 0 0 10px #8b5cf6; }
        50% { text-shadow: 0 0 15px #06b6d4; }
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.7; }
      }
      /* NEW KEYFRAME FOR GLOWING ORBS */
      @keyframes glow {
        0%, 100% {
          box-shadow: 0 0 5px 2px rgba(107, 229, 255, 0.4);
        }
        50% {
          box-shadow: 0 0 10px 4px rgba(192, 132, 252, 0.6);
        }
      }
      .gentle-glow {
        animation: gentleGlow 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(styleSheet);
    
    setIsVisible(true);


    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white relative overflow-x-hidden">
      <SpaceBackground />
      
      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Shelly Normatov
          </div>
          <div className="flex gap-8 bg-black/20 backdrop-blur-lg rounded-full px-6 py-3 border border-white/10">
            <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
            <a href="#experience" className="hover:text-purple-300 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-purple-300 transition-colors">Projects</a>
            <a href="#involvement" className="hover:text-purple-300 transition-colors">Involvement</a>
            <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

{/* Hero Section */}
<section className="relative z-10 min-h-screen flex items-center justify-center px-6">
  <div
    className={`text-center transition-all duration-2000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
  >
    <h1 className="text-6xl md:text-8xl font-bold mb-6">
      <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent gentle-glow">
        Hey, I'm Shelly!
      </span>
    </h1>

    {/* Smaller font for subtitle */}
    <h2 className="text-xl md:text-2xl mb-6 text-gray-200">
      Computer Science Student @ University of Guelph
    </h2>

    {/* Smaller font for paragraph */}
    <p className="text-lg md:text-xl max-w-lg mx-auto mb-12 text-gray-300 leading-loose tracking-wide">
  Fell in love with <span className="text-purple-300">front-end development</span> back in high school.  
  Discovered the nuance of <span className="text-purple-300">back-end work</span>.  
  Now, I enjoy the challenge of <span className="text-purple-300">full-stack development</span>.
</p>

<p className="text-lg md:text-xl max-w-lg mx-auto mb-12 text-gray-300 leading-loose tracking-wide">
  I’m driven to keep growing and to create solutions that make life easier and more enjoyable.
</p>



    <div className="flex justify-center gap-6">
      <a
        href="#contact"
        className="bg-gradient-to-r from-purple-500/80 to-cyan-500/80 hover:from-purple-600/90 hover:to-cyan-600/90
                   px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105
                   shadow-lg shadow-purple-500/25 backdrop-blur-sm border border-purple-300/20"
      >
        Get In Touch
      </a>
      <a
        href="#projects"
        className="border border-purple-300/30 hover:border-purple-300/60 px-8 py-4 rounded-full
                   font-semibold transition-all duration-300 hover:bg-purple-500/20 backdrop-blur-sm"
      >
        View Projects
      </a>
    </div>

    <div className="mt-16" style={{ animation: 'float 3s ease-in-out infinite' }}>
      <ChevronDown size={32} className="mx-auto text-purple-300" />
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
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-purple-400/20 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-400/30 backdrop-blur-sm">AI/ML</span>
                <span className="bg-cyan-400/20 text-cyan-200 px-3 py-1 rounded-full text-sm border border-cyan-400/30 backdrop-blur-sm">Chatbot Development</span>
                <span className="bg-pink-400/20 text-pink-200 px-3 py-1 rounded-full text-sm border border-pink-400/30 backdrop-blur-sm">API Integration</span>
                <span className="bg-green-400/20 text-green-200 px-3 py-1 rounded-full text-sm border border-green-400/30 backdrop-blur-sm">Sustainability</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-2">
                  <Github size={20} />
                  Code
                </a>
                <a href="#" className="text-purple-300 hover:text-purple-200 transition-colors">Live Demo</a>
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