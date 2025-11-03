const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
              ABOUT ME
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Experiences</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-300 leading-relaxed">
            I'm a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> with expertise in creating modern, 
            scalable, and user-friendly web applications. With a strong foundation in both frontend and backend technologies, 
            I transform complex problems into intuitive, innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Frontend Developer Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="flex items-center mb-6">
              <div className="text-3xl mr-4 text-blue-400">🎨</div>
              <h3 className="text-2xl font-bold">Frontend Developer</h3>
            </div>
            <p className="text-gray-300 mb-6">
              I create responsive, visually appealing, and highly interactive web interfaces using modern technologies and best practices.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">HTML5</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">CSS3</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Tailwind CSS</span>
            </div>
          </div>
          
          {/* Backend Developer Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="flex items-center mb-6">
              <div className="text-3xl mr-4 text-blue-400">⚙️</div>
              <h3 className="text-2xl font-bold">Backend Developer</h3>
            </div>
            <p className="text-gray-300 mb-6">
              I design and implement secure, scalable backend systems with efficient APIs, database optimization, and seamless integration.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Express</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">MongoDB</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">REST APIs</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">JWT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;