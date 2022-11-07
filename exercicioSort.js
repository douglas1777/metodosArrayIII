const users = [
  { id: 11, name: "jão", age: 23 },
  { id: 2, name: "maria", age: 18 },
  { id: 4, name: "ana", age: 30 },
  { id: 1, name: "rodrigo", age: 17 },
  { id: 123, name: "pedro", age: 19 },
];
console.log(users);
users.sort((idA, idB) => {
  return idA.id - idB.id;
});
console.log(users);
users.sort((idA, idB) => {
  return idB.id - idA.id;
});
console.log(users);
