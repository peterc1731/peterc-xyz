export const formatDate = (str: string) => {
  const d = new Date(str);
  return `${d.toLocaleString('en-GB', {
    month: 'long',
    day: 'numeric',
  })}, ${d.getFullYear()}`;
};
