let frutas = ["Uva", "Maça", "Banana"];
console.log(frutas[1]);

let Cestafrutas = { 
    "nome": "Uva", 
    "preco": 12.00 
}

console.log(Cestafrutas.nome);

let CestafrutasDois = [
    {"Nome": "Uva", "preco": 12.00}, 
    {"Nome": "Maca", "preco": 13.00}, 
    {"Nome": "Banana", "preco": 14.00}, 
]

console.log(CestafrutasDois[2].Nome);

frutas.forEach(e => {
    console.log(e);
});

for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
}