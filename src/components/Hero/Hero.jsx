import salihImg from "../../assets/profile/salih.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900/20 to-blue-900/20 pt-16 pb-16 relative overflow-hidden" id="home">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="w-28 h-28 border border-cyan-400/40 rounded-2xl absolute top-24 left-[8%] rotate-12 animate-blob"></div>
        <div className="w-20 h-20 border border-blue-400/40 rounded-full absolute bottom-20 right-[10%] animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center lg:flex-row justify-center gap-12 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight depth-2">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Mohamed Salih</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl mx-auto lg:mx-0 depth-1">
              I build modern web applications with <span className="text-blue-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">Node.js</span>, and <span className="text-blue-400 font-semibold">MongoDB</span>.
            </p>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 depth-1">
              Creating seamless digital experiences with clean, efficient code, containerized deployment, and immersive UI motion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-center shadow-lg shadow-blue-500/20 depth-2"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-blue-500 text-white font-medium rounded-lg hover:bg-blue-500/10 transition-all duration-300 text-center depth-2"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-1 flex justify-center tilt-card">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-xl opacity-30 animate-pulse depth-1"></div>
              <div className="absolute -inset-8 rounded-full border border-cyan-400/25 animate-spin depth-1"></div>
              <div className="relative w-60 h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white/10 bg-gray-800 depth-3">
                <img 
                  src={salihImg} 
                  alt="Mohamed Salih" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
