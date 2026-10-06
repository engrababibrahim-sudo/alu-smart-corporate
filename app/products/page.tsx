"use client";

import { useMemo, useState } from "react";
import {
  categoryLabels,
  products,
  type ProductCategory,
} from "../lib/catalog";

type Filter = "all" | ProductCategory;

export default function ProductsPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const ar = language === "ar";

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        filter === "all" || product.category === filter;

      const matchesSearch =
        !normalizedQuery ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.code.toLowerCase().includes(normalizedQuery) ||
        product.arName.includes(query.trim());

      return matchesCategory && matchesSearch;
    });
  }, [filter, query]);

  return (
    <main
      dir={ar ? "rtl" : "ltr"}
      className="catalog-page"
    >
      {/* =========================
          HEADER
      ========================== */}
      <header className="site-header">
        <div className="container nav">
          <a href="/" className="logo">
            ALU<span>SMART</span>
          </a>

          <nav className="nav-links">
            <a href="/#about">
              {ar ? "من نحن" : "About"}
            </a>

            <a href="/products">
              {ar ? "المنتجات" : "Products"}
            </a>

            <a href="/#projects">
              {ar ? "المشروعات" : "Projects"}
            </a>

            <a href="/#contact">
              {ar ? "تواصل" : "Contact"}
            </a>
          </nav>

          <button
            type="button"
            className="language-button"
            onClick={() => setLanguage(ar ? "en" : "ar")}
            aria-label={
              ar
                ? "Switch to English"
                : "التبديل إلى العربية"
            }
          >
            {ar ? "EN" : "عربي"}
          </button>
        </div>
      </header>

      {/* =========================
          HERO
      ========================== */}
      <section className="catalog-hero catalog-hero-premium">
        <div className="container catalog-hero-inner">
          <div>
            <span className="catalog-index">
              PRODUCTS / 01
            </span>

            <p className="section-label">
              {ar
                ? "كتالوج المنتجات"
                : "PRODUCT CATALOG"}
            </p>

            <h1>
              {ar ? (
                <>
                  حلول ألومنيوم
                  <br />
                  <em>مصممة بدقة.</em>
                </>
              ) : (
                <>
                  Aluminum solutions,
                  <br />
                  <em>defined precisely.</em>
                </>
              )}
            </h1>

            <p className="catalog-lead">
              {ar
                ? "استكشف مجموعة منظمة من حلول ومنتجات ALU SMART المعمارية والمعدنية وأنظمة الألومنيوم."
                : "Explore ALU SMART’s structured range of architectural, industrial and aluminum system solutions."}
            </p>
          </div>

          <div className="catalog-count">
            <strong>{products.length}</strong>

            <span>
              {ar
                ? "عنصر في الكتالوج"
                : "catalog items"}
            </span>

            <small>
              {ar
                ? "أسماء المنتجات مبنية على بيانات ALU SMART المنشورة."
                : "Product names are sourced from ALU SMART’s published company profile."}
            </small>
          </div>
        </div>
      </section>

      {/* =========================
          CONTROLS
      ========================== */}
      <section className="catalog-controls-section">
        <div className="container">

          <div className="catalog-controls">

            <div
              className="filter-group"
              aria-label="Product categories"
            >
              {(
                [
                  "all",
                  "architectural",
                  "industrial",
                  "custom",
                ] as Filter[]
              ).map((item) => (
                <button
                  type="button"
                  key={item}
                  className={
                    filter === item
                      ? "filter-button active"
                      : "filter-button"
                  }
                  onClick={() => setFilter(item)}
                >
                  {item === "all"
                    ? ar
                      ? "الكل"
                      : "All"
                    : ar
                    ? categoryLabels[item].ar
                    : categoryLabels[item].en}
                </button>
              ))}
            </div>

            <label className="catalog-search">
              <span>
                {ar
                  ? "بحث في الكتالوج"
                  : "SEARCH CATALOG"}
              </span>

              <input
                type="search"
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder={
                  ar
                    ? "ابحث بالاسم أو الكود"
                    : "Search by product name or code"
                }
              />
            </label>
          </div>

          {/* =========================
              RESULTS HEADER
          ========================== */}
          <div className="catalog-results-head">
            <span>
              {filtered.length}{" "}
              {ar ? "عنصرًا" : "products"}
            </span>

            <span>
              {ar
                ? "مكتبة منتجات قابلة للتوسع"
                : "VERIFIED PRODUCT LIBRARY"}
            </span>
          </div>

          {/* =========================
              PRODUCT GRID
          ========================== */}
          <div className="catalog-grid">
            {filtered.map((product, index) => (
              <a
                href={`/products/${product.id}`}
                className="catalog-card catalog-card-premium"
                key={product.id}
              >
                {/* Visual */}
                <div className="catalog-card-visual">

                  <div
                    className={`profile-visual profile-${
                      (index % 3) + 1
                    }`}
                    aria-hidden="true"
                  >
                    <i />
                    <i />
                    <i />
                  </div>

                  <span className="catalog-card-code">
                    {product.code}
                  </span>

                  <span className="catalog-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="catalog-card-line" />
                </div>

                {/* Meta */}
                <div className="catalog-card-meta">
                  <span>
                    {ar
                      ? categoryLabels[
                          product.category
                        ].ar
                      : categoryLabels[
                          product.category
                        ].en}
                  </span>

                  <span aria-hidden="true">
                    ↗
                  </span>
                </div>

                {/* Name */}
                <h2>
                  {ar
                    ? product.arName
                    : product.name}
                </h2>

                {/* Description */}
                <p>
                  {ar
                    ? product.arDescription ||
                      "حل من حلول ALU SMART يمكن استكمال بياناته الفنية وصوره ووثائقه الأصلية من ملفات المشروع."
                    : product.description ||
                      "An ALU SMART solution ready for verified photography, technical specifications and original documentation."}
                </p>

                {/* Link */}
                <span className="catalog-card-link">
                  {ar
                    ? "استكشف المنتج"
                    : "Explore product"}

                  <b aria-hidden="true">
                    ↗
                  </b>
                </span>
              </a>
            ))}
          </div>

          {/* =========================
              EMPTY STATE
          ========================== */}
          {!filtered.length && (
            <div className="catalog-empty">
              {ar
                ? "لا توجد نتائج مطابقة لبحثك."
                : "No matching catalog items found."}
            </div>
          )}
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="catalog-cta catalog-cta-premium">
        <div className="container catalog-cta-inner">

          <div>
            <p className="section-label">
              {ar
                ? "الخطوة التالية"
                : "NEXT STEP"}
            </p>

            <h2>
              {ar
                ? "أرسل الصور والبيانات الفنية والكتالوج الأصلي لتحويل هذه البنية إلى مكتبة منتجات نهائية."
                : "Add the original photography, technical data and catalog files to turn this structure into the final product library."}
            </h2>
          </div>

          <a
            href="/#contact"
            className="button button-primary"
          >
            {ar
              ? "ابدأ بناء الكتالوج"
              : "Start catalog build"}

            <span aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
