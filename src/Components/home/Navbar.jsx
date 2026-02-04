import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CyberIcon = () => (
  <svg viewBox="0 0 64 64" className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="12" y="12" width="40" height="40" rx="4" />
    <circle cx="32" cy="32" r="8" />
    <line x1="32" y1="12" x2="32" y2="24" />
    <line x1="32" y1="40" x2="32" y2="52" />
    <line x1="12" y1="32" x2="24" y2="32" />
    <line x1="40" y1="32" x2="52" y2="32" />
    <circle cx="32" cy="32" r="2" fill="currentColor" />
    <line x1="18" y1="18" x2="25" y2="25" opacity="0.5" />
    <line x1="39" y1="39" x2="46" y2="46" opacity="0.5" />
    <line x1="46" y1="18" x2="39" y2="25" opacity="0.5" />
    <line x1="25" y1="39" x2="18" y2="46" opacity="0.5" />
  </svg>
);

const navLinks = ["Home", "Features", "Tools", "Team", "Prediction", "Analysis"];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className="relative z-50"
      style={{
        background: "linear-gradient(180deg, #0f1729 0%, #111a2e 100%)",
        borderBottom: "1px solid rgba(59,130,246,0.15)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, #3b82f6 30%, #60a5fa 50%, #3b82f6 70%, transparent 100%)",
        }}
      />

      <div className="max-w-10xl mx-5 px-4">
        <div className="flex items-center justify-between" style={{ height: "72px" }}>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center rounded-lg"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.08))",
                border: "1px solid rgba(59,130,246,0.25)",
                padding: "6px",
              }}
            >
              <CyberIcon />
            </div>
            <span
              className="font-bold tracking-wide"
              style={{
                fontSize: "26px",
                background: "linear-gradient(135deg, #60a5fa, #93c5fd 50%, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Kavach
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveLink(link); }}
                className="relative px-4 py-2 text-sm font-medium transition-all duration-200"
                style={{
                  color: activeLink === link ? "#93c5fd" : "#94a3b8",
                  borderRadius: "6px",
                  background: activeLink === link ? "rgba(59,130,246,0.1)" : "transparent",
                }}
                onMouseEnter={(e) => { if (activeLink !== link) { e.target.style.color="#cbd5e1"; e.target.style.background="rgba(59,130,246,0.06)"; }}}
                onMouseLeave={(e) => { if (activeLink !== link) { e.target.style.color="#94a3b8"; e.target.style.background="transparent"; }}}
              > 
                {link}
                {activeLink === link && (
                  <span className="absolute left-1/2" style={{ transform:"translateX(-50%)", width:"24px", height:"2px", background:"#3b82f6", borderRadius:"2px", bottom:"0px" }} />
                )}
              </a>
            ))}

            <button
              onClick={() => navigate("/login")}
              className="ml-4 font-semibold text-sm transition-all duration-200"
              style={{ padding:"7px 22px", borderRadius:"6px", color:"#0f1729", background:"linear-gradient(135deg,#60a5fa,#3b82f6)", border:"none", cursor:"pointer", boxShadow:"0 2px 10px rgba(59,130,246,0.35)" }}
              onMouseEnter={(e) => { e.target.style.background="linear-gradient(135deg,#93c5fd,#60a5fa)"; e.target.style.boxShadow="0 4px 16px rgba(59,130,246,0.5)"; e.target.style.transform="translateY(-1px)"; }}
              onMouseLeave={(e) => { e.target.style.background="linear-gradient(135deg,#60a5fa,#3b82f6)"; e.target.style.boxShadow="0 2px 10px rgba(59,130,246,0.35)"; e.target.style.transform="translateY(0)"; }}
            >
              Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden flex flex-col justify-center items-center w-10 h-10" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="block transition-all duration-300" style={{ width:"22px", height:"2px", background:"#60a5fa", borderRadius:"2px", marginBottom:"5px", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span className="block transition-all duration-300" style={{ width:"22px", height:"2px", background:"#60a5fa", borderRadius:"2px", marginBottom:"5px", opacity: menuOpen ? 0 : 1 }} />
            <span className="block transition-all duration-300" style={{ width:"22px", height:"2px", background:"#60a5fa", borderRadius:"2px", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4" style={{ borderTop:"1px solid rgba(59,130,246,0.1)", background:"rgba(15,23,41,0.95)" }}>
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <a key={link} href="#" onClick={(e) => { e.preventDefault(); setActiveLink(link); setMenuOpen(false); }}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                style={{ color: activeLink===link ? "#93c5fd" : "#94a3b8", background: activeLink===link ? "rgba(59,130,246,0.1)" : "transparent" }}>
                {link}
              </a>
            ))}
            <button onClick={() => { navigate("/login"); setMenuOpen(false); }} className="mt-3 w-full font-semibold text-sm" style={{ padding:"10px", borderRadius:"6px", color:"#0f1729", background:"linear-gradient(135deg,#60a5fa,#3b82f6)", border:"none", cursor:"pointer", boxShadow:"0 2px 10px rgba(59,130,246,0.35)" }} >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}