"use client";

import { useState } from "react";

const solutions = [
  { number:"01", title:"Architectural Systems", arTitle:"الأنظمة المعمارية", description:"Aluminum systems for façades, openings and contemporary architectural applications.", arDescription:"أنظمة ألومنيوم للواجهات والفتحات والتطبيقات المعمارية المعاصرة." },
  { number:"02", title:"Industrial Solutions", arTitle:"الحلول الصناعية", description:"Reliable aluminum solutions for demanding environments, assemblies and project requirements.", arDescription:"حلول ألومنيوم موثوقة للبيئات والتطبيقات الصناعية ومتطلبات المشروعات." },
  { number:"03", title:"Custom Profiles", arTitle:"المقاطع المخصصة", description:"Profiles developed around specific dimensions, functions and project requirements.", arDescription:"مقاطع هندسية مخصصة وفق الأبعاد والوظائف ومتطلبات المشروع." },
];

const projects = [
  { number:"01", title:"Architectural Facades", arTitle:"واجهات معمارية", tag:"ARCHITECTURAL / 01", arTag:"معماري / 01", text:"A presentation framework prepared for a premium façade case study.", arText:"إطار عرض مجهز لدراسة حالة خاصة بالواجهات المعمارية." },
  { number:"02", title:"Industrial Applications", arTitle:"تطبيقات صناعية", tag:"INDUSTRIAL / 02", arTag:"صناعي / 02", text:"A structured case-study space for demanding industrial applications.", arText:"مساحة منظمة لعرض دراسات حالات التطبيقات الصناعية." },
  { number:"03", title:"Custom Profile Project", arTitle:"مشروع مقطع مخصص", tag:"CUSTOM / 03", arTag:"مخصص / 03", text:"A dedicated frame for custom engineering and profile development.", arText:"إطار مخصص لعرض الحلول الهندسية وتطوير المقاطع." },
];

const process = [
  ["01","Brief","We understand the project, application and required outcome.","نفهم المشروع والاستخدام والنتيجة المطلوبة."],
  ["02","Engineering","Requirements become a precise technical direction.","نحوّل المتطلبات إلى اتجاه تقني واضح."],
  ["03","Solution","The right aluminum system or custom profile is selected.","نختار نظام الألومنيوم أو المقطع المناسب."],
  ["04","Delivery","A clear path from approved solution to execution.","مسار واضح من اعتماد الحل إلى التنفيذ."],
];

