export const formatNumeralsText = (
  count: number,
  textParametrs: { 1: string, 2: string, 5: string },
) => {
  const check = /2$|3$|4$/g.test(String(count));
  const checkForOneAtEnd = /1$/g.test(String(count));

  switch (true) {
    case (count >= 5 && count <= 20) || (count % 100 >= 11 && count % 100 <= 20): return textParametrs['5'];
    case checkForOneAtEnd: return textParametrs['1'];
    case check: return textParametrs['2'];
    default: return textParametrs['5'];
  }
};
