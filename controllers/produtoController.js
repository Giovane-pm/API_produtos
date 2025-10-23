import * as produtoServices from "../services/produtoServices.js";
import { validarProdutoDTO } from "../dtos/ProdutoDTO.js";

export async function criar(req, res) {
    try {
        const dadosValidados = validarProdutoDTO(req.body);
        const novoProduto = await produtoServices.criarProduto(dadosValidados);
        res.status(200).json(novoProduto);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
}

export async function listar(req, res) {
    try {
        const listarProduto = await produtoServices.buscarProduto();
        res.json(listarProduto);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
}

export async function pesquisar(req, res) {
    const { id } = req.params;
    try {
        const pesquisarProduto = await produtoServices.pesquisarProduto(id);
        res.json(pesquisarProduto);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
}

export async function atualizar(req, res) {
    const { id } = req.params;
    try {
        const dadosValidados = validarProdutoDTO(req.body);
        const atualProduto = await produtoServices.atualizarProduto(id, dadosValidados);
        res.status(200).json(atualProduto);
    } catch (err) {
        res.status(404).json({ erro: err.message });
    }
}

export async function deletar(req, res) {
    const { id } = req.params;
    try {
        await produtoServices.deleteProduto(id);
        res.json({ mensagem: "Produto deletado com sucesso" });
        
    } catch (err) {
        res.status(404).json({ erro: err.message });
    }
}
