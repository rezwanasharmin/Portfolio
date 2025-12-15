
// ✅ import path change if needed

import ZoomIn from "../../animation/ZoomIn";
import MarqueeRow from "./MarqueeRow";
import './Skills.css'
const Skills = () => {
  const frontend = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "React Router", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" },
    { name: "Context API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
    { name: "TanStack Query", icon: "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg" },
    { name: "React Hook Form", icon: "https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg" },
  ];

  const backend = [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
    { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" },
  ];

  const tools = [
    { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "Chrome DevTools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" }
  ];

  return (
    <section id="skills" className="bg-slate-950 py-20">
      <ZoomIn>
      <div className="container">
        {/* Heading */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-grotesk font-semibold">
            Skills & <span className="text-cyan-400">Tools</span>
          </h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto lg:mx-0">
            A quick overview of the technologies and tools I work with.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-14">
          {/* Frontend */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-5">
              <h3 className="text-lg font-grotesk font-medium text-slate-100">
                Frontend
              </h3>
              <div className="hidden sm:block h-px flex-1 bg-white/10"></div>
            </div>
            <MarqueeRow items={frontend} />
          </div>

          {/* Backend */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-5">
              <h3 className="text-lg font-grotesk font-medium text-slate-100">
                Backend
              </h3>
              <div className="hidden sm:block h-px flex-1 bg-white/10"></div>
            </div>
            <MarqueeRow items={backend} />
          </div>

          {/* Tools */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-5">
              <h3 className="text-lg font-grotesk font-medium text-slate-100">
                Tools & Workflow
              </h3>
              <div className="hidden sm:block h-px flex-1 bg-white/10"></div>
            </div>
            <MarqueeRow items={tools} />
          </div>
        </div>
      </div>
      </ZoomIn>
    </section>
  );
};

export default Skills;
