"use client";

import { useState } from "react";
import Link from "next/link";
import { categoryLabels, getProductById } from "../../lib/catalog";

type Props = { params: Promise<{ id: string }> };

export default function ProductDetailsPage({ params }: Props) {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [id, setId] = useState<string | null>(null);
  const ar = language === "ar";

  if (!id) {
    params.then((value) => setId(value.id));
    return <main className="product-detail-page"><div className="product-loading">Loading product…</div></main>;
  }

  const product = getProductById(id);

  if (!product) {
    return (
      <main className="product-detail-page" dir={ar ? "rtl" : "ltr"}>
        <header className="site-header"><div className="container nav"><Link href="/" className="logo">ALU<span>SMART</span></Link><Link href="/products" className="language-button">{ar ? "الكتالوج" : "Catalog"}</Link></div></header>
        <div className="container product-not-found"><p className="section-label">404 / PRODUCT</p><h1>{ar ? "المنتج غير موجود" : "Product not found"}</h1><p>{ar ? "العنصر المطلوب غير متاح في الكتالوج." : "The requested catalog item is not available."}</p><Link href="/products" className="button button-primary">{ar ? "العودة للكتالوج" : "Back to catalog"}</Link></div>
      </main>
    );
  }

  const category = ar ? categoryLabels[product.category].ar : categoryLabels[product.category].en;

  return (
    <main className="product-detail-page" dir={ar ? "rtl" : "ltr"}>
      <header className="site-header">
        <div className="container nav">
          <Link href="/" className="logo">ALU<span>SMART</span></Link>
          <nav className="nav-links">
            <Link href="/#about">{ar ? "من نحن" : "About"}</Link>
            <Link href="/products">{ar ? "المنتجات" : "Products"}</Link>
            <Link href="/#projects">{ar ? "المشروعات" : "Projects"}</Link>
            <Link href="/#contact">{ar ? "تواصل" : "Contact"}</Link>
          </nav>
          <button className="language-button" onClick={() => setLanguage(ar ? "en" : "ar")}>{ar ? "EN" : "عربي"}</button>
        </div>
      </header>

      <section className="product-detail-hero-premium">
        <div className="container">
          <Link href="/products" className="product-breadcrumb">{ar ? "← العودة إلى الكتالوج" : "← Back to catalog"}</Link>
          <div className="product-detail-grid-premium">
            <div className="product-detail-visual-premium">
              <div className="product-visual-orbit orbit-one" />
              <div className="product-visual-orbit orbit-two" />
              <div className={"product-profile-render render-" + product.category}>
                <span /><span /><span /><span />
              </div>
              <div className="product-visual-caption"><span>{product.code}</span><span>{category}</span></div>
              <div className="product-visual-mark">ALU / SMART</div>
            </div>

            <div className="product-detail-copy-premium">
              <p className="section-label">{ar ? "تفاصيل المنتج" : "PRODUCT DETAIL"}</p>
              <span className="product-code">{product.code}</span>
              <h1>{ar ? product.arName : product.name}</h1>
              <p className="product-detail-subtitle">{ar ? product.name : product.arName}</p>
              <p className="product-description">{ar
                ? "صفحة منتج احترافية مجهزة لاستقبال صورة المنتج الأصلية والمواصفات والأبعاد والملفات الفنية من كتالوج ALU SMART."
                : "A premium product page prepared to receive ALU SMART’s original photography, dimensions, technical specifications and documentation."}</p>
              <div className="product-detail-actions">
                <Link href="/#contact" className="button button-primary">{ar ? "اطلب تفاصيل المنتج ↗" : "Request product details ↗"}</Link>
                <Link href="/products" className="button button-secondary">{ar ? "كل المنتجات" : "All products"}</Link>
              </div>
              <div className="product-proof-row">
                <div><strong>01</strong><span>{ar ? "بيانات منظمة" : "Structured data"}</span></div>
                <div><strong>02</strong><span>{ar ? "جاهز للصور" : "Image ready"}</span></div>
                <div><strong>03</strong><span>{ar ? "قابل للتوسع" : "Scalable"}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-spec-section">
        <div className="container">
          <div className="product-info-grid">
            <div>
              <p className="section-label">{ar ? "معلومات المنتج" : "PRODUCT INFORMATION"}</p>
              <h2>{ar ? "قالب واحد، جاهز للكتالوج الفني الحقيقي." : "One premium template, ready for the real technical catalog."}</h2>
              <p className="product-section-lead">{ar ? "عند استلام ملفات ALU SMART الأصلية، يتم ملء هذه الخانات بالبيانات الفعلية دون اختراع أي مواصفات." : "When the original ALU SMART source files arrive, this structure is populated with verified data without inventing specifications."}</p>
            </div>
            <div className="product-info-list">
              <div><span>{ar ? "الفئة" : "Category"}</span><strong>{category}</strong></div>
              <div><span>{ar ? "كود المنتج" : "Product code"}</span><strong>{product.code}</strong></div>
              <div><span>{ar ? "الصورة الأصلية" : "Original photography"}</span><strong>{ar ? "جاهزة للاستبدال" : "Ready to replace"}</strong></div>
              <div><span>{ar ? "المواصفات الفنية" : "Technical specifications"}</span><strong>{ar ? "في انتظار ملف العميل" : "Awaiting client source"}</strong></div>
              <div><span>{ar ? "الملف الفني / PDF" : "Technical file / PDF"}</span><strong>{ar ? "جاهز للربط" : "Ready to link"}</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-next-section product-next-premium">
        <div className="container">
          <p className="section-label">{ar ? "محرك الكتالوج" : "CATALOG ENGINE"}</p>
          <h2>{ar ? "من هذا المنتج إلى مكتبة ALU SMART كاملة." : "From one product to the complete ALU SMART library."}</h2>
          <p>{ar ? "نفس القالب يمكنه خدمة عشرات أو مئات المنتجات مع الحفاظ على تجربة موحدة وسريعة." : "The same architecture can serve dozens or hundreds of products while keeping the experience consistent and fast."}</p>
          <Link href="/products" className="button button-primary">{ar ? "استكشف الكتالوج ↗" : "Explore catalog ↗"}</Link>
        </div>
      </section>
    </main>
  );
}
