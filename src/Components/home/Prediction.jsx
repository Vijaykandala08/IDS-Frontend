import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Prediction = () => {
  const [replaySpeed, setReplaySpeed] = useState(1);
  const [alphaValue, setAlphaValue] = useState(0.6);
  const [betaValue, setBetaValue] = useState(0.4);
  const [attackThreshold, setAttackThreshold] = useState(0.5);
  const [isReplaying, setIsReplaying] = useState(false);
  
  // Live alert feed data
  const [alerts, setAlerts] = useState([
    { id: 1, source: "115.153.231.41", target: "153.65.63.56", score: 0.138 },
    { id: 2, source: "95.232.249.232", target: "150.40.88.171", score: 0.138 },
    { id: 3, source: "75.138.92.47", target: "109.223.193.6", score: 0.138 },
    { id: 4, source: "20.34.57.186", target: "171.193.144.52", score: 0.138 },
    { id: 5, source: "84.164.245.40", target: "161.254.116.10", score: 0.138 },
    { id: 6, source: "190.192.207.83", target: "37.55.145.87", score: 0.138 },
    { id: 7, source: "56.181.57.29", target: "53.68.27.150", score: 0.138 },
    { id: 8, source: "142.108.209.129", target: "146.236.108.136", score: 0.138 },
    { id: 9, source: "84.200.79.70", target: "53.161.93.242", score: 0.138 },
  ]);

  // Attack statistics (last 60 seconds)
  const [attackStats, setAttackStats] = useState(
    Array(60).fill(0).map((_, i) => ({
      time: i,
      count: Math.floor(Math.random() * 10)
    }))
  );

  // Threat markers on map
  const [threatMarkers, setThreatMarkers] = useState([
    { id: 1, position: [40.7128, -74.0060], country: "USA" },
    { id: 2, position: [51.5074, -0.1278], country: "UK" },
    { id: 3, position: [35.6762, 139.6503], country: "Japan" },
  ]);

  const handleStartReplay = () => {
    setIsReplaying(!isReplaying);
  };

  const handleApplyParameters = () => {
    console.log("Applying parameters:", {
      alpha: alphaValue,
      beta: betaValue,
      threshold: attackThreshold
    });
    // Add your logic to apply parameters
  };

  return (
    <div className="min-h-screen" style={{ background: "#0a0e1a" }}>
      {/* Header */}
      <div className="px-8 py-6 border-b" style={{ borderColor: "rgba(59,130,246,0.2)" }}>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Realtime Dashboard</h1>
            <p className="text-gray-400">Live inference & geolocation</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Welcome, Hartwik!</span>
            <button
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 border-2"
              style={{
                borderColor: "#3b82f6",
                color: "#60a5fa",
                background: "transparent"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(59,130,246,0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
        {/* Left Side - Map */}
        <div className="lg:col-span-2 space-y-6">
          {/* Map Container */}
          <div className="rounded-xl p-6" style={{ background: "rgba(15,23,41,0.5)", border: "1px solid rgba(59,130,246,0.2)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">IP Geolocation Map</h2>
            <div className="rounded-lg overflow-hidden" style={{ height: "450px", background: "#1a1f2e" }}>
              <MapContainer
                center={[20, 0]}
                zoom={2}
                style={{ height: "100%", width: "100%" }}
                zoomControl={true}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {threatMarkers.map((marker) => (
                  <Marker key={marker.id} position={marker.position}>
                    <Popup>
                      <div className="text-sm">
                        <strong>Threat Detected</strong>
                        <br />
                        Location: {marker.country}
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          {/* Bottom Section - Live Feed and Chart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Live Alert Feed */}
            <div className="rounded-xl p-6" style={{ background: "rgba(15,23,41,0.5)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <h3 className="text-xl font-bold text-white mb-4">Live Alert Feed</h3>
              <div className="space-y-2 max-h-80 overflow-y-auto custom-scrollbar">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="p-3 rounded-lg text-xs font-mono"
                    style={{ background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.1)" }}
                  >
                    <span className="text-blue-400">[{alert.source}</span>
                    <span className="text-gray-400"> → </span>
                    <span className="text-blue-400">{alert.target}]</span>
                    <span className="text-gray-400"> Score: </span>
                    <span className="text-white">{alert.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Attacks Chart */}
            <div className="rounded-xl p-6" style={{ background: "rgba(15,23,41,0.5)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <h3 className="text-xl font-bold text-white mb-4">Attacks per Second (Last 60s)</h3>
              <div className="relative h-64">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400 pr-2">
                  <span>10</span>
                  <span>9</span>
                  <span>8</span>
                  <span>7</span>
                  <span>6</span>
                  <span>5</span>
                  <span>4</span>
                  <span>3</span>
                  <span>2</span>
                  <span>1</span>
                  <span>0</span>
                </div>
                
                {/* Chart area */}
                <div className="ml-6 h-full flex items-end gap-px">
                  {attackStats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t transition-all duration-300"
                      style={{
                        height: `${(stat.count / 10) * 100}%`,
                        background: "linear-gradient(180deg, #ef4444 0%, #dc2626 100%)",
                        minHeight: "2px"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - System Controls */}
        <div className="space-y-6">
          <div className="rounded-xl p-6" style={{ background: "rgba(15,23,41,0.5)", border: "1px solid rgba(59,130,246,0.2)" }}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">System Controls</h2>
              <span className="text-sm text-gray-400">Tune & replay</span>
            </div>

            {/* Replay Speed */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-3">
                Replay Speed: {replaySpeed}x
              </label>
              <input
                type="range"
                min="0.1"
                max="5"
                step="0.1"
                value={replaySpeed}
                onChange={(e) => setReplaySpeed(parseFloat(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((replaySpeed - 0.1) / 4.9) * 100}%, rgba(59,130,246,0.2) ${((replaySpeed - 0.1) / 4.9) * 100}%, rgba(59,130,246,0.2) 100%)`
                }}
              />
            </div>

            {/* Start Replay Button */}
            <button
              onClick={handleStartReplay}
              className="w-full py-4 rounded-lg font-bold text-lg mb-8 transition-all duration-200"
              style={{
                background: isReplaying ? "#10b981" : "#3b82f6",
                color: "#ffffff"
              }}
            >
              {isReplaying ? "Stop Replay" : "Start Replay"}
            </button>

            {/* Alpha Parameter */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-3">
                Alpha (Supervised): {alphaValue.toFixed(1)}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={alphaValue}
                onChange={(e) => setAlphaValue(parseFloat(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${alphaValue * 100}%, rgba(59,130,246,0.2) ${alphaValue * 100}%, rgba(59,130,246,0.2) 100%)`
                }}
              />
            </div>

            {/* Beta Parameter */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-3">
                Beta (Unsupervised): {betaValue.toFixed(1)}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={betaValue}
                onChange={(e) => setBetaValue(parseFloat(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${betaValue * 100}%, rgba(59,130,246,0.2) ${betaValue * 100}%, rgba(59,130,246,0.2) 100%)`
                }}
              />
            </div>

            {/* Attack Threshold */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-3">
                Attack Threshold: {attackThreshold.toFixed(1)}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={attackThreshold}
                onChange={(e) => setAttackThreshold(parseFloat(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${attackThreshold * 100}%, rgba(59,130,246,0.2) ${attackThreshold * 100}%, rgba(59,130,246,0.2) 100%)`
                }}
              />
            </div>

            {/* Apply Parameters Button */}
            <button
              onClick={handleApplyParameters}
              className="w-full py-4 rounded-lg font-bold text-lg transition-all duration-200 border-2"
              style={{
                borderColor: "#3b82f6",
                color: "#60a5fa",
                background: "transparent"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(59,130,246,0.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
              }}
            >
              Apply Parameters
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(59,130,246,0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59,130,246,0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59,130,246,0.7);
        }

        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 10px rgba(59,130,246,0.5);
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 10px rgba(59,130,246,0.5);
        }

        .leaflet-container {
          background: #1a1f2e !important;
        }
      `}</style>
    </div>
  );
};

export default Prediction;