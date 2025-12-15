import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ZoomIn from "../../../animation/ZoomIn";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <ZoomIn>
        <div className="container py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Left */}
            <div className="text-center md:text-left">
              <p className="text-slate-300 text-sm">
                © {new Date().getFullYear()}{" "}
                <span className="font-medium text-slate-100">
                  Rezwana sharmin
                </span>. All rights reserved.
              </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/rezwanasharmin"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md
                         border border-white/10 text-slate-300
                         hover:text-amber-400 hover:border-amber-400/40
                         transition duration-300 hover:bg-slate-900"
              >
                <FaGithub />
              </a>




            </div>
          </div>
        </div>
      </ZoomIn>
    </footer>
  );
};

export default Footer;
