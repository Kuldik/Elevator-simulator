export const getPublicPath = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
};
