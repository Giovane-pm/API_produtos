import { Produto } from "../models/Produtos.js";

export async function criarProduto(dados) {
    return await Produto.create(dados);
}

export async function buscarProduto() {
    return await Produto.findAll();
}

export async function pesquisarProduto(id) {
    return await Produto.findByPk(id);
}

export async function atualizarProduto(id, dados) {
    const atualizarProduto = await Produto.findByPk(id);
        if (!atualizarProduto) throw new Error("Produto não encontrado");
    await atualizarProduto.update(dados);

}

export async function deleteProduto(id) {
    const deleteProduto = await Produto.findByPk(id);
    if (!deleteProduto) throw new Error("Produto não encontrado");
    await deleteProduto.destroy();
    return deleteProduto;
}