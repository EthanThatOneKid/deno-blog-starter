export const generateDiscriminator = (length = 5): string =>
  Math.random().toString().substring(2, length + 2);
