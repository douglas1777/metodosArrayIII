const users = [
  { id: 11, name: "jão", age: 23 },
  { id: 2, name: "maria", age: 18 },
  { id: 4, name: "ana", age: 30 },
  { id: 1, name: "rodrigo", age: 17 },
  { id: 123, name: "pedro", age: 19 },
];
const maiorIdade = users.reduce((acumulador, valorAtual) => {
  let maior = acumulador;
  if (valorAtual.age > maior.age) {
    maior = valorAtual;
  }
  return maior;
});
console.log(maiorIdade);
