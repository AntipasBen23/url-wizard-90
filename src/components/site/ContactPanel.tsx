import { X, MapPin, Phone, Mail, Globe, ChevronRight } from "lucide-react";
import React from "react";

const offices = [
  {
    region: "Nigeria (Head Office)",
    locations: [
      {
        name: "Lagos",
        address: "Maple Close, Foreshore Osborne 2, Ikoyi, Lagos.",
        extras: [
          { icon: "phone", label: "WhatsApp", value: "+234 802 545 4600  /  +44 7931 774208" },
          { icon: "globe", label: "Website", value: "www.brmarineenergy.com" },
        ],
      },
      {
        name: "Port Harcourt",
        address: "#3 Holy Rapture Close, Diamond Valley Estate, Odili Road, Port Harcourt.",
        extras: [
          { icon: "mail", label: "", value: "info.ng@brmarineenergy.com" },
          { icon: "mail", label: "", value: "captibedu@gmail.com" },
        ],
      },
    ],
  },
  {
    region: "UK Office",
    locations: [
      {
        name: "",
        address: "5 William Merriman Road, Marlborough, United Kingdom.",
        extras: [
          { icon: "mail", label: "", value: "charteringuk@brmarineenergy.com" },
          { icon: "mail", label: "", value: "info.uk@brmarineenergy.com" },
        ],
      },
    ],
  },
  {
    region: "Panama Office",
    locations: [
      {
        name: "",
        address: "Officina M-09, Mesanini, Edificio Comosa Av. Samuel Lewis, Bellavista, Ciudad Panama.",
        extras: [
          { icon: "mail", label: "", value: "chartering.pan@brmarineenergy.com" },
          { icon: "mail", label: "", value: "operations.pan@brmarineenergy.com" },
          { icon: "mail", label: "", value: "industries.pan@brmarineenergy.com" },
          { icon: "mail", label: "", value: "info.pan@brmarineenergy.com" },
        ],
      },
    ],
  },
  {
    region: "USA Office",
    locations: [
      {
        name: "",
        address: "410 SE, 18th Street, Fort Lauderdale, FL 33316, USA.",
        extras: [
          { icon: "mail", label: "", value: "chartering.usa@brmarineenergy.com" },
          { icon: "mail", label: "", value: "operations.usa@brmarineenergy.com" },
          { icon: "mail", label: "", value: "industries.usa@brmarineenergy.com" },
          { icon: "mail", label: "", value: "info.usa@brmarineenergy.com" },
        ],
      },
    ],
  },
];

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.78rem",
  fontWeight: 600,
  color: "#0a1f44",
  marginBottom: "0.35rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.45rem 0.65rem",
  fontSize: "0.8rem",
  border: "1px solid #d1d5db",
  borderRadius: "2px",
  outline: "none",
  color: "#0a1f44",
  backgroundColor: "#fff",
  boxSizing: "border-box",
  height: "2.6rem",
};

export function ContactPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 60,
          backgroundColor: "rgba(0,0,0,0.5)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
      />

      {/* Panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 61,
          display: "flex",
          width: "min(88vw, 780px)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.25)",
        }}
      >
        {/* Left — contact info */}
        <div style={{ flex: "0 0 48%", overflowY: "auto", backgroundColor: "#f4f6f8", padding: "2rem 1.75rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0a1f44", marginBottom: "1.75rem" }}>
            B &amp; R Marine Energy Logistics
          </h2>
          {offices.map((office) => (
            <div key={office.region} style={{ marginBottom: "1.75rem" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.55 0.2 262)", marginBottom: "0.6rem" }}>
                {office.region}
              </p>
              {office.locations.map((loc, i) => (
                <div key={i} style={{ marginBottom: "0.85rem" }}>
                  {loc.name && (
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#0a1f44", marginBottom: "0.2rem" }}>{loc.name}</p>
                  )}
                  <div style={{ display: "flex", gap: "0.4rem", alignItems: "flex-start", marginBottom: "0.4rem" }}>
                    <MapPin style={{ width: "0.85rem", height: "0.85rem", flexShrink: 0, marginTop: "0.15rem", color: "oklch(0.55 0.2 262)" }} />
                    <p style={{ fontSize: "0.78rem", color: "#4a5568", lineHeight: 1.5 }}>{loc.address}</p>
                  </div>
                  {loc.extras.map((e, j) => (
                    <div key={j} style={{ display: "flex", gap: "0.4rem", alignItems: "flex-start", marginBottom: "0.25rem" }}>
                      {e.icon === "phone" && <Phone style={{ width: "0.8rem", height: "0.8rem", flexShrink: 0, marginTop: "0.15rem", color: "oklch(0.55 0.2 262)" }} />}
                      {e.icon === "mail" && <Mail style={{ width: "0.8rem", height: "0.8rem", flexShrink: 0, marginTop: "0.15rem", color: "oklch(0.55 0.2 262)" }} />}
                      {e.icon === "globe" && <Globe style={{ width: "0.8rem", height: "0.8rem", flexShrink: 0, marginTop: "0.15rem", color: "oklch(0.55 0.2 262)" }} />}
                      <p style={{ fontSize: "0.75rem", color: "#4a5568" }}>
                        {e.label && <span style={{ fontWeight: 600 }}>{e.label}: </span>}
                        {e.value}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Right — form */}
        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#ffffff", padding: "1.5rem 1.5rem 1.5rem 1.25rem", position: "relative" }}>
          <button
            onClick={onClose}
            style={{ position: "absolute", top: "1rem", right: "1rem", background: "none", border: "none", cursor: "pointer", color: "#0a1f44", padding: "0.25rem" }}
            aria-label="Close"
          >
            <X style={{ width: "1.4rem", height: "1.4rem" }} />
          </button>

          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0a1f44", marginBottom: "1.5rem" }}>
            Contact form
          </h2>

          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <div>
              <label style={labelStyle}>First name <span style={{ color: "red" }}>*</span></label>
              <input required placeholder="Your First name" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Last name <span style={{ color: "red" }}>*</span></label>
              <input required placeholder="Your Last name" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Email <span style={{ color: "red" }}>*</span></label>
              <input required type="email" placeholder="Your email" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Phone <span style={{ color: "#888", fontWeight: 400 }}>(optional)</span></label>
              <input type="tel" placeholder="+234 000 000 0000" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Country <span style={{ color: "red" }}>*</span></label>
              <select required style={inputStyle}>
                <option value="">Select country</option>
                <option>Nigeria</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Panama</option>
                <option>Ghana</option>
                <option>South Africa</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Company</label>
              <input placeholder="Enter company" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>I'm interested in <span style={{ color: "red" }}>*</span></label>
              <select required style={inputStyle}>
                <option value="">Select a topic</option>
                <option>Vessels</option>
                <option>Services</option>
                <option>Brokerage</option>
                <option>Chartering</option>
                <option>Sale &amp; Purchase</option>
                <option>Engineering Consulting</option>
                <option>New Building Supervision</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Your request or question</label>
              <textarea placeholder="Hello,..." rows={5} style={{ ...inputStyle, height: "auto", resize: "vertical", fontFamily: "inherit" }} />
            </div>
            <label style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.8rem", color: "#4a5568", cursor: "pointer" }}>
              <input type="checkbox" style={{ width: "1rem", height: "1rem", accentColor: "oklch(0.55 0.2 262)" }} />
              Subscribe to our newsletter
            </label>
            <button
              type="submit"
              style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "oklch(0.55 0.2 262)", color: "#fff", border: "none", padding: "0.75rem 1.75rem", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Send <ChevronRight style={{ width: "1rem", height: "1rem" }} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
