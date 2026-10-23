export type Product = "ERP" | "LMS" | "LOS" | "HRMS";

const norm = (s: string) => s.trim().toLowerCase();

export function getModuleList(raw: unknown, product: Product): string[] {
  if (!raw || typeof raw !== "object") return [];
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    if (norm(key) === norm(product) && Array.isArray(value)) {
      return value.filter((v): v is string => typeof v === "string");
    }
  }
  return [];
}

export const hasProduct = (raw: unknown, product: Product) =>
  getModuleList(raw, product).length > 0;

export const hasModule = (raw: unknown, product: Product, moduleName: string) =>
  getModuleList(raw, product).some((m) => norm(m) === norm(moduleName));