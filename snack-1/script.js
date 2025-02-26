const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

// 1. Stampo in console l'array completa di nomi
console.log(names);

// 2. Utilizzo l'operatore spread(...) per espandere gli elementi dell'array come argomenti separati
console.log(...names);

// 3. Eseguo il motodo .forEach
names.forEach((element) => {
    console.log(element);
})

// 4. Utilizzo il metodo Map

const newNams = names.map((element) => {
    return element
})

console.log(newNams);