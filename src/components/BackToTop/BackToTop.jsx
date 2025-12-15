import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiArrowUp } from "react-icons/fi";

const OFFSET = -72;

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <Link
        to="top"
        smooth
        duration={800}
        offset={OFFSET}
        className="
          flex h-11 w-11 items-center justify-center
          rounded-md
          bg-slate-900/80 backdrop-blur
          border border-white/10
          text-cyan-400
          hover:bg-slate-800
          hover:text-cyan-300
          cursor-pointer
          transition
        "
      >
        <FiArrowUp />
      </Link>
    </div>
  );
};

export default BackToTop;
