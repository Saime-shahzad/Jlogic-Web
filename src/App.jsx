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

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="eyebrow">Jlogic Innovations · Karachi, Pakistan</div>
        <h1>Secure digital world,<br />engineered.</h1>
        <p className="lead">We design, deploy and support the data protection, network and security foundations behind Pakistan's most demanding IT environments — from the data centre to the endpoint.</p>
        <div className="btns">
          <a className="btn primary" href="#contact">Start a conversation</a>
          <a className="btn" href="#solutions">Explore solutions</a>
        </div>
        <div className="slide">
          <b>{pad(i + 1)} / {pad(SLIDES.length)}</b>
          <span>{SLIDES[i]}</span>
          <div className="dots">
            {SLIDES.map((_, k) => <button key={k} className={k === i ? "on" : ""} onClick={() => setI(k)} aria-label={"Slide " + (k + 1)} />)}
          </div>
        </div>
        <div className="stats">
          <div><strong>07</strong><span>Solution practices</span></div>
          <div><strong>10+</strong><span>Technology partners</span></div>
          <div><strong>Karachi</strong><span>Engineers on the ground</span></div>
        </div>
        <div className="chips">{CAPS.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
      </div>
    </section>
  );
}

// function About() {
//   return (
//     <section id="about" className="alt">
//       <div className="wrap two">
//         <div>
//           <Head n={1} eyebrow="About us" title="A multidisciplinary technical team, accountable for the whole stack." />
//           <p>Jlogic Innovations exists to keep our customers ahead in a market that never stands still. Our team carries a deep, multidisciplinary technical background, which lets us take responsibility for the areas that matter most to a business rather than a single product line.</p>
//           <p>We combine infrastructure and application expertise with proven process, so an engagement ends with measurable improvement instead of a stack of hardware. That is what we mean by a secure digital world.</p>
//         </div>
//         <div className="card" style={{ marginTop: 40 }}>
//           <ul>
//             <li>IT strategy, planning and infrastructure design</li>
//             <li>Data protection, backup and disaster recovery</li>
//             <li>Security services and application integration</li>
//           </ul>
//           <div className="tag">Design · Deploy · Support</div>
//         </div>
//       </div>
//     </section>
//   );
// }

