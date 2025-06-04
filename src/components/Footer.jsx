import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white pt-4 pb-1 px-4 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left Section: Company Info */}
        <div className="flex flex-col md:w-2/3 gap-3">
          <h2 className="text-2xl font-extrabold tracking-tight mb-1">
            S.S. Medical Systems (India) Pvt. Ltd.
          </h2>
          <div className="text-sm opacity-90 space-y-1">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-lg text-[#cbe6ff]">location_on</span>
              <span>
                Thapar House, Park Road, Opposite Civil Hospital, Lucknow, 226010, India
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-[#cbe6ff]">call</span>
              <a href="tel:+915222231234" className="underline hover:text-[#cbe6ff] transition">+91-522-2231234</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-[#cbe6ff]">mail</span>
              <a href="mailto:info@ssmedworld.com" className="underline hover:text-[#cbe6ff] transition">info@ssmedworld.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg text-[#cbe6ff]">public</span>
              <span>
                Website:{" "}
                <a
                  href="https://www.ssmedworld.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#cbe6ff] transition"
                >
                  www.ssmedworld.com
                </a>
                {" "}(
                <a
                  href="https://www.medical-xprt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#cbe6ff] transition"
                >
                  medical-xprt.com
                </a>
                )
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Quick Links & Social */}
        <div className="flex flex-col md:w-1/3 gap-1">
          {/* Quick Links */}
          <div>
            <h6 className="text-base font-bold mb-1">Quick Links</h6>
            <ul className="opacity-90 space-y-0.5">
              <li>
                <a href="/" className="btn btn-link px-0 text-left text-white hover:text-[#cbe6ff] no-underline">Home</a>
              </li>
              <li>
                <a href="/about" className="btn btn-link px-0 text-left text-white hover:text-[#cbe6ff] no-underline">About Us</a>
              </li>
              <li>
                <a href="/products" className="btn btn-link px-0 text-left text-white hover:text-[#cbe6ff] no-underline">Products</a>
              </li>
              <li>
                <a href="/contact" className="btn btn-link px-0 text-left text-white hover:text-[#cbe6ff] no-underline">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h6 className="text-base font-bold mb-1">Follow Us</h6>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/ssmsipl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="btn btn-circle btn-outline border-white text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ssmedworld/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="btn btn-circle btn-outline border-white text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
              </a>
              <a
                href="https://www.facebook.com/ssmsipl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="btn btn-circle btn-outline border-white text-white hover:bg-[#1877f3] hover:border-[#1877f3] transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.733-.593-1.325-1.324-1.325z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-2 border-t border-white/20 pt-1 text-center text-gray-100 text-xs">
        <p>
          © 2025 <span className="font-semibold">S.S. Medical Systems (India) Pvt. Ltd.</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;