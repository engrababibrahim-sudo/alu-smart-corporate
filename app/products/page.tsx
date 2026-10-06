"use client";

import { useMemo, useState } from "react";
import { categoryLabels, products, type ProductCategory } from "../lib/catalog";

type Filter = "all" | ProductCategory;

export default function ProductsPage() {
  const [language, setLanguage] = useState<"en"|"ar">("en");
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const ar = language === "ar";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(p => (filter === "all" || p.category === filter) &&
      (!q || p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q) || p.arName.includes(query.trim())));
  }, [filter, query]);

  return (
    <main dir={ar ? "rtl":"ltr"} className="catalog-page">
      <header className="site-header"><div className="container nav">
        <a href="/" className="logo">ALU<span>SMART</span></a>
        <nav className="nav-links">
          <a href="/#about">{ar?"من نحن":"About"}</a><a href="/products">{ar?"المنتجات":"Products"}</a>
          <a href="/#projects">{ar?"المشروعات":"Projects"}</a><a href="/#contact">{ar?"تواصل":"Contact"}</a>
        </nav>
        <button className="language-button" onClick={()=>setLanguage(ar?"en":"ar")}>{ar?"EN":"عربي"}</button>
      </div></header>

      <section className="catalog-hero catalog-hero-premium">
        <div className="container catalog-hero-inner">
          <div>
            <span className="catalog-index">PRODUCTS / 01</span>
            <p className="section-label">{ar?"كتالوج المنتجات":"PRODUCT CATALOG"}</p>
            <h1>{ar?<>حلول ألومنيوم<br/><em>مصممة بوضوح.</em></>:<>Aluminum solutions,<br/><em>defined precisely.</em></>}</h1>
            <p className="catalog-lead">{ar?"استكشف بنية كتالوج منظمة وقابلة للتوسع، مصممة لاستقبال بيانات وصور ووثائق ALU SMART الفعلية.":"Explore a structured, scalable catalog architecture prepared for ALU SMART’s real products, photography and technical documents."}</p>
          </div>
          <div className="catalog-count"><strong>{products.length}</strong><span>{ar?"منتجات تجريبية":"demo products"}</span><small>{ar?"سيتم استبدالها ببيانات العميل الأصلية.":"Temporary interface data — ready for the client source catalog."}</small></div>
        </div>
      </section>

      <section className="catalog-controls-section">
        <div className="container">
          <div className="catalog-controls">
            <div className="filter-group" aria-label="Product categories">
              {(["all","architectural","industrial","custom"] as Filter[]).map(item =>
                <button key={item} className={filter===item?"filter-button active":"filter-button"} onClick={()=>setFilter(item)}>
                  {item==="all" ? (ar?"الكل":"All") : ar?categoryLabels[item].ar:categoryLabels[item].en}
                </button>
              )}
            </div>
            <label className="catalog-search"><span>{ar?"بحث في الكتالوج":"SEARCH CATALOG"}</span>
              <input value={query} onChange={e=>setQuery(e.target.value)} placeholder={ar?"ابحث بالاسم أو الكود":"Search by product name or code"} />
            </label>
          </div>

          <div className="catalog-results-head"><span>{filtered.length} {ar?"منتجًا":"products"}</span><span>{ar?"قاعدة منتجات قابلة للتوسع":"SCALABLE PRODUCT LIBRARY"}</span></div>

          <div className="catalog-grid">
            {filtered.map((product,index)=>
              <a href={"/products/"+product.id} className="catalog-card catalog-card-premium" key={product.id}>
                <div className="catalog-card-visual">
                  <div className={"profile-visual profile-"+((index%3)+1)}><i/><i/><i/></div>
                  <span className="catalog-card-code">{product.code}</span>
                  <span className="catalog-card-number">{String(index+1).padStart(2,"0")}</span>
                  <span className="catalog-card-line"/>
                </div>
                <div className="catalog-card-meta"><span>{ar?categoryLabels[product.category].ar:categoryLabels[product.category].en}</span><span>↗</span></div>
                <h2>{ar?product.arName:product.name}</h2>
                <p>{ar?"صفحة تفاصيل جاهزة للصورة والبيانات الفنية والوثائق الأصلية.":"A detail page prepared for photography, technical data and original documentation."}</p>
                <span className="catalog-card-link">{ar?"استكشف المنتج":"Explore product"} <b>↗</b></span>
              </a>
            )}
          </div>
          {!filtered.length && <div className="catalog-empty">{ar?"لا توجد نتائج مطابقة.":"No matching catalog items."}</div>}
        </div>
      </section>

      <section className="catalog-cta catalog-cta-premium"><div className="container catalog-cta-inner">
        <div><p className="section-label">{ar?"الخطوة التالية":"NEXT STEP"}</p>
          <h2>{ar?"أرسل الكتالوج الأصلي، وسنحوّل هذه البنية إلى مكتبة المنتجات النهائية.":"Bring the original catalog, and this structure becomes the final product library."}</h2></div>
        <a href="/#contact" className="button button-primary">{ar?"ابدأ بناء الكتالوج":"Start catalog build"} <span>↗</span></a>
      </div></section>
    </main>
  );
}
