import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { label: "Home", to: "top" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const OFFSET = -65;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
        <div className="container flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            to="top"
            smooth
            duration={500}
            offset={OFFSET}
            className="cursor-pointer font-semibold text-lg block "
          >
           Rezwana Sharmin
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={OFFSET}
                activeClass="text-cyan-400"
                activeStyle={{ color: '#22D3EE' }}
                className="cursor-pointer text-sm text-slate-300 hover:text-slate-100 transition select-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile */}
          <button
            onClick={() => setOpen(true)}
            className="text-3xl lg:hidden! px-3 py-2"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 transition ${open ? "opacity-100" : "opacity-0"}`}
        />

        <aside
          ref={drawerRef}
          className={`absolute left-0 top-0 h-full w-2/3 max-w-sm bg-slate-950 border-r border-white/10
          transition-transform ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex h-16 items-center justify-between px-4 border-b border-white/10">
            <Link
              to="top"
              smooth
              duration={500}
              offset={OFFSET}
              className="cursor-pointer font-semibold text-lg block w-8 ml-4"
            >
              <img className="w-full" src="./logo.webp" alt="Logo" />
            </Link>
            <button onClick={() => setOpen(false)} className="text-3xl px-3 py-2">
              <FiX />
            </button>
          </div>

          <nav className="px-4 py-6 flex flex-col ">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy
                smooth
                duration={500}
                offset={OFFSET}
                onClick={() => setOpen(false)}
                activeStyle={{ color: "#22D3EE" }}
                className="
        cursor-pointer
        rounded-xl
        px-4 py-1
        text-slate-200
        hover:text-slate-100
        transition
        select-none
      "
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </aside>
      </div>
    </>
  );
};

export default Navbar;
