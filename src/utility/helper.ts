export const getInitialsOfName = (name: string) => {
  const letters = name
    ?.split(' ')
    .map(n => n.substring(0, 1).toUpperCase())
    .join('')
    .slice(0, 2);
  return letters;
};
