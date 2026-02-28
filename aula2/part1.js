//Parte 1 - Arrays Simples:
//Nome: Matheus Santos Morais Arruda
//RA: 825218417

//Usando arrays de forma simples, seguindo as instruções do professor.

let carros = ["Ferrari", "Lamborghini", "Porsche", "Bugatti", "Maserati", "Gol", "Palio", "Sandero", "Monza Tubarão", "Argo", "Celta", "Corsa", "Uno", "Fiesta", "Ka", "Focus", "Corolla", "Civic", "Accord", "Camry"];

console.log(carros[0], carros[7], carros[11], carros[15], carros[18], carros[20]); //imprime os elementos nas posições 0, 7, 11, 15, 18 e 20.

console.log(carros[carros.length - 1], carros[carros.length - 2]); //imprime o ultimo e penultimo argumento do array.

carros.push("Mustang") //adiciona um novo elemento ao final do array.

for (let i = 0; i < carros.length; i++) {
    console.log(carros[i]); //imprime todos os elementos do array usando um loop for.
}