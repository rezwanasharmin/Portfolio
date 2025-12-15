import { FiExternalLink, FiGithub, FiCheck } from "react-icons/fi";
import projects from "./projects.data";
import { FaGithub } from "react-icons/fa";
import FadeUp from "../../animation/FadeUp";
import ZoomIn from "../../animation/ZoomIn";

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-900/50 py-20">
      <div className="container">
        {/* Heading */}
        <ZoomIn>
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-grotesk font-semibold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto lg:mx-0">
            Selected projects highlighting real-world frontend and full-stack experience.
          </p>
        </div>
        </ZoomIn>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => {
            const reverse = index % 2 === 0;
            return (
              <ZoomIn>
                <div
                  key={index}
                  className={`group overflow-hidden
                  flex flex-col lg:flex-row
                  ${reverse ? "lg:flex-row-reverse" : ""}
                  rounded-2xl
                  bg-slate-950/60
                  border border-white/10
                  hover:border-cyan-400/30
                  transition`}
                >
                  {/* Image (no padding) */}
                  <div className="w-full lg:w-1/2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full 
                               object-cover
                               transition-transform duration-500
                               group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-xl font-grotesk font-semibold text-slate-100">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-5 space-y-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <FiCheck className="mt-0.5 text-cyan-400 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs
                                   bg-slate-800/60 text-slate-200
                                   border border-white/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-7 flex items-center gap-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-sm btn-primary inline-flex items-center gap-2"
                      >
                        <FiExternalLink />
                        Live
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-sm btn-outline inline-flex items-center gap-2"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </ZoomIn>

            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
