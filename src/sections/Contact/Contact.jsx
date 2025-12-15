import React from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import FadeUp from "../../animation/FadeUp";
import ZoomIn from "../../animation/ZoomIn";

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950 py-24">
      <div className="container">
        {/* Heading */}
        <ZoomIn>
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-grotesk font-semibold">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl mx-auto lg:mx-0">
              Let’s discuss your project or just say hello. I’m always open to new opportunities.
            </p>
          </div>
        </ZoomIn>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT : Contact Info Card */}
          <ZoomIn>
            <div className="h-full rounded-2xl bg-slate-900/60 border border-white/10 p-8 lg:p-10 flex flex-col justify-between">

              <div>
                <h3 className="text-xl font-grotesk font-semibold text-slate-100">
                  Contact Information
                </h3>
                <p className="mt-3 text-slate-300 max-w-md">
                  You can reach me directly through the details below. I usually respond within 24 hours.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md
                                 bg-slate-800/60 border border-white/10
                                 text-cyan-400">
                    <FiMail />
                  </span>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-slate-100">rezwanasharmin85@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md
                                 bg-slate-800/60 border border-white/10
                                 text-cyan-400">
                    <FiPhone />
                  </span>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="text-slate-100">+8801312398893</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md
                                 bg-slate-800/60 border border-white/10
                                 text-cyan-400">
                    <FiMapPin />
                  </span>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="text-slate-100">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <p className="mt-10 text-sm text-slate-400">
                Available for freelance & full-time opportunities.
              </p>
            </div>
          </ZoomIn>

          {/* RIGHT : Form Card */}
          <ZoomIn>
            <form
              className="h-full rounded-2xl bg-slate-900/60 border border-white/10
                       p-8 lg:p-10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-grotesk font-semibold text-slate-100">
                  Send a Message
                </h3>
                <p className="mt-3 text-slate-300">
                  Fill out the form and I’ll get back to you as soon as possible.
                </p>

                <div className="mt-8 space-y-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-md bg-slate-800/60 border border-white/10
                             px-4 py-3 text-slate-100 placeholder-slate-400
                             focus:outline-none focus:border-cyan-400/50"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-md bg-slate-800/60 border border-white/10
                             px-4 py-3 text-slate-100 placeholder-slate-400
                             focus:outline-none focus:border-cyan-400/50"
                  />

                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full rounded-md bg-slate-800/60 border border-white/10
                             px-4 py-3 text-slate-100 placeholder-slate-400
                             focus:outline-none focus:border-cyan-400/50 resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-8 inline-flex items-center gap-2"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </ZoomIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
