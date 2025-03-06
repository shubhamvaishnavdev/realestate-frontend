export const truncateText = (text: string, limit: number = 51) => {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};
