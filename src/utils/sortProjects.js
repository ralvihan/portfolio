const MONTHS_ID = {
  januari: 0, februari: 1, maret: 2, april: 3, mei: 4, juni: 5,
  juli: 6, agustus: 7, september: 8, oktober: 9, november: 10, desember: 11,
};

function parseMonthYear(str) {
  if (!str) return 0;
  const parts = str.trim().toLowerCase().split(/\s+/);
  if (parts.length === 2) {
    const month = MONTHS_ID[parts[0]];
    const year = parseInt(parts[1], 10);
    if (month !== undefined && !isNaN(year)) {
      return new Date(year, month, 1).getTime();
    }
  }
  const year = parseInt(str, 10);
  return !isNaN(year) ? new Date(year, 0, 1).getTime() : 0;
}

function getPeriodBounds(period) {
  if (!period) return { start: 0, end: 0 };
  const segments = period.split(/[-–—]/).map((s) => s.trim()).filter(Boolean);
  const startStr = segments[0];
  const endStr = segments[segments.length - 1];
  const ongoing = endStr.toLowerCase().includes("sekarang");
  const start = parseMonthYear(startStr);
  const end = ongoing ? Number.MAX_SAFE_INTEGER : parseMonthYear(endStr);
  return { start, end };
}

export function compareProjects(a, b) {
  const pa = getPeriodBounds(a.period);
  const pb = getPeriodBounds(b.period);
  if (pb.end !== pa.end) return pb.end - pa.end;
  return pb.start - pa.start;
}

export function sortProjects(projects) {
  return [...projects].sort(compareProjects);
}