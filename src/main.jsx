import React, { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const navItems = [
  ['My Growth and Life', '#growth'],
  ['My Work Experience', '#work'],
  ['My Understanding and Intention of the Company', '#intention'],
  ['Contact Information', '#contact'],
];

const galleryImages = [
  'memory-01.jpg',
  'memory-02.jpg',
  'memory-03.jpg',
  'memory-04.jpg',
  'memory-05.jpg',
  'memory-06.jpg',
  'memory-07.jpg',
  'memory-08.jpg',
  'memory-09.jpg',
  'memory-10.jpg',
  'memory-11.jpg',
];

const growthContent = {
  Hobbies: {
    text: "",
    images: [],
    video: "hobby-video_tlH0Et4Y.mp4",
  },
  "My career path & now": {
    text: "",
    images: [],
    video: "career-video-8wwwoj33_kyq2a9Jk.mp4",
  },
  Hometown: {
    text: "",
    images: [],
    video: "hometown-video-yyjy1r62_ypk1JVM7.mp4",
  },
};

const workContent = {
  'Independent E-commerce Seller': 'Built and managed my own online store from scratch �� sourcing products, optimizing listings, handling customer service, and gradually growing a loyal customer base. This experience taught me resilience, attention to detail, and the value of honest business practices.',
  'Cross-border E-commerce Operator': 'Operated cross-border e-commerce platforms, bridging Chinese manufacturers with international markets. Managed product categorization, pricing strategies, logistics coordination, and market research to expand sales channels.',
  'Foreign Trade Specialist': 'Engaged in foreign trade communications, including supplier negotiations, order tracking, and international client relations. Developed strong cross-cultural communication skills and a keen understanding of global market dynamics.',
};

function ExpandableModule({ id, label }) {
  const [expanded, setExpanded] = useState(false);
  const videoRef = useRef(null);
  const data = growthContent[label] || { text: "", images: [], video: null };
  const textContent = typeof data === "string" ? data : data.text;
  const images = typeof data === "string" ? [] : (data.images || []);
  const videoSrc = typeof data === "string" ? null : (data.video || null);

  useEffect(() => {
    if (expanded && videoRef.current && videoSrc) {
      videoRef.current.play().catch(() => {});
    } else if (!expanded && videoRef.current) {
      videoRef.current.pause();
    }
  }, [expanded, videoSrc]);

  return (
    <div className={"growth-module " + (expanded ? "expanded" : "")} onClick={() => setExpanded(!expanded)}>
      <span className="module-label">{label}</span>
      <span className="module-icon">{expanded ? String.fromCharCode(8722) : "+"}</span>
      <div className="module-content">
        {videoSrc && (
          <div className="module-video-container">
            <video
              ref={videoRef}
              src={"/assets/" + videoSrc}
              className="module-video"
              controls
              playsInline
            />
          </div>
        )}
        {images.length > 0 && !videoSrc && (
          <div className="module-gallery">
            {images.map((img, idx) => (
              <img
                key={img + "-" + idx}
                src={"/assets/" + img}
                alt={label + " photo " + (idx + 1)}
                loading="lazy"
                className="module-gallery-img"
              />
            ))}
          </div>
        )}
        {textContent && !videoSrc && images.length === 0 && (
          <p>{textContent}</p>
        )}
        {!textContent && !videoSrc && images.length === 0 && (
          <p className="module-placeholder">Coming soon</p>
        )}
      </div>
    </div>
  );
}



function WorkStickyNote({ id, label, description, color, pinColor, number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={"sticky-note " + (expanded ? 'expanded' : '')}
      style={{ '--note-color': color, '--pin-color': pinColor }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="sticky-badge">{number}</div>
      <div className="sticky-note-header" style={{ background: color }}>
        <span className="sticky-title">{label}</span>
        <span className="pin" style={{ background: pinColor }}>
          <span className="pin-highlight" />
        </span>
      </div>
      <div className="sticky-note-body">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="site-shell">
      <Hero />
      <section id="growth" className="section section-growth">
        <div className="section-inner growth-layout">
          <div className="growth-intro reveal-panel">
            <p className="eyebrow">01 / Growth</p>
            <h2>My Growth and Life</h2>
            <div className="growth-photo-area">
              <img
                className="growth-portrait"
                src="/assets/my-photo.jpg"
                alt="Luyao"
              />
            </div>
          </div>
          <div className="growth-photo-modules">
            <div className="growth-modules">
              {['Hobbies', 'My career path & now', 'Hometown'].map((label) => (
                <ExpandableModule key={label} id={label.toLowerCase()} label={label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section section-work">
        <video
          className="work-bg-video"
          src="/assets/work-bg_WjcdbB1D.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="section-inner work-layout">
          <div className="section-copy reveal-panel">
            <p className="eyebrow">02 / Work</p>
            <h2>My Work Experience</h2>
          </div>
          <div className="work-sticky-notes">
            <WorkStickyNote
              id="ecommerce-seller"
              label="Independent E-commerce Seller"
              description="Position Title: Independent Store Owner<br/>Time: August 2024 - January 2025<br/>To truly understand the operation rules of e-commerce platforms, I started my own Taobao, Pinduoduo, and Xiaohongshu stores. I independently completed the entire process including market product selection, product design and production, store setup, product listing, and pricing strategy.<br/>I was fully responsible for customer service, graphic design, and logistics coordination of the stores, which honed my excellent multitasking ability. I comprehensively understood the processes of domestic e-commerce platforms."
              color="#f48932"
              pinColor="#e85d20"
              number="01"
            />
            <WorkStickyNote
              id="cross-border"
              label="Cross-border E-commerce Operator"
              description="Company Name: Xiamen Kunjiulin Trading Co., Ltd.<br/>Position Title: Cross-border Operator<br/>Employment Period: June 2025 - August 2025<br/>Job Responsibilities:<br/>(1) Build new stores from scratch.<br/>(2) Be responsible for the daily operation and maintenance of stores, including product selection, listing, advertising placement, creation of advertising posts, keyword setting, and tracking of advertising data.<br/>(3) Analyze sales data and market trends, understand the current market conditions according to different seasons, identify popular products and search for potential best-sellers, and participate in formulating marketing strategies.<br/>(4) Search for target bloggers, evaluate their page views and number of followers, then contact overseas bloggers to discuss cooperation matters, the amount required for advertising, and continuously negotiate to reach a deal at the most appropriate price.<br/>(5) Independently manage a new store during the two-month internship period, achieving a turnover increase from 0 to over 30,000 yuan. Assist in analyzing sales data and market trends, and participate in formulating marketing strategies.<br/>(6) Handle customer inquiries and after-sales emails independently to maintain a good reputation of the store."
              color="#5b7fd6"
              pinColor="#3d5fbf"
              number="02"
            />
            <WorkStickyNote
              id="foreign-trade"
              label="Foreign Trade Specialist"
              description="Company Name: Shenzhen Meiyue Eyewear Co., Ltd.<br/>Position Title: Foreign Trade Salesperson<br/>Employment Period: November 2025 - February 2026<br/>Job Responsibilities:<br/>(1) Social Media Operation: Independently operate overseas social platforms such as TikTok, Instagram, Facebook, and WhatsApp. Be responsible for the entire process from shooting, production, editing to copywriting release of the company and products. Post content information and interactive content to increase brand exposure.<br/>(2) Proactively search, screen and add potential overseas customers through social media platforms to establish initial business contacts. Email Marketing Development: Write targeted English development emails based on product features and target markets, design email templates, set email sending times according to different countries and regions, and carry out precise email marketing campaigns. Track the email open rate and reply rate, and promptly follow up on customer inquiries to promote business conversion.<br/>(3) Visual Material Production: Proficiently use Photoshop software to create product advertisements, beautify product images, and repair defects. Use video editing software to edit various product videos for product promotion, effectively increasing product click-through rates and conversion rates.<br/>(4) Manage the company's official WeChat account: Create two official account articles per week for product promotion. Develop corresponding official accounts for different festivals, edit and beautify the company's website templates to increase brand awareness.<br/>(5) Be in charge of personnel work: Recruit excellent employees, handle on-boarding registration, order staff meals, manage attendance check-ins, and create and edit company documents in Excel and Word.<br/>(6) Apply for exhibitions, communicate booth information requirements, create exhibition posters to increase brand awareness.<br/>(7) Liaise with offline store agencies and exhibition stands to display our products and increase product exposure.<br/>(8) Be responsible for entering product numbers, orders, and inventory information, and handle problems promptly."
              color="#4caf82"
              pinColor="#2e8b5e"
              number="03"
            />
          </div>
        </div>
      </section>

      <section id="intention" className="section section-intention">
        <div className="section-inner split reverse">
          <div className="media-collage">
            {galleryImages.slice(4, 9).map((image, index) => (
              <img
                key={image}
                src={'/assets/' + image}
                alt={'Company intention visual ' + (index + 1)}
                loading="lazy"
              />
            ))}
          </div>
          <div className="section-copy reveal-panel amber">
            <p className="eyebrow">03 / Intention</p>
            <h2>My Understanding and Intention of the Company</h2>
            <p>
              I know that Italic was founded in San Francisco in 2018. It is a light luxury online brand covering the entire chain of product development, supply chain and e-commerce. The brand abandons the premium of luxury brands and creates affordable light luxury products without logos in the same factories as big-name brands.
            </p>
            <p>
              I highly recognize its business philosophy in the industry and am eager to join the team.
            </p>
            <p>
              After the online interview, I cherish this opportunity very much. I built this website to let you know me better.
            </p>
            <p>
              However, since it's my first time using AI to build a website, some details may be a bit rough.
            </p>
            <p>
              Finally, I hope I can be given this opportunity. Please believe that I can be competent for this position and become an excellent employee!
            </p>
            <p className="signature">
              ------- Luyao
            </p>
            <CleanVideo
              className="small-motion"
              src="/assets/intent-motion_NT3KLHqs.mp4"
              poster="/assets/memory-11.jpg"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-inner contact-panel">
          <div>
            <p className="eyebrow">04 / Contact</p>
            <h2>Contact Information</h2>
          </div>
          <div className="contact-list">
            <a href="tel:+8615620174002">
              <span>Phone number</span>
              <strong>+86 15620174002</strong>
            </a>
            <a href="mailto:1336194812@qq.com">
              <span>Email</span>
              <strong>1336194812@qq.com</strong>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Hero() {
  return (
    <section className="hero" aria-label="Luyao's Space hero">
      <video
        className="hero-video-bg"
        src="/assets/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Luyao's Space home">
          Luyao's Space
        </a>
        <div className="nav-links">
          {navItems.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </div>
      </nav>
      <div className="hero-content" id="top">
        <p className="eyebrow">Warm intelligence / Dreamlike portfolio</p>
        <h1>Luyao's Space</h1>
        <p>
          A personal universe of growth, work, intention, and quiet imagination.
        </p>
      </div>
      <div className="hero-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}

function CleanVideo({ className, src, poster }) {
  return (
    <div className={'clean-video ' + className}>
      <video
        className="video-surface"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noplaybackrate"
      />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