export default function Home() {
  const [language,setLanguage]=useState<"en"|"ar">("en");
  const ar=language==="ar";

  return (
    <main dir={ar?"rtl":"ltr"} className="site-shell">
      <header className="site-header">
        <div className="container nav">
          <a href="#" className="logo">ALU<span>SMART</span></a>
          <nav className="nav-links">
            <a href="#about">{ar?"من نحن":"About"}</a>
            <a href="#solutions">{ar?"الحلول":"Solutions"}</a>
            <a href="#projects">{ar?"المشروعات":"Projects"}</a>
            <a href="/products">{ar?"الكتالوج":"Catalog"}</a>
            <a href="#contact">{ar?"تواصل":"Contact"}</a>
          </nav>
          <button className="language-button" onClick={()=>setLanguage(ar?"en":"ar")}>{ar?"EN":"عربي"}</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-noise"/><div className="hero-grid"/>
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-line"/>{ar?"حلول ألومنيوم متقدمة":"ADVANCED ALUMINUM SOLUTIONS"}</div>
            <h1>{ar?<>نصنع حلولًا<br/><em>تدوم.</em></>:<>Aluminum,<br/><em>engineered to last.</em></>}</h1>
            <p className="hero-description">{ar?"من الأنظمة المعمارية إلى المقاطع المخصصة، نقدم حلولًا تجمع بين الهندسة الدقيقة والتصميم والأداء.":"From architectural systems to custom profiles, we shape aluminum solutions around precision, design and performance."}</p>
            <div className="hero-actions">
              <a href="#solutions" className="button button-primary">{ar?"استكشف الحلول":"Explore Solutions"} <span>↗</span></a>
              <a href="#contact" className="button button-secondary">{ar?"ابدأ محادثة":"Start a Conversation"}</a>
            </div>
            <div className="hero-note"><span>QATAR</span><span>{ar?"واجهات • صناعي • مخصص":"Architectural • Industrial • Custom"}</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract aluminum engineering visual">
            <div className="art-glow"/><div className="art-ring ring-a"/><div className="art-ring ring-b"/>
            <div className="art-slab"><div className="slab-edge"/><div className="slab-shine"/><div className="slab-ribs"/>
              <div className="slab-copy"><span>ALU / 01</span><strong>SMART</strong><small>PRECISION SYSTEMS</small></div>
            </div>
            <div className="art-tag tag-top">ENGINEERED</div><div className="art-tag tag-bottom">01 — 04</div>
          </div>
        </div>
      </section>

      <section className="signal-bar"><div className="container signal-grid">
        {["Precision engineering","Architectural systems","Industrial solutions","Custom profiles"].map((x,i)=>
          <div key={x}><strong>0{i+1}</strong><span>{ar?["هندسة دقيقة","أنظمة معمارية","حلول صناعية","مقاطع مخصصة"][i]:x}</span></div>
        )}
      </div></section>

      <section id="about" className="section about-section"><div className="container about-grid">
        <div className="section-index">01 / 04</div>
        <div><p className="section-label">{ar?"من نحن":"ABOUT ALU SMART"}</p><h2>{ar?"الألومنيوم ليس مجرد مادة. إنه نظام من الدقة.":"Aluminum is not just a material. It is a system of precision."}</h2></div>
        <div className="section-copy">
          <p>{ar?"ALU SMART منصة متخصصة في حلول الألومنيوم، صُممت لتقديم تجربة واضحة من فهم احتياج المشروع إلى اختيار الحل المناسب.":"ALU SMART is a focused aluminum solutions platform designed to make the path from project requirement to the right solution clear and precise."}</p>
          <p>{ar?"نمزج بين التفكير الهندسي واللغة البصرية الحديثة لعرض الأنظمة والمقاطع والحلول للمشروعات المعاصرة.":"We combine engineering thinking with a modern visual language to present systems, profiles and solutions for contemporary projects."}</p>
          <a href="#contact" className="text-link">{ar?"تحدث مع فريق ALU SMART ↗":"Talk to ALU SMART ↗"}</a>
        </div>
      </div></section>

      <section id="solutions" className="section solutions-section"><div className="container">
        <div className="section-topline"><div><div className="section-index">02 / 04</div><p className="section-label">{ar?"الحلول":"SOLUTIONS"}</p><h2>{ar?"مصمم حول المشروع.":"Designed around the project."}</h2></div>
          <p className="section-intro">{ar?"ثلاثة مسارات واضحة تساعد العميل على الوصول إلى الحل المناسب.":"Three clear solution paths help move a project toward the right aluminum application."}</p></div>
        <div className="solutions-grid">{solutions.map(item=><article className="solution-card" key={item.number}>
          <div className="card-top"><span>{item.number}</span><span className="card-arrow">↗</span></div>
          <div className="solution-shape"><i/><i/><i/></div>
          <h3>{ar?item.arTitle:item.title}</h3><p>{ar?item.arDescription:item.description}</p>
          <a href="#contact">{ar?"ناقش الحل":"Discuss solution"} <span>→</span></a>
        </article>)}</div>
      </div></section>

      <section className="process-section"><div className="container">
        <div className="process-heading"><p className="section-label">{ar?"طريقة العمل":"HOW WE WORK"}</p><h2>{ar?"من المتطلبات إلى الحل.":"From requirement to solution."}</h2></div>
        <div className="process-grid">{process.map(([n,en,d,ard])=><div className="process-item" key={n}><span>{n}</span><h3>{ar?["المتطلبات","الهندسة","الحل","التنفيذ"][Number(n)-1]:en}</h3><p>{ar?ard:d}</p></div>)}</div>
      </div></section>

      <section id="projects" className="section projects-section"><div className="container">
        <div className="section-topline"><div><div className="section-index">03 / 04</div><p className="section-label">{ar?"المشروعات":"PROJECTS"}</p><h2>{ar?"أداء يليق بالمشروع.":"Performance that belongs in the project."}</h2></div>
          <p className="section-intro">{ar?"قسم مهيأ لعرض مشروعات ALU SMART الحقيقية عند استلام الصور والبيانات.":"A premium project showcase prepared for ALU SMART’s real photography and case studies."}</p></div>
        <div className="projects-showcase">
          <div className="project-feature">
            <div className="project-copy"><span className="project-overline">ALU SMART / PROJECTS</span><h3>{ar?"المشروع يبدأ من التفاصيل.":"A project begins with the details."}</h3>
              <p>{ar?"مساحة عرض جاهزة لاستقبال صور المشروع الحقيقية، الموقع، نطاق العمل والنتائج عند استلام بيانات العميل.":"A premium case-study frame ready for the real project photography, location, scope and results once the client data is supplied."}</p>
              <a href="#contact" className="button button-secondary">{ar?"أرسل بيانات المشروع":"Submit Project Details"}</a></div>
            <div className="project-art project-art-main" aria-hidden="true"><div className="building">{Array.from({length:8},(_,i)=><span key={i}/>)}</div><div className="project-light"/><div className="project-label">ARCHITECTURE / 01</div></div>
          </div>
          <div className="project-mini-grid">{projects.map((project,i)=>
            <article className="project-mini-card" key={project.number}>
              <div className={"project-mini-art mini-"+(i+1)}><span>{project.number}</span><div className="mini-structure">{Array.from({length:4},(_,j)=><i key={j}/>)}</div></div>
              <div className="project-mini-meta"><span>{ar?project.arTag:project.tag}</span><span>↗</span></div>
              <h3>{ar?project.arTitle:project.title}</h3>
              <p>{ar?project.arText:project.text}</p>
            </article>
          )}</div>
        </div>
      </div></section>

      <section id="catalog" className="catalog-section"><div className="container catalog-inner">
        <div><span className="catalog-index">04 / 04</span><p className="section-label">{ar?"الكتالوج":"PRODUCT CATALOG"}</p><h2>{ar?"كتالوج منظم. وصول أسرع.":"A structured catalog. Faster access."}</h2>
          <p>{ar?"استكشف بنية المنتجات القابلة للتوسع مع التصنيفات والبحث وصفحات التفاصيل.":"Explore the scalable product structure with categories, search and product detail pages."}</p></div>
        <a href="/products" className="button button-dark">{ar?"استكشف المنتجات":"Explore Catalog"} <span>↗</span></a>
      </div></section>

      <section id="contact" className="section contact-section"><div className="container contact-grid">
        <div><p className="section-label">{ar?"تواصل معنا":"CONTACT"}</p><h2>{ar?"لنبنِ الحل المناسب.":"Let’s build the right solution."}</h2><p className="contact-lead">{ar?"شاركنا نوع المشروع والمتطلبات الأساسية، وسنبدأ من هناك.":"Share the project type and the essentials. We’ll start from there."}</p></div>
        <form className="contact-form" onSubmit={e=>e.preventDefault()}>
          <label><span>{ar?"الاسم":"Name"}</span><input required placeholder={ar?"اسمك":"Your name"}/></label>
          <label><span>{ar?"البريد الإلكتروني":"Email"}</span><input required type="email" placeholder={ar?"البريد الإلكتروني":"you@company.com"}/></label>
          <label><span>{ar?"رسالتك":"Message"}</span><textarea required rows={5} placeholder={ar?"أخبرنا عن مشروعك":"Tell us about your project"}/></label>
          <button type="submit" className="button button-primary">{ar?"إرسال الطلب":"Send Request"} <span>↗</span></button>
        </form>
      </div></section>

      <footer className="footer"><div className="container footer-inner"><a href="#" className="logo">ALU<span>SMART</span></a><p>© {new Date().getFullYear()} ALU SMART. {ar?"جميع الحقوق محفوظة.":"All rights reserved."}</p><button className="footer-language" onClick={()=>setLanguage(ar?"en":"ar")}>{ar?"English":"العربية"}</button></div></footer>
    </main>
  );
}
