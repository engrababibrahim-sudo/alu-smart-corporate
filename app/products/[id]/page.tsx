import type { Metadata } from "next";
import Link from "next/link";
import { getProductById, categoryLabels, products } from "../../lib/catalog";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product not found | ALU SMART" };
  return { title: product.name + " | ALU SMART", description: product.name + " — ALU SMART product catalog." };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return <main className="product-detail-page"><div className="container product-not-found"><p className="section-label">404 / PRODUCT</p><h1>Product not found</h1><p>The requested catalog item is not available.</p><Link href="/products" className="button button-primary">Back to catalog</Link></div></main>;
  return (
    <main className="product-detail-page">
      <header className="site-header"><div className="container nav"><Link href="/" className="logo">ALU<span>SMART</span></Link><nav className="nav-links"><Link href="/#about">About</Link><Link href="/products">Products</Link><Link href="/#projects">Projects</Link><Link href="/#contact">Contact</Link></nav><Link href="/products" className="language-button">Catalog</Link></div></header>
      <section className="product-detail-hero"><div className="container"><Link href="/products" className="product-breadcrumb">← Back to catalog</Link>
        <div className="product-detail-grid"><div className="product-detail-visual"><div className="product-visual-frame"><div className="profile-visual large"><i /><i /><i /></div><span className="product-visual-code">{product.code}</span></div></div>
          <div className="product-detail-copy"><p className="section-label">{categoryLabels[product.category].en}</p><span className="product-code">{product.code}</span><h1>{product.name}</h1><p className="product-ar-name">{product.arName}</p>
            <p className="product-description">This product detail page is structured for ALU SMART&apos;s final catalog. Real product photography, technical specifications, dimensions and documents will be populated from the client&apos;s original source files.</p>
            <div className="product-detail-actions"><Link href="/#contact" className="button button-primary">Request product details ↗</Link><Link href="/products" className="button button-secondary">Back to catalog</Link></div>
          </div></div></div></section>
      <section className="product-info-section"><div className="container"><div className="product-info-grid"><div><p className="section-label">PRODUCT INFORMATION</p><h2>Prepared for the real technical catalog.</h2></div>
        <div className="product-info-list"><div><span>Category</span><strong>{categoryLabels[product.category].en}</strong></div><div><span>Product code</span><strong>{product.code}</strong></div><div><span>Photography</span><strong>Pending original assets</strong></div><div><span>Technical file</span><strong>Pending client source document</strong></div></div>
      </div></div></section>
      <section className="product-next-section"><div className="container"><p className="section-label">CATALOG ENGINE</p><h2>One product template, ready to scale across the full library.</h2><Link href="/products" className="button button-primary">Explore all products ↗</Link></div></section>
    </main>
  );
}