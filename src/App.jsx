import { useEffect, useState } from "react";

const LOGO = "https://base44.app/api/apps/6b07eb9bbda80ef129282b5b/files/mp/public/6b07eb9bbda80ef129282b5b/0787b75519aa4548fc67228056fa0cc5_jlogic-logo-white.png";
const EMAIL = "info@jlogic.com.pk";

const NAV = [["About", "#about"], ["Solutions", "#solutions"], ["Why Jlogic", "#why"], ["Partners", "#partners"], ["Careers", "#careers"]];
const SLIDES = [
  "Data centre · Infrastructure designed, deployed and supported",
  "Network · Routing, switching and wireless from design to cutover",
  "Security · Firewall, endpoint and SIEM delivery",
  "Data protection · Backup and disaster recovery you can test",
];
const CAPS = ["Security engineering", "Data protection", "High availability", "Network infrastructure", "Managed support"];
const SERVICES = [
  ["Security Solutions", ["Firewall deployments", "Host and network antivirus", "Content filtering", "IDS systems"]],
  ["System Infrastructure", ["Data protection & HA", "Directory services", "Email & messaging", "Backup & disaster recovery"]],
  ["Network Infrastructure", ["Routing & switching", "Wireless networks", "WAN acceleration"]],
  ["Enterprise & Security Management", ["Network management", "SIEM deployment", "Intrusion prevention"]],
  ["Value-Added Services", ["Infrastructure consulting", "Network optimisation", "Monitoring & maintenance"]],
  ["Software Development", ["Application development", "Enterprise software", "Mobile applications"]],
  ["Web Development", ["WordPress builds", "HTML5 design", "SEO & hosting"]],
];
const WHY = [
  ["Multi-vendor by design", "We hold partnerships across security, virtualisation, backup and networking, so the recommendation follows your risk rather than a single vendor's catalogue."],
  ["Design to support", "The same team that architects the environment operates it: assessment, deployment, monitoring and response under one roof."],
  ["Locally accountable", "Based on Shahrah-e-Faisal in Karachi, with engineers on the ground — not a ticket queue in another time zone."],
  ["Proven process", "Best-practice frameworks and documented handover at every stage, from discovery to disaster-recovery testing."],
];
const PARTNERS = ["Trellix", "FireEye", "VMware", "Adobe", "Forcepoint", "Veritas", "WatchGuard", "Barracuda", "GFI Software", "Huawei"];
const CUSTOMERS = [
  ["Banking & finance", "Segmented core infrastructure and audit-ready security controls."],
  ["Telecommunications", "High-availability networks with carrier-grade data protection."],
  ["Manufacturing", "Plant-floor connectivity with perimeter and endpoint defence."],
  ["Healthcare", "Confidential data handling, backup and recovery discipline."],
  ["Education", "Campus networks, content filtering and endpoint management."],
  ["Public sector", "Compliance-led deployments with documented handover."],
];
const ROLES = [
  ["Security engineering", "Firewall, endpoint and SIEM delivery for enterprise customers."],
  ["Network engineering", "Routing, switching and wireless projects from design to cutover."],
  ["Application development", "Web and mobile products built on modern stacks."],
];
const INTERESTS = ["Security solutions", "System infrastructure", "Network infrastructure", "Enterprise & security management", "Value-added services", "Software development", "Web development", "Careers"];

const pad = (n) => String(n).padStart(2, "0");

function Head({ n, eyebrow, title, text }) {
  return (
    <>
      <div className="eyebrow">{pad(n)} — {eyebrow}</div>
      <h2>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </>
  );
}

function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute("data-theme") || "dark");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

function Nav({ theme, toggle }) {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap nav">
        <a href="#home"><img className="logo" src={LOGO} alt="Jlogic Innovations" /></a>
        <nav className={"links" + (open ? " open" : "")} onClick={() => setOpen(false)}>
          {NAV.map(([t, h]) => <a key={h} href={h}>{t}</a>)}
          <a className="btn primary" href="#contact">Get in touch</a>
          <button className="icon-btn" onClick={toggle} aria-label="Toggle theme" title="Toggle theme">
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </nav>
        <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </div>
    </header>
  );
}



export default function App() {
  const [theme, toggle] = useTheme();
  return (
    <>
      <Nav theme={theme} toggle={toggle} />
      <main>
        {/* <Hero /> */}
        {/* <About />
        <Solutions />
        <Why />
        <Partners />
        <Customers />
        <Careers />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
