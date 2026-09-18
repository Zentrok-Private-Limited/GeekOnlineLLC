import React from "react";
import {
  FaPhone,
  FaMapPin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

function Footer() {
  return (
    <div>
      {/* ================= FOOTER ================= */}
      <footer className="bg-amber-800 text-white border-t border-amber-100 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="font-black text-lg text-slate-50 border-b-2 border-amber-600 inline-block pb-1">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs font-medium text-slate-50">
              <li>
                <a
                  href="/expert-tech-support"
                  className="hover:text-amber-100"
                >
                  Expert Tech Support
                </a>
              </li>
              <li>
                <a
                  href="/it-support-for-businesses"
                  className="hover:text-amber-100"
                >
                  IT Support for Businesses
                </a>
              </li>
              <li>
                <a
                  href="/consultancy-and-advisory-services"
                  className="hover:text-amber-100"
                >
                  Consultancy & Advisory
                </a>
              </li>
              <li>
                <a
                  href="/cybersecurity-services"
                  className="hover:text-amber-100"
                >
                  Cybersecurity Services
                </a>
              </li>
              <li>
                <a
                  href="/website-design-and-development"
                  className="hover:text-amber-100"
                >
                  Website Design & Dev
                </a>
              </li>
              <li>
                <a
                  href="/digital-marketing-services"
                  className="hover:text-amber-100"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 flex flex-col items-center justify-center text-center space-y-4 border-y md:border-y-0 md:border-x border-slate-200/60 py-6 md:py-0 px-4">
            <img
              src="/logo.png"
              alt="logo"
              className="h-35 w-auto object-contain"
            />
            <p className="text-xs text-slate-200 max-w-sm leading-relaxed">
              Offering 24/7 assistance, we specialize in troubleshooting,
              network setup, cybersecurity, and more, ensuring smooth
              operational metrics.
            </p>
          </div>

          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="font-black text-lg text-slate-50 border-b-2 border-amber-600 inline-block pb-1">
              Legal Info
            </h3>
            <ul className="space-y-2 text-xs font-medium text-slate-100">
              <li>
                <a href="/Disclaimer" className="hover:text-amber-300 transition">
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="/TermsandConditions"
                  className="hover:text-amber-300 transition"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/PrivacyPolicy"
                  className="hover:text-amber-300 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/RefundPolicy"
                  className="hover:text-amber-300 transition"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Contact Stripe */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 border-t border-slate-200/80 pt-8 text-xs text-slate-600">
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <FaMapPin size={14} />
            </div>
            <div>
              <span className="block text-slate-800 font-medium text-[10px]">
                Address
              </span>
              <span className="font-bold text-slate-800">
                212 N. 2nd St. STE 100, Richmond, KY 40475
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <FiSend size={14} />
            </div>
            <div>
              <span className="block text-slate-800 font-medium text-[10px]">
                Say Hello
              </span>
              <span className="font-bold text-amber-600 underline">
                billing@geekonlinellc.com
              </span>
            </div>
          </div>
        </div>
        {/* Copyright Row */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-200/40 text-[11px] text-slate-100 font-medium">
          <p>© 2026 GEEK ONLINE LLC All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;