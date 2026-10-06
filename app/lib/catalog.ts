export type ProductCategory = "architectural" | "industrial" | "custom";

export type Product = {
  id: string;
  category: ProductCategory;
  name: string;
  arName: string;
  code: string;
  image?: string;
};

export const categoryLabels: Record<ProductCategory, { en: string; ar: string }> = {
  architectural: { en: "Architectural Systems", ar: "الأنظمة المعمارية" },
  industrial: { en: "Industrial Solutions", ar: "الحلول الصناعية" },
  custom: { en: "Custom Profiles", ar: "المقاطع المخصصة" },
};

/*
  Catalog architecture:
  Add the client's real products here when the source catalog is received.
  No technical specifications are invented in this demo dataset.
*/
export const products: Product[] = [
  { id: "arch-001", category: "architectural", name: "Architectural System 01", arName: "نظام معماري 01", code: "ARCH-001" },
  { id: "arch-002", category: "architectural", name: "Architectural System 02", arName: "نظام معماري 02", code: "ARCH-002" },
  { id: "arch-003", category: "architectural", name: "Architectural System 03", arName: "نظام معماري 03", code: "ARCH-003" },
  { id: "arch-004", category: "architectural", name: "Architectural System 04", arName: "نظام معماري 04", code: "ARCH-004" },
  { id: "ind-001", category: "industrial", name: "Industrial Solution 01", arName: "حل صناعي 01", code: "IND-001" },
  { id: "ind-002", category: "industrial", name: "Industrial Solution 02", arName: "حل صناعي 02", code: "IND-002" },
  { id: "ind-003", category: "industrial", name: "Industrial Solution 03", arName: "حل صناعي 03", code: "IND-003" },
  { id: "ind-004", category: "industrial", name: "Industrial Solution 04", arName: "حل صناعي 04", code: "IND-004" },
  { id: "custom-001", category: "custom", name: "Custom Profile 01", arName: "مقطع مخصص 01", code: "CUS-001" },
  { id: "custom-002", category: "custom", name: "Custom Profile 02", arName: "مقطع مخصص 02", code: "CUS-002" },
  { id: "custom-003", category: "custom", name: "Custom Profile 03", arName: "مقطع مخصص 03", code: "CUS-003" },
  { id: "custom-004", category: "custom", name: "Custom Profile 04", arName: "مقطع مخصص 04", code: "CUS-004" },
];
