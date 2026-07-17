import { type ReactNode } from "react";
import { motion } from "motion/react";
import heroImg from "./assets/hero.jpg";
import gaminiImg from "./assets/gamini.jpg";
import svcSmmImg from "./assets/smm.webp";
import svcWebsiteImg from "./assets/wedsite.webp";
import svcFunnelImg from "./assets/lead.webp";
import svcGoogleImg from "./assets/googleprofile.webp";

/* ---------------- Navbar ---------------- */

const NAV_LINKS = [
  { label: "The problem", href: "#problem" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#cases" },
];

function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 pointer-events-none">
      <nav className="pointer-events-auto bg-white/60 backdrop-blur-md rounded-full border border-black/10 flex items-center justify-between px-6 py-3">
        <a href="#top" className="font-instrument text-[28px] tracking-tight text-[#1a1a1a]">
          gamini.
        </a>
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[14px] text-[#1a1a1a] transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="group relative overflow-hidden bg-teal-brand rounded-full text-white font-sans text-[14px] px-5 py-2.5 shadow-[inset_0_-4px_4px_rgba(255,255,255,0.39)] outline-1 outline-teal-brand -outline-offset-1"
        >
          <span className="absolute w-[80%] h-4 left-[10%] top-[1px] bg-gradient-to-b from-[#D9F0EA] to-transparent rounded-[12px] transition-transform group-hover:scale-x-105" />
          <span className="relative">Book a clinic audit</span>
        </a>
      </nav>
    </div>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative min-h-screen bg-ivory pt-28 md:pt-40 pb-14 md:pb-16 flex items-center overflow-hidden">
      <div className="absolute -right-36 -top-36 w-[420px] h-[420px] rounded-full bg-blush" />
      <div className="relative max-w-[1060px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-12 md:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-[12px] tracking-[0.22em] uppercase font-medium text-teal-brand mb-5">
              Digital growth partner · Aesthetic clinics
            </span>
            <h1 className="font-instrument text-[44px] md:text-[56px] lg:text-[68px] leading-[0.95] tracking-tight text-ink mb-6">
              Get found. <br /> Get trusted. <br />
              <span className="italic text-teal-brand">Get booked.</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-[16px] md:text-[18px] text-ink/70 leading-relaxed font-normal max-w-xl">
              Your patients research you long before they ever call. I help
              aesthetic clinics look as good online as they are in person — and
              turn that presence into booked chairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 mt-9">
              <a
                href="#contact"
                className="inline-block text-center bg-teal-brand text-ivory font-medium text-[15px] px-7 py-3.5 rounded-full transition-all hover:bg-teal-deep hover:-translate-y-px"
              >
                Book a clinic audit
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(28,31,30,0.14)]">
            <img
              src={heroImg}
              alt="Two women with glowing, healthy skin"
              width={736}
              height={977}
              fetchPriority="high"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-3.5 border border-white/40 rounded-2xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Shared section helpers ---------------- */

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="block text-[12px] tracking-[0.22em] uppercase font-medium text-teal-brand">
      {children}
    </span>
  );
}

/* ---------------- Problem ---------------- */

const PAINS = [
  {
    mark: "01",
    title: "No time — or team — to post consistently",
    body: "You know Instagram matters, but between consultations and running the clinic, posting falls to whoever's free. The result: a feed that doesn't reflect the quality of your work.",
  },
  {
    mark: "02",
    title: "Happy patients, but invisible on Google",
    body: "Your patients love you — yet when someone searches for your treatments in your area, they find your competitors first. Word of mouth alone has a ceiling.",
  },
  {
    mark: "03",
    title: "Empty slots in your appointment book",
    body: "Your calendar has gaps that shouldn't be there. Not because demand doesn't exist — but because the people searching for your treatments never make it to your door.",
  },
];

