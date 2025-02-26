const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// Utilizzo il metodo Filter

const evenNumbers = nums.filter((element) => {
    if (element % 2 === 0) {
        return true
    }
    return false
})

console.log(evenNumbers);