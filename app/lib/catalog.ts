export type ProductCategory = "architectural" | "industrial" | "custom";

export type Product = {
  id: string;
  category: ProductCategory;
  name: string;
  arName: string;
  code: string;
  description?: string;
  arDescription?: string;
  image?: string;
};

export const categoryLabels: Record<ProductCategory, { en: string; ar: string }> = {
  architectural: { en: "Architectural Systems", ar: "الأنظمة المعمارية" },
  industrial: { en: "Industrial & Metal Works", ar: "الحلول الصناعية والمعدنية" },
  custom: { en: "Aluminum Systems", ar: "أنظمة الألومنيوم" },
};

/* Verified product/service names from Alu Smart's published company profile.
   Technical specifications and model numbers are added only when verified. */

export const products: Product[] = [
  { id: "curtain-wall-glazing", category: "architectural", name: "Curtain Wall, Structural & Conventional Glazing Systems", arName: "أنظمة الحوائط الستارية والزجاج الهيكلي والتقليدي", code: "AS-ARCH-001", description: "Curtain wall and glazing systems designed, fabricated and installed by Alu Smart.", arDescription: "أنظمة حوائط ستارية وزجاجية يتم تصميمها وتصنيعها وتركيبها بواسطة Alu Smart." },
  { id: "aluminum-windows", category: "architectural", name: "Aluminum Windows — Normal & Thermal", arName: "نوافذ الألومنيوم — عادية وحرارية", code: "AS-ARCH-002", description: "Aluminum window solutions in normal and thermal configurations.", arDescription: "حلول نوافذ ألومنيوم بتكوينات عادية وحرارية." },
  { id: "aluminum-doors", category: "architectural", name: "Aluminum Door Systems — Normal & Thermal", arName: "أنظمة أبواب الألومنيوم — عادية وحرارية", code: "AS-ARCH-003", description: "Aluminum door systems in normal and thermal configurations.", arDescription: "أنظمة أبواب ألومنيوم بتكوينات عادية وحرارية." },
  { id: "windows-doors-types", category: "architectural", name: "Windows & Doors — Hinged, Sliding, Tilt & Turn", arName: "النوافذ والأبواب — مفصلية وسحاب ومائلة ودوران", code: "AS-ARCH-004", description: "Multiple window and door opening types including hinged, sliding, tilt and turn.", arDescription: "تشكيلات متعددة لفتح النوافذ والأبواب، تشمل المفصلية والسحاب والمائلة والدوران." },
  { id: "aluminum-cladding", category: "architectural", name: "Aluminum Cladding Systems", arName: "أنظمة تكسية الألومنيوم", code: "AS-ARCH-005", description: "Aluminum cladding systems for architectural applications.", arDescription: "أنظمة تكسية من الألومنيوم للتطبيقات المعمارية." },
  { id: "aluminum-glass-partitions", category: "architectural", name: "Aluminum Glass Partitions", arName: "قواطع زجاجية بالألومنيوم", code: "AS-ARCH-006", description: "Aluminum-framed glass partition solutions.", arDescription: "حلول قواطع زجاجية بإطارات من الألومنيوم." },
  { id: "frameless-glass-partitions", category: "architectural", name: "Frameless Glass Partitions", arName: "قواطع زجاجية بدون إطارات", code: "AS-ARCH-007", description: "Frameless glass partition solutions.", arDescription: "حلول قواطع زجاجية بدون إطارات." },
  { id: "skylights", category: "architectural", name: "Skylight Systems", arName: "أنظمة المناور الزجاجية", code: "AS-ARCH-008", description: "Skylight systems for architectural projects.", arDescription: "أنظمة مناور زجاجية للمشروعات المعمارية." },
  { id: "aluminum-handrails", category: "industrial", name: "Aluminum Handrails", arName: "درابزين ألومنيوم", code: "AS-METAL-001", description: "Aluminum handrail solutions.", arDescription: "حلول درابزين من الألومنيوم." },
  { id: "steel-handrails", category: "industrial", name: "Steel Handrails", arName: "درابزين فولاذي", code: "AS-METAL-002", description: "Steel handrail solutions.", arDescription: "حلول درابزين من الفولاذ." },
  { id: "iron-fences", category: "industrial", name: "Wrought Iron Fences", arName: "أسوار الحديد المشغول", code: "AS-METAL-003", description: "Wrought iron fence solutions.", arDescription: "حلول أسوار من الحديد المشغول." },
  { id: "stainless-steel-handrail", category: "industrial", name: "Stainless Steel Handrails", arName: "درابزين من الستانلس ستيل", code: "AS-METAL-004", description: "Stainless steel handrail solutions.", arDescription: "حلول درابزين من الستانلس ستيل." },
  { id: "stainless-steel-mashrabia", category: "industrial", name: "Stainless Steel Mashrabia", arName: "مشربيات من الستانلس ستيل", code: "AS-METAL-005", description: "Stainless steel mashrabia solutions.", arDescription: "حلول مشربيات من الستانلس ستيل." },
  { id: "steel-structural", category: "industrial", name: "Steel Structural Works", arName: "الأعمال الإنشائية الفولاذية", code: "AS-METAL-006", description: "Steel structural works and solutions.", arDescription: "أعمال وحلول إنشائية من الفولاذ." },
  { id: "system-schueco", category: "custom", name: "SCHÜCO Aluminum Systems", arName: "أنظمة SCHÜCO للألومنيوم", code: "AS-SYS-001", description: "International aluminum system listed in Alu Smart's company profile.", arDescription: "نظام ألومنيوم دولي مذكور ضمن أنظمة Alu Smart." },
  { id: "system-technal", category: "custom", name: "TECHNAL Aluminum Systems", arName: "أنظمة TECHNAL للألومنيوم", code: "AS-SYS-002", description: "International aluminum system listed in Alu Smart's company profile.", arDescription: "نظام ألومنيوم دولي مذكور ضمن أنظمة Alu Smart." },
  { id: "system-gutmann", category: "custom", name: "GUTMANN Aluminum Systems", arName: "أنظمة GUTMANN للألومنيوم", code: "AS-SYS-003", description: "International aluminum system listed in Alu Smart's company profile.", arDescription: "نظام ألومنيوم دولي مذكور ضمن أنظمة Alu Smart." },
  { id: "system-balexco", category: "custom", name: "BALEXCO Aluminum Systems", arName: "أنظمة BALEXCO للألومنيوم", code: "AS-SYS-004", description: "Bahrain-based aluminum system listed in Alu Smart's company profile.", arDescription: "نظام ألومنيوم بحريني مذكور ضمن أنظمة Alu Smart." },
  { id: "system-alumil", category: "custom", name: "ALUMIL Aluminum Systems", arName: "أنظمة ALUMIL للألومنيوم", code: "AS-SYS-005", description: "International aluminum system listed in Alu Smart's company profile.", arDescription: "نظام ألومنيوم دولي مذكور ضمن أنظمة Alu Smart." },
  { id: "system-reynaers", category: "custom", name: "REYNAERS Aluminum Systems", arName: "أنظمة REYNAERS للألومنيوم", code: "AS-SYS-006", description: "Belgian aluminum system listed in Alu Smart's company profile.", arDescription: "نظام ألومنيوم بلجيكي مذكور ضمن أنظمة Alu Smart." },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
