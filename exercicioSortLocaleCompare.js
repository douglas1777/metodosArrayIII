const carros = [
  { nome: "corola", marca: "toyota", ano: "2020", cor: "prata" },
  { nome: "argo", marca: "fiat", ano: "2021", cor: "preta" },
  { nome: "ranger", marca: "ford", ano: "2021", cor: "prata" },
  { nome: "hilux", marca: "toyota", ano: "2018", cor: "branca" },
  { nome: "fusca", marca: "wolkswagen", ano: "1979", cor: "azul" },
];
// carros.sort((a, b) => {
//   return a.nome.localeCompare(b.nome);
// });
// console.log(carros);

const ordenarCarros = (arrayCarros, campoOrdenacao) => {
  arrayCarros.sort((a, b) => {
    return a[campoOrdenacao].localeCompare(b[campoOrdenacao]);
  });
  console.log(arrayCarros);
};
ordenarCarros(carros, "ano");