function Solutions() {
  return (
    <section id="solutions">
      <div className="wrap">
        <Head n={2} eyebrow="Our services" title="Seven practices, one accountable team." text="Every engagement starts with the risk you carry, not a product catalogue. These are the disciplines we deliver end to end." />
        <div className="grid g3">
          {SERVICES.map(([t, items], k) => (
            <div className="card" key={t}>
              <div className="num">{pad(k + 1)}</div>
              <h3>{t}</h3>
              <ul>{items.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
          <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
            <h3>Not sure where to start?</h3>
            <a className="btn primary" href="#contact">Book a technical consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="alt">
      <div className="wrap">
        <Head n={3} eyebrow="Why Jlogic" title="Hard problems, solved with speed and discipline." text="Our solutions cross our foundational focus areas to solve the technical challenges our customers actually face." />
        <div className="grid g2">
          {WHY.map(([t, p], k) => (
            <div className="card" key={t}><div className="num">{pad(k + 1)}</div><h3>{t}</h3><p>{p}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners">
      <div className="wrap">
        <Head n={4} eyebrow="Partners" title="Authorised to deliver what we recommend." text="We work with the platforms we deploy in production, so licensing, escalation and support stay with people who know the environment." />
        <div className="partners">{PARTNERS.map((p) => <div key={p}>{p}</div>)}</div>
        <p className="note">Selected technology alliances · product names belong to their respective owners</p>
      </div>
    </section>
  );
}

function Customers() {
  return (
    <section className="alt">
      <div className="wrap">
        <Head n={5} eyebrow="Customers" title="Where our work runs." text="Regulated, high-availability environments where downtime has a cost and a paper trail matters." />
        <div className="grid g3">
          {CUSTOMERS.map(([t, p], k) => (
            <div className="card" key={t}><div className="num">{pad(k + 1)}</div><h3>{t}</h3><p>{p}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Careers() {
  return (
    <section id="careers">
      <div className="wrap">
        <Head n={6} eyebrow="Careers" title="Engineers who like the hard problems." text="We hire for depth and curiosity. If you have built, secured or recovered systems that other people depend on, we would like to meet you." />
        <div className="grid g3">
          {ROLES.map(([t, p], k) => (
            <div className="card" key={t}><div className="num">{pad(k + 1)}</div><h3>{t}</h3><p>{p}</p></div>
          ))}
        </div>
        <div className="cta-row">
          <a className="btn primary" href="#contact">Introduce yourself</a>
          <span className="note" style={{ margin: 0 }}>Send your CV to <a href={"mailto:" + EMAIL} style={{ color: "var(--accent)" }}>{EMAIL}</a></span>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const empty = { name: "", email: "", company: "", phone: "", interest: "", message: "" };
  const [f, setF] = useState(empty);
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    // Replace with your API call / form service. Opens the visitor's mail app as a fallback.
    const body = `Name: ${f.name}\nEmail: ${f.email}\nCompany: ${f.company}\nPhone: ${f.phone}\n\n${f.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Enquiry: " + f.interest)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setF(empty);
  };
  return (
    <section id="contact" className="alt">
      <div className="wrap two">
        <div className="info">
          <Head n={7} eyebrow="Contact" title="Tell us what you are protecting." text="Share the environment, the constraint or the deadline. A senior engineer will come back to you with a straight answer." />
          <div style={{ marginTop: 32 }}>
            <div className="card"><h3>Email</h3><a href={"mailto:" + EMAIL}>{EMAIL}</a></div>
            <div className="card">
              <h3>Head office</h3>
              <p>Suite 520, 5th Floor, Anum Blessing Building, Block 7, Shahrah-e-Faisal, P.E.C.H.S., Karachi 75350</p>
              <a href="https://maps.google.com/?cid=5322397773484661709" target="_blank" rel="noreferrer">Open in maps →</a>
            </div>
          </div>
        </div>
        <form onSubmit={submit} style={{ marginTop: 40 }}>
          <div className="row">
            <label>Full name<input required value={f.name} onChange={set("name")} /></label>
            <label>Work email<input required type="email" value={f.email} onChange={set("email")} /></label>
          </div>
          <div className="row">
            <label>Company<input value={f.company} onChange={set("company")} /></label>
            <label>Phone<input type="tel" value={f.phone} onChange={set("phone")} /></label>
          </div>
          <label>Area of interest *
            <select required value={f.interest} onChange={set("interest")}>
              <option value="">Select a practice</option>
              {INTERESTS.map((x) => <option key={x}>{x}</option>)}
            </select>
          </label>
          <label>How can we help?<textarea value={f.message} onChange={set("message")} /></label>
          <button className="btn primary" type="submit">Send enquiry</button>
          <span className="note" style={{ margin: 0 }}>Your details stay with our team</span>
          {sent && <span className="ok">Thank you — your enquiry is ready to send.</span>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <img className="logo" src={LOGO} alt="Jlogic Innovations" />
            <p style={{ marginTop: 14 }}>Jlogic Innovations designs, deploys and supports enterprise infrastructure, data protection and security for organisations across Pakistan.</p>
            <div className="tag">Secure Digital World</div>
          </div>
          <div><h4>Solutions</h4><ul>
            <li><a href="#solutions">Security solutions</a></li><li><a href="#solutions">System infrastructure</a></li>
            <li><a href="#solutions">Network infrastructure</a></li><li><a href="#solutions">Software & web</a></li></ul></div>
          <div><h4>Company</h4><ul>
            {[["About us", "#about"], ["Why Jlogic", "#why"], ["Partners", "#partners"], ["Careers", "#careers"], ["Contact", "#contact"]].map(([t, h]) => <li key={h}><a href={h}>{t}</a></li>)}</ul></div>
          <div><h4>Contact</h4>
            <p><a href={"mailto:" + EMAIL}>{EMAIL}</a></p>
            <p>Suite 520, Anum Blessing Building, Shahrah-e-Faisal, Karachi 75350</p>
            <a className="btn primary" style={{ marginTop: 12 }} href="#contact">Start a project</a></div>
        </div>
        <div className="copy"><span>© 2026 Jlogic Innovations. All rights reserved.</span><span>Karachi · Pakistan</span></div>
      </div>
    </footer>
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
