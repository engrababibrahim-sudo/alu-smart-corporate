"use client";

import { useState } from "react";

const products = [
  {
    title: "Architectural Systems",
    description:
      "Premium aluminum systems engineered for modern architectural applications.",
  },
  {
    title: "Industrial Solutions",
    description:
      "Reliable aluminum solutions designed for demanding industrial environments.",
  },
  {
    title: "Custom Profiles",
    description:
      "Precision-engineered profiles tailored to specific project requirements.",
  },
];

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const isArabic = language === "ar";

  return (
    <main dir={isArabic ? "rtl" : "ltr"}>
      <header className="site-header">
        <div className="container nav">
          <a href="#" className="logo">
            ALU<span>SMART</span>
          </a>

          <nav className="nav-links">
            <a href="#about">{isArabic ? "من نحن" : "About"}</a>
            <a href="#products">{isArabic ? "المنتجات" : "Products"}</a>
            <a href="#projects">{isArabic ? "المشروعات" : "Projects"}</a>
            <a href="#contact">{isArabic ? "تواصل معنا" : "Contact"}</a>
          </nav>

          <button
            className="language-button"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
          >
            {isArabic ? "EN" : "عربي"}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid" />

        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow">
              {isArabic
                ? "حلول الألومنيوم المتقدمة"
                : "ADVANCED ALUMINUM SOLUTIONS"}
            </p>

            <h1>
              {isArabic ? (
                <>
                  نصنع المستقبل
                  <br />
                  <span>من الألومنيوم.</span>
                </>
              ) : (
                <>
                  Engineering the
                  <br />
                  <span>Future in Aluminum.</span>
                </>
              )}
            </h1>

            <p className="hero-description">
              {isArabic
                ? "حلول ألومنيوم متطورة تجمع بين الدقة والهندسة والتصميم لتلبية متطلبات المشاريع الحديثة."
                : "Advanced aluminum solutions combining precision engineering, performance and modern design."}
            </p>

            <div className="hero-actions">
              <a href="#products" className="button button-primary">
                {isArabic ? "اكتشف منتجاتنا" : "Explore Products"}
              </a>

              <a href="#contact" className="button button-secondary">
                {isArabic ? "ابدأ مشروعك" : "Start a Project"}
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="metal-orbit orbit-one" />
            <div className="metal-orbit orbit-two" />
            <div className="metal-panel">
              <div className="metal-highlight" />
              <div className="metal-lines" />
              <div className="metal-label">
                <span>ALU</span>
                <strong>SMART</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div>
            <strong>300+</strong>
            <span>{isArabic ? "منتج وحل" : "Products & Solutions"}</span>
          </div>

          <div>
            <strong>25+</strong>
            <span>{isArabic ? "عامًا من الخبرة" : "Years Experience"}</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>{isArabic ? "دقة هندسية" : "Engineering Precision"}</span>
          </div>

          <div>
            <strong>Qatar</strong>
            <span>{isArabic ? "السوق المستهدف" : "Target Market"}</span>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container two-column">
          <div>
            <p className="section-label">
              {isArabic ? "من نحن" : "ABOUT ALU SMART"}
            </p>

            <h2>
              {isArabic
                ? "هندسة ألومنيوم مصممة للأداء."
                : "Aluminum engineering designed for performance."}
            </h2>
          </div>

          <div className="section-text">
            <p>
              {isArabic
                ? "ALU SMART هي منصة متخصصة في حلول الألومنيوم الحديثة، تجمع بين الهندسة الدقيقة والجودة والتصميم لتقديم حلول موثوقة للمشروعات المعمارية والصناعية."
                : "ALU SMART is a modern aluminum solutions platform combining precision engineering, quality and design to deliver reliable solutions for architectural and industrial projects."}
            </p>

            <a href="#contact" className="text-link">
              {isArabic ? "تعرّف علينا أكثر →" : "Discover more →"}
            </a>
          </div>
        </div>
      </section>

      <section id="products" className="section products-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">
                {isArabic ? "حلولنا" : "OUR SOLUTIONS"}
              </p>

              <h2>
                {isArabic
                  ? "منتجات مصممة لمشروعات حقيقية."
                  : "Solutions built for real projects."}
              </h2>
            </div>

            <p>
              {isArabic
                ? "استكشف مجموعة من حلول الألومنيوم المصممة لتلبية المتطلبات المختلفة."
                : "Explore aluminum solutions engineered for different project requirements."}
            </p>
          </div>

          <div className="products-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.title}>
                <div className="product-number">0{index + 1}</div>

                <div className="product-icon">
                  <span />
                </div>

                <h3>
                  {isArabic
                    ? index === 0
                      ? "الأنظمة المعمارية"
                      : index === 1
                        ? "الحلول الصناعية"
                        : "المقاطع المخصصة"
                    : product.title}
                </h3>

                <p>
                  {isArabic
                    ? index === 0
                      ? "أنظمة ألومنيوم متطورة للاستخدامات المعمارية الحديثة."
                      : index === 1
                        ? "حلول موثوقة للبيئات والتطبيقات الصناعية المت demanding."
                        : "مقاطع هندسية دقيقة مصممة وفق متطلبات المشروع."
                    : product.description}
                </p>

                <a href="#contact" className="card-link">
                  {isArabic ? "اكتشف الحل →" : "Explore solution →"}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section project-section">
        <div className="container project-panel">
          <div className="project-content">
            <p className="section-label">
              {isArabic ? "المشروعات" : "PROJECTS"}
            </p>

            <h2>
              {isArabic
                ? "من الفكرة إلى التنفيذ."
                : "From concept to execution."}
            </h2>

            <p>
              {isArabic
                ? "حلول متكاملة للمشروعات التي تحتاج إلى جودة ودقة وأداء طويل المدى."
                : "Integrated solutions for projects where quality, precision and long-term performance matter."}
            </p>

            <a href="#contact" className="button button-primary">
              {isArabic ? "ناقش مشروعك معنا" : "Discuss Your Project"}
            </a>
          </div>

          <div className="project-visual">
            <div className="project-frame">
              <div className="project-building">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="container catalog-inner">
          <div>
            <p className="section-label">
              {isArabic ? "كتالوج المنتجات" : "PRODUCT CATALOG"}
            </p>

            <h2>
              {isArabic
                ? "اكتشف مجموعة ALU SMART الكاملة."
                : "Explore the complete ALU SMART collection."}
            </h2>
          </div>

          <a href="#contact" className="button button-light">
            {isArabic ? "طلب الكتالوج" : "Request Catalog"}
          </a>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <p className="section-label">
              {isArabic ? "تواصل معنا" : "CONTACT"}
            </p>

            <h2>
              {isArabic
                ? "لنبنِ شيئًا ذكيًا معًا."
                : "Let's build something smart."}
            </h2>

            <p>
              {isArabic
                ? "أخبرنا عن مشروعك وسنبدأ من احتياجك."
                : "Tell us about your project and let's start with your requirements."}
            </p>
          </div>

          <form className="contact-form">
            <input
              type="text"
              placeholder={isArabic ? "الاسم" : "Name"}
              aria-label={isArabic ? "الاسم" : "Name"}
            />

            <input
              type="email"
              placeholder={isArabic ? "البريد الإلكتروني" : "Email"}
              aria-label={isArabic ? "البريد الإلكتروني" : "Email"}
            />

            <textarea
              placeholder={isArabic ? "رسالتك" : "Your message"}
              aria-label={isArabic ? "رسالتك" : "Your message"}
              rows={5}
            />

            <button type="button" className="button button-primary">
              {isArabic ? "إرسال الطلب" : "Send Request"}
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#" className="logo">
            ALU<span>SMART</span>
          </a>

          <p>
            © {new Date().getFullYear()} ALU SMART.{" "}
            {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>

          <button
            className="footer-language"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
          >
            {isArabic ? "English" : "العربية"}
          </button>
        </div>
      </footer>
    </main>
  );
}
