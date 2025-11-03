const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Together</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="mailto:salihva777@gmail.com" 
              className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 group"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-400 text-center">salihva777@gmail.com</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mohamedsalihva" 
              className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 group"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-center">Connect with me</p>
            </a>
            
            <a 
              href="https://github.com/mohamedsalihva" 
              className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 group"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-gray-400 text-center">View my work</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;