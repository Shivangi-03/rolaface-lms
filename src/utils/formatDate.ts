export function formatDate(value: string | Date | null | undefined): string {
  if (!value) return "";

  const d = typeof value === "string" ? new Date(value) : value;
  if (isNaN(d.getTime())) return "";

  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short" });
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
}


/** "23 Oct 2026". A "YYYY-MM-DD" date is read as a local date, so it never shifts a day. */
export function formatDisplayDate(value: string | Date | null | undefined): string {
  if (!value) return "";

  let d: Date;
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split("-").map(Number);
    d = new Date(year, month - 1, day);
  } else {
    d = typeof value === "string" ? new Date(value) : value;
  }
  if (isNaN(d.getTime())) return "";

  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short" });
  return `${day} ${month} ${d.getFullYear()}`;
}
