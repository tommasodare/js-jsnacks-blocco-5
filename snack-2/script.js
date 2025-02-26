const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// Utilizzo di metodo Map

const personName = people.map((person) => {
  return person.name;
})

console.log(personName);


// Utilizzo il metodo forEach (anche se non fa quello richiesto)
people.forEach((person) => {
  console.log(person.name);
})