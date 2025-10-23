import { Produto } from "./models/Produtos.js";

export async function seedDatabase() {
    const count = await Produto.count();

  // Condicao para nao popular novamente
    if (count > 0) {
    console.log("Banco já contém produtos");
    return;
    }

  //cria alguns exemplos, se tiver vazio
    await Produto.bulkCreate([
    { nome: "Pizza de Calabresa", preco: 45.90, categoria: "Pizzas" },
    { nome: "Hambúrguer Artesanal", preco: 29.90, categoria: "Lanches" },
    { nome: "Lasanha de Frango", preco: 34.50, categoria: "Massas" },
    { nome: "Suco Natural de Laranja", preco: 9.90, categoria: "Bebidas" },
    { nome: "Torta de Limão", preco: 14.90, categoria: "Sobremesas" }
    ]);

    console.log("db populado com sucesso!");
}