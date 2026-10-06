"use client";

import { useState } from "react";

const solutions = [
  {
    number: "01",
    title: "Architectural Systems",
    arTitle: "الأنظمة المعمارية",
    description:
      "Aluminum systems presented for contemporary façades, openings and architectural applications.",
    arDescription:
      "أنظمة ألومنيوم للتطبيقات المعمارية والواجهات والفتحات بتصميم عصري ودقة هندسية.",
  },
  {
    number: "02",
    title: "Industrial Solutions",
    arTitle: "الحلول الصناعية",
    description:
      "Reliable aluminum solutions for demanding environments, assemblies and project requirements.",
    arDescription:
      "حلول ألومنيوم موثوقة للبيئات والتطبيقات الصناعية ومتطلبات المشروعات المختلفة.",
  },
  {
    number: "03",
    title: "Custom Profiles",
    arTitle: "المقاطع المخصصة",
    description:
      "Profiles developed around specific dimensions, functions and project requirements.",
    arDescription:
      "مقاطع هندسية مخصصة وفق الأبعاد والوظائف ومتطلبات المشروع.",
  },
];

const process = [
  ["01", "Brief", "We understand the project, application and required outcome."],
  ["02", "Engineering", "Requirements are translated into a precise technical direction."],
  ["03", "Solution", "The right aluminum system or custom profile is selected."],
  ["04", "Delivery", "A clear path from approved solution to project execution."],
];

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const isArabic = language === "ar";

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className="site-shell">
      <header className="site-header">
        <div className="container nav">
          <a href="#" className="logo" aria-label="ALU SMART">
            ALU<span>SMART</span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">{isArabic ? "من نحن" : "About"}</a>
            <a href="#solutions">{isArabic ? "الحلول" : "Solutions"}</a>
            <a href="#projects">{isArabic ? "المشروعات" : "Projects"}</a>
            <a href="#catalog">{isArabic ? "الكتالوج" : "Catalog"}</a>
            <a href="#contact">{isArabic ? "تواصل" : "Contact"}</a>
          </nav>

          <button
            className="language-button"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
            aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
          >
            {isArabic ? "EN" : "عربي"}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-noise" />
        <div className="hero-grid" />

        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="kicker-line" />
              {isArabic ? "حلول ألومنيوم متقدمة" : "ADVANCED ALUMINUM SOLUTIONS"}
            </div>

            <h1>
              {isArabic ? (
                <>
                  نصنع حلولًا
                  <br />
                  <em>تدوم.</em>
                </>
              ) : (
                <>
                  Aluminum,
                  <br />
                  <em>engineered to last.</em>
                </>
              )}
            </h1>

            <p className="hero-description">
              {isArabic
                ? "من الأنظمة المعمارية إلى المقاطع المخصصة، نقدم حلولًا تجمع بين الهندسة الدقيقة والتصميم والأداء."
                : "From architectural systems to custom profiles, we shape aluminum solutions around precision, design and performance."}
            </p>

            <div className="hero-actions">
              <a href="#solutions" className="button button-primary">
                {isArabic ? "استكشف الحلول" : "Explore Solutions"}
                <span aria-hidden="true">↗</span>
              </a>
              <a href="#contact" className="button button-secondary">
                {isArabic ? "ابدأ محادثة" : "Start a Conversation"}
              </a>
            </div>

            <div className="hero-note">
              <span>QATAR</span>
              <span>{isArabic ? "واجهات • صناعي • مخصص" : "Architectural • Industrial • Custom"}</span>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-glow" />
            <div className="art-ring ring-a" />
            <div className="art-ring ring-b" />
            <div className="art-slab">
              <div className="slab-edge" />
              <div className="slab-shine" />
              <div className="slab-ribs" />
              <div className="slab-copy">
                <span>ALU / 01</span>
                <strong>SMART</strong>
                <small>PRECISION SYSTEMS</small>
              </div>
            </div>
            <div className="art-tag tag-top">ENGINEERED</div>
            <div className="art-tag tag-bottom">01 — 04</div>
          </div>
        </div>
      </section>

      <section className="signal-bar">
        <div className="container signal-grid">
          <div><strong>01</strong><span>{isArabic ? "هندسة دقيقة" : "Precision engineering"}</span></div>
          <div><strong>02</strong><span>{isArabic ? "أنظمة معمارية" : "Architectural systems"}</span></div>
          <div><strong>03</strong><span>{isArabic ? "حلول صناعية" : "Industrial solutions"}</span></div>
          <div><strong>04</strong><span>{isArabic ? "مقاطع مخصصة" : "Custom profiles"}</span></div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div className="section-index">01 / 04</div>
          <div>
            <p className="section-label">{isArabic ? "من نحن" : "ABOUT ALU SMART"}</p>
            <h2>
              {isArabic
                ? "الألومنيوم ليس مجرد مادة. إنه نظام من الدقة."
                : "Aluminum is not just a material. It is a system of precision."}
            </h2>
          </div>
          <div className="section-copy">
            <p>
              {isArabic
                ? "ALU SMART منصة متخصصة في حلول الألومنيوم، صُممت لتقديم تجربة واضحة من فهم احتياج المشروع إلى اختيار الحل المناسب."
                : "ALU SMART is a focused aluminum solutions platform designed to make the path from project requirement to the right solution clear and precise."}
            </p>
            <p>
              {isArabic
                ? "نمزج بين التفكير الهندسي واللغة البصرية الحديثة لعرض الأنظمة والمقاطع والحلول بطريقة تناسب المشاريع المعاصرة."
                : "We combine engineering thinking with a modern visual language to present systems, profiles and solutions for contemporary projects."}
            </p>
            <a href="#contact" className="text-link">
              {isArabic ? "تحدث مع فريق ALU SMART ↗" : "Talk to ALU SMART ↗"}
            </a>
          </div>
        </div>
      </section>

      <section id="solutions" className="section solutions-section">
        <div className="container">
          <div className="section-topline">
            <div>
              <div className="section-index">02 / 04</div>
              <p className="section-label">{isArabic ? "الحلول" : "SOLUTIONS"}</p>
              <h2>{isArabic ? "مصمم حول المشروع." : "Designed around the project."}</h2>
            </div>
            <p className="section-intro">
              {isArabic
                ? "ثلاثة مسارات واضحة تساعد العميل على الوصول إلى الحل المناسب."
                : "Three clear solution paths help move a project toward the right aluminum application."}
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((item) => (
              <article className="solution-card" key={item.number}>
                <div className="card-top">
                  <span>{item.number}</span>
                  <span className="card-arrow">↗</span>
                </div>
                <div className="solution-shape" aria-hidden="true">
                  <i /><i /><i />
                </div>
                <h3>{isArabic ? item.arTitle : item.title}</h3>
                <p>{isArabic ? item.arDescription : item.description}</p>
                <a href="#contact">{isArabic ? "ناقش الحل" : "Discuss solution"} <span>→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="process-heading">
            <p className="section-label">{isArabic ? "طريقة العمل" : "HOW WE WORK"}</p>
            <h2>{isArabic ? "من المتطلبات إلى الحل." : "From requirement to solution."}</h2>
          </div>
          <div className="process-grid">
            {process.map(([number, title, description]) => (
              <div className="process-item" key={number}>
                <span>{number}</span>
                <h3>{isArabic ? ["المتطلبات", "الهندسة", "الحل", "التنفيذ"][Number(number) - 1] : title}</h3>
                <p>
                  {isArabic
                    ? ["نفهم المشروع والاستخدام والنتيجة المطلوبة.", "نحوّل المتطلبات إلى اتجاه تقني واضح.", "نختار نظام الألومنيوم أو المقطع المناسب.", "مسار واضح من اعتماد الحل إلى التنفيذ."][Number(number) - 1]
                    : description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-topline">
            <div>
              <div className="section-index">03 / 04</div>
              <p className="section-label">{isArabic ? "المشروعات" : "PROJECTS"}</p>
              <h2>{isArabic ? "أداء يليق بالمشروع." : "Performance that belongs in the project."}</h2>
            </div>
            <p className="section-intro">
              {isArabic
                ? "واجهة جاهزة لاستقبال صور ومشروعات العميل الحقيقية."
                : "A premium project showcase ready for the client’s real project photography and case studies."}
            </p>
          </div>

          <div className="project-feature">
            <div className="project-copy">
              <span className="project-overline">ALU SMART / PROJECTS</span>
              <h3>{isArabic ? "واجهة المشروع تبدأ من التفاصيل." : "A project begins with the details."}</h3>
              <p>
                {isArabic
                  ? "سيتم تحويل هذا القسم إلى معرض مشروعات فعلي عند استلام صور وبيانات العميل."
                  : "This section is structured to become a real project gallery once the client’s photography and project data are supplied."}
              </p>
              <a href="#contact" className="button button-secondary">
                {isArabic ? "أرسل بيانات المشروع" : "Submit Project Details"}
              </a>
            </div>
            <div className="project-art" aria-hidden="true">
              <div className="building">
                <span /><span /><span /><span /><span /><span /><span /><span />
              </div>
              <div className="project-light" />
              <div className="project-label">ARCHITECTURE / 01</div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="catalog-section">
        <div className="container catalog-inner">
          <div>
            <span className="catalog-index">04 / 04</span>
            <p className="section-label">{isArabic ? "الكتالوج" : "PRODUCT CATALOG"}</p>
            <h2>{isArabic ? "كتالوج منظم. وصول أسرع." : "A structured catalog. Faster access."}</h2>
            <p>
              {isArabic
                ? "بنية جاهزة لكتالوج كبير مع تصنيفات، بحث، تفاصيل المنتجات وملفات PDF."
                : "A scalable structure for a large catalog with categories, search, product details and optimized PDF delivery."}
            </p>
          </div>
          <a href="#contact" className="button button-dark">
            {isArabic ? "طلب الكتالوج" : "Request Catalog"} <span>↗</span>
          </a>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <p className="section-label">{isArabic ? "تواصل معنا" : "CONTACT"}</p>
            <h2>{isArabic ? "لنبنِ الحل المناسب." : "Let’s build the right solution."}</h2>
            <p className="contact-lead">
              {isArabic
                ? "شاركنا نوع المشروع والمتطلبات الأساسية، وسنبدأ من هناك."
                : "Share the project type and the essentials. We’ll start from there."}
            </p>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label>
              <span>{isArabic ? "الاسم" : "Name"}</span>
              <input type="text" placeholder={isArabic ? "اسمك" : "Your name"} />
            </label>
            <label>
              <span>{isArabic ? "البريد الإلكتروني" : "Email"}</span>
              <input type="email" placeholder={isArabic ? "البريد الإلكتروني" : "you@company.com"} />
            </label>
            <label>
              <span>{isArabic ? "رسالتك" : "Message"}</span>
              <textarea rows={5} placeholder={isArabic ? "أخبرنا عن مشروعك" : "Tell us about your project"} />
            </label>
            <button type="submit" className="button button-primary">
              {isArabic ? "إرسال الطلب" : "Send Request"} <span>↗</span>
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#" className="logo">ALU<span>SMART</span></a>
          <p>© {new Date().getFullYear()} ALU SMART. {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}</p>
          <button className="footer-language" onClick={() => setLanguage(isArabic ? "en" : "ar")}>
            {isArabic ? "English" : "العربية"}
          </button>
        </div>
      </footer>
    </main>
  );
}
