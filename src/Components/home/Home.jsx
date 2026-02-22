import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#0a0e1a" }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0e1a 0%, #0f1729 100%)" }}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #3b82f6 2px, #3b82f6 4px),
                             repeating-linear-gradient(90deg, transparent, transparent 2px, #3b82f6 2px, #3b82f6 4px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" 
                 style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)" }}>
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm text-blue-300 font-medium">Advanced Cyber Threat Detection</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{
              background: "linear-gradient(135deg, #60a5fa 0%, #93c5fd 50%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Realtime Network Intrusion Detection
            </h1>

            <p className="text-xl lg:text-1xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Detects attacks live, visualize geolocation, explain why traffic is flagged - production-ready demos with ML + explainability
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/register")}
                className="px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
                  color: "#0f1729",
                  boxShadow: "0 4px 20px rgba(59,130,246,0.4)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 30px rgba(59,130,246,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 20px rgba(59,130,246,0.4)";
                }}
              >
                Get Started Free
              </button>

              <button
                className="px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200"
                style={{
                  background: "transparent",
                  color: "#60a5fa",
                  border: "2px solid rgba(59,130,246,0.5)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(59,130,246,0.1)";
                  e.target.style.borderColor = "#60a5fa";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.borderColor = "rgba(59,130,246,0.5)";
                }}
              >
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">160</div>
                <div className="text-gray-400 text-sm">Attacks Detected</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Protection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Security Features</h2>
            <p className="text-gray-400 text-lg">Comprehensive protection for your entire infrastructure</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Real-time Detection",
                description: "Stream flows continuously and detect suspicious activity with millisecond latency"
              },
              {
                icon: "🤖",
                title: "AI-Powered Detection",
                description: "Machine learning algorithms identify threats before they strike"
              },
              {
                icon: "📊",
                title: "Explainable AI",
                description: "Shap-based explanation show which features drove a decision for each flagged flow"
              },
              {
                icon: "⚡",
                title: "Instant Alerts",
                description: "Get notified immediately when suspicious activity is detected"
              },
              {
                icon: "🗺️",
                title: "Geo Intelligence",
                description: "Map attack origins using MaxMind GeoLite2 - visualize global attack patterns live"
              },
              {
                icon: "📈",
                title: "Threat Prediction",
                description: "Predictive analysis helps prevent future security breaches"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl transition-all duration-300 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(37,99,235,0.02))",
                  border: "1px solid rgba(59,130,246,0.2)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(59,130,246,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4" style={{ background: "rgba(15,23,41,0.5)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How Kavach Works</h2>
            <p className="text-gray-400 text-lg">Simple setup, powerful protection</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Traffic Ingestion", desc:"CICIDS dataset traffic is replayed in real time through a generator engine." },
              { step: "02", title: "Real-Time Analysis", desc: "Incoming network flows are processed and analyzed using machine learning models." },
              { step: "03", title: "Detection & Explainability", desc: "Attack scores are computed and explained using SHAP-based feature importance." },
              { step: "04", title: "Visualization & Insights", desc: "Detected threats and performance metrics are displayed on live dashboards." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
                    color: "#0f1729"
                  }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="p-12 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(37,99,235,0.05))",
              border: "1px solid rgba(59,130,246,0.3)"
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Secure Your Business?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Join thousands of companies trusting Kavach for their cybersecurity needs
            </p>
            <button
              onClick={() => navigate("/register")}
              className="px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
                color: "#0f1729",
                boxShadow: "0 4px 20px rgba(59,130,246,0.4)"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 30px rgba(59,130,246,0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 20px rgba(59,130,246,0.4)";
              }}
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t" style={{ borderColor: "rgba(59,130,246,0.2)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Kavach</h4>
              <p className="text-gray-400 text-sm">Advanced cybersecurity for modern businesses</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-blue-400 cursor-pointer">Features</li>
                <li className="hover:text-blue-400 cursor-pointer">Pricing</li>
                <li className="hover:text-blue-400 cursor-pointer">Security</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-blue-400 cursor-pointer">About</li>
                <li className="hover:text-blue-400 cursor-pointer">Blog</li>
                <li className="hover:text-blue-400 cursor-pointer">Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-blue-400 cursor-pointer">Help Center</li>
                <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                <li className="hover:text-blue-400 cursor-pointer">Status</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm pt-8 border-t" style={{ borderColor: "rgba(59,130,246,0.2)" }}>
            © 2026 Kavach. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;