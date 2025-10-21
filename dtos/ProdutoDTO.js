export function validarProdutoDTO(dados){
    if (!dados.nome || !dados.preco || !dados.categoria) {
        throw new Error("Campos obrigatorios: nome / preco / categoria");
}

    return{
        nome: dados.nome.trim(),
        preco: parseFloat(dados.preco),
        categoria: dados.categoria.trim(),
    };
}