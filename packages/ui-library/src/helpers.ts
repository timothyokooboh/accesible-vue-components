let id = 0;

const generateId = () => {
  return ++id;
};

export const useId = (prefix: string) => {
  return `${prefix}-${generateId()}`;
  // return `${Math.random().toString(36).slice(2, 9)}`;
};
