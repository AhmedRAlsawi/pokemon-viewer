export const padStartFormat = (value: string | number): string => {
  const strValue = String(value);
  return '#' + strValue.padStart(3, '0');
};
