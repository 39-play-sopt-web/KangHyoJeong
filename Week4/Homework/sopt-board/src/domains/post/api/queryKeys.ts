export const postKeys = {
  all: ['posts'] as const,
  list: (keyword: string) => [...postKeys.all, 'list', keyword] as const,
};
