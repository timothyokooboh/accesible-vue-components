export const useId = () => {
  return `${Math.random().toString(36).slice(2, 9)}`;
};
