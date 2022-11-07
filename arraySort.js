//Ordena os elementos do proprio array. Por padrão, a ordenação é de
//acordo com a tabela unicode.
const num = [1, 30, 4, 4, 6, 80, 34, -5];
//ordenação crescente
num.sort((a, b) => {
  return a - b;
});
console.log(`Ordenação crescente: \n${num}.`);
//ordenação decrescente
num.sort((a, b) => {
  return b - a;
});
console.log(`Ordenação decrescente: \n${num}.`);
