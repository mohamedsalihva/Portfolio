import salihImg from "../../assets/profile/salih.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 pt-16" id="home">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
                FULL-STACK DEVELOPER
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Mohamed Salih</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              I build modern web applications with <span className="text-blue-400 font-semibold">React</span> and <span className="text-blue-400 font-semibold">Node.js</span>
            </p>
            <p className="text-gray-400 mb-10 max-w-2xl">
              Creating seamless digital experiences with clean, efficient code. Let's bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-center shadow-lg shadow-blue-500/20"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-transparent border-2 border-blue-500 text-white font-medium rounded-lg hover:bg-blue-500/10 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 bg-gray-800">
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