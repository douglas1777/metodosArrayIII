// executa uma função callback , passada como
// argumento  do Array, que resulta em apenas um
// valor de retorno
const num = [0, 1, 2, 3, 4];
const result = num.reduce((acumulador, valorAtual, indice, num) => {
  return acumulador + valorAtual;
});
console.log(result);
const result2 = num.reduce((acumulador, valorAtual, indice, num) => {
  return acumulador + valorAtual;
}, 10);
console.log(result2);

const array = [
  [0, 1],
  [2, 3, 4],
  [14, 22, 98],
];
const arrayReduzido = array.reduce((acumulador, valorAtual, indice, array) => {
  return [...acumulador, ...valorAtual];
});
console.log(arrayReduzido);
