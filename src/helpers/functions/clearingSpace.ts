export const clearingSpace = (value: string) => {
  const isOnlySpace = !!value.match(/^\s{1,}$/gi)?.length;
  if (isOnlySpace) {
    return '';
  }
  return value.replace(/\s{1,}/gi, ' ').trim();
};
