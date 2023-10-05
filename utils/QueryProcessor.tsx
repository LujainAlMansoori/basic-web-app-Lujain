export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew")) {
    return (
      "lmansoor"
    );
  }
  if (query.toLowerCase().includes("name")) {
    
    return (
      "lmansoor"
    );
  }

  if (query.toLowerCase().includes("plus")) {
    const matches = query.match(/\d+/g);
    if (matches) {
        const numbers: number[] = matches.map(Number);
        if (numbers.length === 2) {
          return String(numbers[0] + numbers[1]);
        }
    
  
  }}
  const isSquareAndCube = (n: number): boolean => {
    const sqrtN = Math.sqrt(n);
    const cbrtN = Math.cbrt(n);
    return Number.isInteger(sqrtN) && Number.isInteger(cbrtN);
};
  if (query.toLowerCase().includes("square")) {
    const matches = query.match(/\d+/g);
    if (matches) {
        const numbers: number[] = matches.map(Number);
        if (numbers.length === 3) {
          const results: number[] = numbers.filter(isSquareAndCube);
          return String(results);
          
        }
    
  
  }}

  return "";
}
