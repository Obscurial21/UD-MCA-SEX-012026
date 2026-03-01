//parte 1

const celulares = [
  "iPhone 16 Pro Max",
  "iPhone 16",
  "iPhone 15 Pro",
  "iPhone 15",
  "iPhone 14 Plus",
  "iPhone 13",
  "iPhone 12",
  "iPhone 11",
  "iPhone SE (3ª geração)",
  "iPhone XR",
  "Samsung Galaxy S24 Ultra",
  "Samsung Galaxy S24+",
  "Samsung Galaxy S23 FE",
  "Samsung Galaxy Z Fold6",
  "Samsung Galaxy Z Flip6",
  "Samsung Galaxy A55",
  "Samsung Galaxy A35",
  "Samsung Galaxy M54",
  "Samsung Galaxy A15",
  "Samsung Galaxy S22"
];
//parte 1 - A até E
console.log("(A)")
console.log(celulares[0]);
console.log(celulares[7]);
console.log(celulares[11]);
console.log(celulares[15]);
console.log(celulares[15]);
console.log(celulares[18]);
console.log(celulares[18]);

console.log("(B)")
const penultimo = celulares[celulares.length - 2];
console.log(penultimo);

console.log("(C)")
const total = celulares.length;
console.log(total);

console.log("(D)")
celulares.push ("Iphone 6");
console.log(celulares)

console.log("(E)")
for(const celular of celulares) {
  console.log(celular);
}   
//parte 2 - A até D
console.log("Parte 2");
let iPhone = {
  nome: "iPhone 16 Pro Max",
  ano: 2024,
  cor: "Prata",
  preço: 1199.99,
  estoque: 50
}

console.log("(A)")
console.log(iPhone.nome);

console.log("(B)")

console.log(iPhone.preço);

console.log("(C)")
iPhone.estoque += 30;
console.log(iPhone.estoque);

console.log("(D)")
console.log(iPhone);


//parte 3 - A até f
const catalogoCompleto = [
  { nome: "iPhone 16 Pro Max", marca: "Apple", ano: 2024, preço: 1199.99, estoque: 50 },
  { nome: "iPhone 16", marca: "Apple", ano: 2024, preço: 799.99, estoque: 45 },
  { nome: "iPhone 15 Pro", marca: "Apple", ano: 2023, preço: 999.00, estoque: 30 },
  { nome: "iPhone 15", marca: "Apple", ano: 2023, preço: 699.00, estoque: 25 },
  { nome: "iPhone 14 Plus", marca: "Apple", ano: 2022, preço: 799.00, estoque: 15 },
  { nome: "iPhone 13", marca: "Apple", ano: 2021, preço: 599.00, estoque: 60 },
  { nome: "iPhone 12", marca: "Apple", ano: 2020, preço: 499.00, estoque: 10 },
  { nome: "iPhone 11", marca: "Apple", ano: 2019, preço: 399.00, estoque: 5 },
  { nome: "iPhone SE (3ª gen)", marca: "Apple", ano: 2022, preço: 429.00, estoque: 20 },
  { nome: "iPhone XR", marca: "Apple", ano: 2018, preço: 299.00, estoque: 2 },
  { nome: "Samsung Galaxy S24 Ultra", marca: "Samsung", ano: 2024, preço: 1299.99, estoque: 40 },
  { nome: "Samsung Galaxy S24+", marca: "Samsung", ano: 2024, preço: 1199.99, estoque: 35 },
  { nome: "Samsung Galaxy S23 FE", marca: "Samsung", ano: 2023, preço: 899.99, estoque: 50 },
  { nome: "Samsung Galaxy Z Fold6", marca: "Samsung", ano: 2024, preço: 1899.00, estoque: 12 },
  { nome: "Samsung Galaxy Z Flip6", marca: "Samsung", ano: 2024, preço: 1099.00, estoque: 18 },
  { nome: "Samsung Galaxy A55", marca: "Samsung", ano: 2024, preço: 449.00, estoque: 100 },
  { nome: "Samsung Galaxy A35", marca: "Samsung", ano: 2024, preço: 349.00, estoque: 85 },
  { nome: "Samsung Galaxy M54", marca: "Samsung", ano: 2023, preço: 399.00, estoque: 40 },
  { nome: "Samsung Galaxy A15", marca: "Samsung", ano: 2023, preço: 199.00, estoque: 150 },
  { nome: "Samsung Galaxy S22", marca: "Samsung", ano: 2022, preço: 599.00, estoque: 8 }
];

console.log("(A)")
console.log(catalogoCompleto[2].preço);

console.log("(B)")
console.log(catalogoCompleto[1].nome);

console.log("(C)")
const totalcatalogo = catalogoCompleto.length;
console.log(totalcatalogo);

console.log("(D)")
for(const celular of catalogoCompleto) {
  console.log(celular.nome);
}

console.log("(E)") 
let totalEstoque = 0;
for(const celular of catalogoCompleto) {
  totalEstoque += celular.estoque;
}
console.log(totalEstoque);

console.log("(F)")
let maiorEstoque = 0;
let modeloMaiorEstoque = "";
for(const celular of catalogoCompleto) {
  if(celular.estoque > maiorEstoque) {
    maiorEstoque = celular.estoque;
    modeloMaiorEstoque = celular.nome;
  }
}
console.log(modeloMaiorEstoque);