function Problem() {
  return (
    <section id="problem" className="relative bg-blush py-16 md:py-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[420px] md:h-[560px] pointer-events-none" aria-hidden="true">
        <img
          src={heroImg}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top blur-md opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blush/5 via-blush/40 to-blush" />
      </div>
      <div className="relative max-w-[1060px] mx-auto px-6">
        <Eyebrow>The problem</Eyebrow>
        <Reveal>
          <h2 className="font-serif font-medium text-[clamp(30px,4.4vw,44px)] leading-[1.15] tracking-[-0.01em] text-ink mt-3.5 mb-4">
            Do any of these sound familiar?
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-11">
          {PAINS.map((pain) => (
            <Reveal key={pain.mark}>
              <div className="bg-white/70 border border-ink/10 rounded-2xl p-7 h-full transition-colors hover:border-champagne">
                <span className="font-serif italic text-[34px] text-champagne leading-none block mb-4">
                  {pain.mark}
                </span>
                <h3 className="font-serif font-medium text-[23px] leading-[1.25] text-ink mb-2.5">
                  {pain.title}
                </h3>
                <p className="text-[15px] text-body leading-relaxed">{pain.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-11 font-serif italic text-[clamp(20px,2.6vw,26px)] text-teal-deep max-w-[34ch]">
            None of these are marketing problems. They're visibility problems —
            and visibility can be built.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <section id="about" className="bg-ivory py-16 md:py-28">
      <div className="max-w-[1060px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-10 md:gap-20 items-start">
        <Reveal>
          <div className="relative aspect-[4/5] rounded-[18px] bg-blush overflow-hidden">
            <img
              src={gaminiImg}
              alt="Gamini, founder of The Mothermind Lab"
              width={720}
              height={707}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-3.5 border border-white/40 rounded-xl pointer-events-none" />
          </div>
        </Reveal>
        <Reveal>
          <Eyebrow>About me</Eyebrow>
          <h2 className="font-serif font-medium text-[clamp(30px,4.4vw,44px)] leading-[1.15] tracking-[-0.01em] mt-3.5 mb-4">
            Hi, I'm Gamini.
          </h2>
          <p className="text-body mb-4.5 leading-[1.7]">
            I'm the founder of The Mothermind Lab, a digital studio that works
            exclusively with aesthetic clinics and skin professionals. I build
            the complete digital presence a modern clinic needs — from the
            brand identity and website to the Instagram feed and the Google
            ranking.
          </p>
          <p className="text-body mb-4.5 leading-[1.7]">
            Why clinics? Because aesthetics is one of the few industries where
            your digital presence <em>is</em> part of the product. A patient
            considering a ₹15,000 treatment judges your expertise by your
            Instagram grid, your credibility by your Google reviews, and your
            professionalism by your website — all before they've spoken a word
            to you.
          </p>
          <div className="font-serif italic text-[clamp(21px,2.6vw,26px)] text-ink border-l-[3px] border-champagne pl-5 my-6 leading-[1.4]">
            In aesthetics, your brand is your first consultation.
          </div>
          <p className="text-body leading-[1.7]">
            I keep my client list deliberately small. Every clinic I work with
            gets deep attention — I learn your treatments, your patient
            profile, and your local market before I touch a single design or
            caption.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-6">
            <span className="bg-[#E1F0EC] text-teal-deep text-[13px] font-medium px-4 py-1.5 rounded-full">
              Works only with aesthetic clinics
            </span>
            <span className="bg-blush text-[#8A4B2E] text-[13px] font-medium px-4 py-1.5 rounded-full">
              Small client list, deep attention
            </span>
            <span className="bg-[#E1F0EC] text-teal-deep text-[13px] font-medium px-4 py-1.5 rounded-full">
              Strategy + execution, one person
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

const SERVICES = [
  {
    tag: "Get trusted",
    title: "Social media management",
    body: "End-to-end content for Instagram, Facebook and beyond — treatment education, patient questions answered, and a feed that looks like the clinic you actually run. Not just pretty posts: content built to convert followers into enquiries.",
    outcome: (
      <>
        Recent result — <b className="text-ink font-medium">71 leads in 30 days</b> for Keanas Clinic
      </>
    ),
    img: svcSmmImg,
    imgPos: "",
  },
  {
    tag: "Get found",
    title: "Google profile optimisation",
    body: 'When someone searches "skin clinic near me," your profile should be the answer. I optimise your Google Business Profile, reviews strategy and local relevance signals so nearby patients find you first.',
    outcome: (
      <>
        Recent result — <b className="text-ink font-medium">#12 on Google in 2 weeks</b>, from unranked
      </>
    ),
    img: svcGoogleImg,
    imgPos: "",
  },
  {
    tag: "Get booked",
    title: "Website design & repair",
    body: "Your website is where a curious patient decides to call — or leaves. I design fast, credible, mobile-first clinic websites, and repair existing ones with broken booking flows, slow pages or trust-killing issues.",
    outcome: (
      <>
        Because <b className="text-ink font-medium">traffic means nothing</b> if the landing breaks trust
      </>
    ),
    img: svcWebsiteImg,
    imgPos: "",
  },
  {
    tag: "Get booked",
    title: "Lead generation",
    body: "The full pipeline connected: content that attracts, profiles that rank, pages that convert, and follow-up that doesn't let enquiries go cold. Measured in one number that matters — patients in chairs.",
    outcome: (
      <>
        Enquiries tracked, <b className="text-ink font-medium">not likes counted</b>
      </>
    ),
    img: svcFunnelImg,
    imgPos: "",
  },
];

function Services() {
  return (
    <section id="services" className="relative bg-[#F3EEE6] py-16 md:py-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[420px] md:h-[560px] pointer-events-none" aria-hidden="true">
        <img
          src={heroImg}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top -scale-x-100 blur-md opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3EEE6]/5 via-[#F3EEE6]/40 to-[#F3EEE6]" />
      </div>
      <div className="relative max-w-[1060px] mx-auto px-6">
        <Eyebrow>How we work together</Eyebrow>
        <Reveal>
          <h2 className="font-serif font-medium text-[clamp(30px,4.4vw,44px)] leading-[1.15] tracking-[-0.01em] mt-3.5 mb-4">
            Four ways I grow a clinic
          </h2>
          <p className="text-body max-w-[560px] leading-[1.7]">
            Every engagement starts with an audit of where your patients are
            dropping off — then we fix that first.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-11">
          {SERVICES.map((svc) => (
            <Reveal key={svc.title}>
              <div className="relative overflow-hidden bg-ivory rounded-[18px] p-8 h-full border border-ink/5 transition-all hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(28,31,30,0.08)]">
                {svc.img && (
                  <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <img
                      src={svc.img}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-contain opacity-75 ${svc.imgPos}`}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(250,247,242,0.92) 0%, rgba(250,247,242,0.68) 28%, rgba(250,247,242,0.62) 68%, rgba(250,247,242,0.95) 100%)",
                      }}
                    />
                  </div>
                )}
                <div className="relative">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-teal-brand font-medium">
                    {svc.tag}
                  </span>
                  <h3 className="font-serif font-medium text-[26px] leading-[1.2] mt-3 mb-2.5">
                    {svc.title}
                  </h3>
                  <p className="text-[15px] text-body leading-relaxed">{svc.body}</p>
                  <div className="mt-4.5 pt-4 border-t border-dashed border-ink/15 text-[14px] text-slate-brand">
                    {svc.outcome}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Case studies ---------------- */

const CASES = [
  {
    accent: "bg-champagne",
    tags: [
      { label: "Local SEO", teal: true },
      { label: "Google Business Profile", teal: false },
    ],
    title: "Dr. Debashish Biswas — from invisible to page one",
    story: (
      <>
        Years of clinical expertise, zero digital footprint. Patients searching
        for his specialties were finding competitors — he wasn't ranking at
        all. I restructured his web presence around the search terms patients
        actually use, fixed the technical issues blocking Google, and optimised
        his Business Profile.{" "}
        <b className="text-ink font-medium">Two weeks later, he ranked #12 — from nowhere.</b>
      </>
    ),
    takeaway: '"Patients can\'t choose a doctor they can\'t find."',
    metric: (
      <>
        #12<span className="text-teal-brand">↑</span>
      </>
    ),
    caption: "Google rank in 2 weeks, from unranked",
  },
  {
    accent: "bg-teal-brand",
    tags: [
      { label: "Social media management", teal: true },
      { label: "Website repair", teal: false },
    ],
    title: "Keanas Clinic — 71 leads in 30 days",
    story: (
      <>
        A social presence that wasn't converting, and a website quietly working
        against them — broken elements eroding trust the moment a patient
        clicked through. I took over social end-to-end with content built
        around real patient questions, and fixed the website so that traffic
        had somewhere credible to land.{" "}
        <b className="text-ink font-medium">The first month brought 71 qualified enquiries</b> — not
        likes, not followers. People asking about treatments.
      </>
    ),
    takeaway: '"Followers are vanity. Enquiries are revenue."',
    metric: <>71</>,
    caption: "Patient leads in the first month",
  },
  {
    accent: "bg-[#D89A7E]",
    tags: [
      { label: "Brand identity", teal: false },
      { label: "360° social marketing", teal: true },
    ],
    title: "Sunshine Aesthetic Clinic — a luxury brand built from zero",
    story: (
      <>
        Premium clinical quality, but no brand to signal it — and in
        aesthetics, perceived quality is part of the product. I built their
        complete identity from scratch — palette, typography and visual
        language drawn from the clinic's actual interior — and positioned them
        as a luxury aesthetic destination. Then rolled it out across{" "}
        <b className="text-ink font-medium">
          Instagram, Facebook, LinkedIn, YouTube and Threads
        </b>
        , each channel with its own role.
      </>
    ),
    takeaway: '"In aesthetics, your brand is your first consultation."',
    metric: <>5</>,
    caption: "Platforms, one unmistakable luxury identity",
  },
];

function Cases() {
  return (
    <section id="cases" className="bg-ivory py-16 md:py-28">
      <div className="max-w-[1060px] mx-auto px-6">
        <Eyebrow>Case studies</Eyebrow>
        <Reveal>
          <h2 className="font-serif font-medium text-[clamp(30px,4.4vw,44px)] leading-[1.15] tracking-[-0.01em] mt-3.5 mb-4">
            Real clinics, real results
          </h2>
        </Reveal>
        <div className="grid gap-6 mt-11">
          {CASES.map((c) => (
            <Reveal key={c.title}>
              <article className="relative overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_220px] gap-8 md:gap-14 bg-white border border-ink/5 rounded-[20px] p-8 md:p-11 transition-shadow hover:shadow-[0_18px_44px_rgba(28,31,30,0.08)]">
                <span className={`absolute left-0 top-0 bottom-0 w-1.5 ${c.accent}`} />
                <div>
                  <div className="flex flex-wrap gap-2 mb-3.5">
                    {c.tags.map((t) => (
                      <span
                        key={t.label}
                        className={`text-[12px] px-3 py-1 rounded-full font-medium ${
                          t.teal ? "bg-[#E1F0EC] text-teal-deep" : "bg-blush text-[#8A4B2E]"
                        }`}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif font-medium text-[clamp(24px,3vw,30px)] leading-[1.2] mb-3">
                    {c.title}
                  </h3>
                  <p className="text-[15.5px] text-body leading-[1.7]">{c.story}</p>
                  <p className="mt-4.5 font-serif italic text-[18px] text-slate-brand">
                    {c.takeaway}
                  </p>
                </div>
                <div className="self-center border-t md:border-t-0 md:border-l border-ink/10 pt-5 md:pt-0 md:pl-7">
                  <div className="font-serif font-semibold text-[clamp(40px,5vw,54px)] leading-none text-ink">
                    {c.metric}
                  </div>
                  <div className="text-[13px] text-slate-brand mt-2 max-w-[18ch]">{c.caption}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact + footer ---------------- */

const CONTACT_ROWS = [
  { k: "Email", v: "themothermindlab@gmail.com", href: "mailto:themothermindlab@gmail.com" },
  { k: "Phone / WhatsApp", v: "+91 97997 80007", href: "tel:+919799780007" },
];

function Contact() {
  return (
    <section id="contact" className="bg-[#F3EEE6] pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-[1060px] mx-auto px-6">
        <Eyebrow>Contact</Eyebrow>
        <Reveal>
          <h2 className="font-serif font-medium text-[clamp(34px,5vw,56px)] leading-[1.12] text-ink mt-3.5 mb-5 max-w-[18ch]">
            Let's look at your clinic together.
          </h2>
          <p className="text-body max-w-[52ch] mb-11 leading-[1.7]">
            No forms, no funnels. Message me directly and I'll take a first
            look at your clinic's digital presence — what's working, what's
            leaking patients, and what I'd fix first.
          </p>
        </Reveal>
        <Reveal className="max-w-[640px]">
          {CONTACT_ROWS.map((row, i) => (
            <a
              key={row.k}
              href={row.href}
              target={row.href.startsWith("http") ? "_blank" : undefined}
              rel={row.href.startsWith("http") ? "noopener" : undefined}
              className={`group flex justify-between items-baseline gap-4 py-5 border-t border-ink/15 transition-[padding] hover:pl-2.5 ${
                i === CONTACT_ROWS.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="text-[13px] tracking-[0.16em] uppercase text-slate-brand">{row.k}</span>
              <span className="font-serif text-[clamp(18px,2.4vw,24px)] text-ink text-right transition-colors group-hover:text-teal-brand">
                {row.v}
              </span>
            </a>
          ))}
        </Reveal>
        <p className="mt-9 text-[14px] text-slate-brand italic">
          Based in Kolkata · working with clinics across India
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#F3EEE6] text-slate-brand text-[13px] py-6 border-t border-ink/10">
      <div className="max-w-[1060px] mx-auto px-6 flex flex-wrap justify-between gap-3">
        <span>© 2026 The Mothermind Lab</span>
        <span>Digital growth for aesthetic clinics</span>
      </div>
    </footer>
  );
}

/* ---------------- App ---------------- */

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <About />
      <Services />
      <Cases />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
