


const Banner = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="text-center px-6 max-w-3xl">

        {/* Greeting */}
        <h3 className="text-lg md:text-xl text-indigo-400 mb-3 animate-pulse">
          Hello, I'm
        </h3>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="text-indigo-500">Rezwana</span> Sharmin
        </h1>

        {/* Role */}
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
          Full stack Web Developer
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-8 leading-relaxed">
          I design and develop responsive, user-friendly websites using
          React, Tailwind CSS, and JavaScript.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition-all duration-300 hover:scale-105">
            Hire Me
          </button>

          <button className="px-6 py-3 border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-lg font-medium transition-all duration-300 hover:scale-105">
            Download CV
          </button>
        </div>

      </div>
    </section>
  );
};

export default Banner;