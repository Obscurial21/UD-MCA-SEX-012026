//Parte 2 - Objetos:
//Nome: Matheus Santos Morais Arruda
//RA: 825218417

let objetoCarroFerrari = {
    nome:"Ferrari - F40",
    cor: "Vermelha",
    preco: 3500000,
    estoque: 5
}

console.log(objetoCarroFerrari.nome); //imprime o nome do carro.

console.log(objetoCarroFerrari["preco"]); //imprime o preço do carro.

objetoCarroFerrari.estoque = 80; //altera a quantidade de estoque do carro.

console.log(objetoCarroFerrari) //imprime todas as especificações do carro.
