export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "numeric",
  });
};
