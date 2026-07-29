const MONTHS_ID = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

export function formatFullDate(dateStr) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  const monthIndex = parseInt(month, 10) - 1;
  const monthName = MONTHS_ID[monthIndex] ?? "";
  const dayNum = parseInt(day, 10);
  return `${dayNum} ${monthName} ${year}`.trim();
}

export function formatDateRange(startDate, endDate) {
  if (!startDate) return "";
  const start = formatFullDate(startDate);
  const end = endDate ? formatFullDate(endDate) : "Sekarang";
  return `${start} - ${end}`;
}