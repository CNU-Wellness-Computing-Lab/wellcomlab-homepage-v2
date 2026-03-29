export function formatDate(timestamp) {
  if (!timestamp) return "";

  const date = timestamp.toDate();
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date);
}

export function getYear(timestamp) {
  if (!timestamp) return "";
  return String(timestamp.toDate().getFullYear());
}