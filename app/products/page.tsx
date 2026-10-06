"use client";

import { useMemo, useState } from "react";
import { categoryLabels, products, type ProductCategory } from "../lib/catalog";

type Filter = "all" | ProductCategory;

export default function ProductsPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const isArabic = language === "ar";

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = filter === "all" || product.category === filter;
      const searchMatch =
        !normalized ||
        product.name.toLowerCase().includes(normalized) ||
        product.arName.includes(query.trim()) ||
        product.code.toLowerCase().includes(normalized);
      return categoryMatch && searchMatch;
    });
  }, [filter, query]);

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className="catalog-page">
      <header className="site-header">
        <div className="container nav">
          <a href="/" className="logo">ALU<span>SMART</span></a>
          <nav className="nav-links">
            <a href="/#about">{isArabic ? "من نحن" : "About"}</a>
            <a href="/products">{isArabic ? "المنتجات" : "Products"}</a>
            <a href="/#projects">{isArabic ? "المشروعات" : "Projects"}</a>
            <a href="/#contact">{isArabic ? "تواصل" : "Contact"}</a>
          </nav>
          <button className="language-button" onClick={() => setLanguage(isArabic ? "en" : "ar")}>
            {isArabic ? "EN" : "عربي"}
          </button>
        </div>
      </header>

      <section className="catalog-hero">
        <div className="container catalog-hero-inner">
          <div>
            <span className="catalog-index">PRODUCTS / CATALOG</span>
            <p className="section-label">{isArabic ? "كتالوج المنتجات" : "PRODUCT CATALOG"}</p>
            <h1>{isArabic ? "حلول الألومنيوم، منظمة بوضوح." : "Aluminum solutions, clearly organized."}</h1>
            <p className="catalog-lead">
              {isArabic
                ? "واجهة كتالوج قابلة للتوسع لاستقبال بيانات ومنتجات العميل الفعلية."
                : "A scalable catalog interface ready for the client’s real product data, images and documents."}
            </p>
          </div>
          <div className="catalog-count">
            <strong>{products.length}</strong>
            <span>{isArabic ? "عينة واجهة" : "interface samples"}</span>
            <small>{isArabic ? "جاهزة لاستبدالها ببيانات الكتالوج الفعلية" : "ready to be replaced by the real catalog data"}</small>
          </div>
        </div>
      </section>

      <section className="catalog-controls-section">
        <div className="container">
          <div className="catalog-controls">
            <div className="filter-group" role="tablist" aria-label="Product categories">
              {(["all", "architectural", "industrial", "custom"] as Filter[]).map((item) => (
                <button
                  key={item}
                  className={filter === item ? "filter-button active" : "filter-button"}
                  onClick={() => setFilter(item)}
                >
                  {item === "all"
                    ? isArabic ? "الكل" : "All"
                    : isArabic ? categoryLabels[item].ar : categoryLabels[item].en}
                </button>
              ))}
            </div>
            <label className="catalog-search">
              <span>{isArabic ? "بحث" : "Search"}</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={isArabic ? "اسم المنتج أو الكود" : "Product name or code"}
              />
            </label>
          </div>

          <div className="catalog-results-head">
            <span>{filtered.length} {isArabic ? "عنصرًا" : "items"}</span>
            <span>{isArabic ? "عرض قابل للتوسع" : "Scalable catalog view"}</span>
          </div>

          <div className="catalog-grid">
            {filtered.map((product) => (
              <article className="catalog-card" key={product.id}>
                <div className="catalog-card-visual">
                  <div className="profile-visual"><i /><i /><i /></div>
                  <span>{product.code}</span>
                </div>
                <div className="catalog-card-meta">
                  <span>{isArabic ? categoryLabels[product.category].ar : categoryLabels[product.category].en}</span>
                  <span>↗</span>
                </div>
                <h2>{isArabic ? product.arName : product.name}</h2>
                <p>
                  {isArabic
                    ? "تفاصيل المنتج والصورة والملف الفني ستُضاف بعد استلام الكتالوج الأصلي."
                    : "Product details, photography and technical documentation will be added from the original catalog."}
                </p>
                <a href="/#contact">{isArabic ? "طلب التفاصيل" : "Request details"} <span>→</span></a>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="catalog-empty">
              {isArabic ? "لا توجد نتائج مطابقة." : "No matching catalog items."}
            </div>
          )}
        </div>
      </section>

      <section className="catalog-cta">
        <div className="container catalog-cta-inner">
          <div>
            <p className="section-label">{isArabic ? "الخطوة التالية" : "NEXT STEP"}</p>
            <h2>{isArabic ? "أرسل الكتالوج الحقيقي، ونحوّل هذه البنية إلى قاعدة المنتجات النهائية." : "Send the real catalog, and this structure becomes the final product library."}</h2>
          </div>
          <a href="/#contact" className="button button-primary">{isArabic ? "تواصل معنا" : "Start the catalog build"} ↗</a>
        </div>
      </section>
    </main>
  );
}
