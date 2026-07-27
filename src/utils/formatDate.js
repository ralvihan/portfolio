const MONTHS_ID = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

export function formatMonthYear(dateStr) {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  const monthIndex = parseInt(month, 10) - 1;
  const monthName = MONTHS_ID[monthIndex] ?? "";
  return `${monthName} ${year}`.trim();
}