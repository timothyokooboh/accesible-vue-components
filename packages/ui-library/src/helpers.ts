export const useId = (slug: string) => {
  return `${slug}-${Math.random().toString(36).slice(2, 9)}`;
};
