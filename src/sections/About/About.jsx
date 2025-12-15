import React from "react";
import FadeUp from "../../animation/FadeUp";
import ZoomIn from "../../animation/ZoomIn";

const About = () => {
  return (
    <section id="about" className="bg-slate-900/50 py-20">
      <ZoomIn>
      <div className="container">
        {/* Section Heading */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-grotesk font-semibold">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto lg:mx-0">
            A short introduction about who I am and what I do.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-slate-300 leading-relaxed">
              I’m a passionate frontend developer who enjoys building clean,
              responsive, and user-friendly web interfaces. I primarily work
              with <span className="text-slate-100">React</span> and{" "}
              <span className="text-slate-100">Tailwind CSS</span> to turn ideas
              and designs into functional web experiences.
            </p>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Alongside frontend development, I’m currently exploring the{" "}
              <span className="text-slate-100">MERN stack</span> to understand
              how modern full-stack applications are built, focusing on
              scalability and performance.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed">
              I enjoy working on real-world projects, continuously learning new
              technologies, and improving my problem-solving skills. My goal is
              to grow as a developer and contribute to meaningful products that
              provide real value to users.
            </p>

            <p className="text-slate-300 leading-relaxed">
              When I’m not coding, I like exploring new tools, improving my UI
              skills, and staying updated with modern web development trends.
            </p>
          </div>
        </div>
      </div>
      </ZoomIn>
    </section>
  );
};

export default About;
