//Parte 3 - Arrays de Objetos:
//Nome: Matheus Santos Morais Arruda
//RA: 825218417

let = estoqueOficina = [
    {nome: "Lanterna", preco: 200, estoque: 13},
    {nome: "Pneu", preco: 500, estoque: 20},
    {nome: "Bateria", preco: 400, estoque: 15},
    {nome: "Óleo", preco: 100, estoque: 50},
    {nome: "Filtro de Ar", preco: 150, estoque: 30},
    {nome: "Pastilha de Freio", preco: 300, estoque: 25},
    {nome: "Amortecedor", preco: 800, estoque: 10},
    {nome: "Velas de Ignição", preco: 50, estoque: 40},
    {nome: "Correia Dentada", preco: 600, estoque: 12},
    {nome: "Radiador", preco: 1200, estoque: 8}
]

console.log(estoqueOficina[1].preco); //imprime o preço do segundo objeto do array.

console.log(estoqueOficina[2].nome); //imprime o nome do terceiro objeto do array.

console.log(estoqueOficina.length); //imprime a quantidade de objetos no array.

for (let i = 0; i < estoqueOficina.length; i++) {
    console.log(estoqueOficina[i].nome); //imprime o nome de todos os objetos do array usando um loop for.
}

let = totalDoEstoque = 0;

let totalEstoque = 0;

for (let item of estoqueOficina) {
    totalEstoque += item.estoque;
}

console.log("Total em estoque:", totalEstoque); //imprime o total de itens do estoque.

let maior = estoqueOficina[0];

for (let item of estoqueOficina) {
    if (item.estoque > maior.estoque) {
        maior = item;
    }
}

console.log("Produto com maior estoque:", maior); //imprime o nome do item com maior quantidade em estoque.