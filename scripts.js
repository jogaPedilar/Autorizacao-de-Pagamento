function gerarPedido() {
    if(document.getElementById("nome").value == "" || document.getElementById("valor").value == "" || document.getElementById("favorecido").value == "" || document.getElementById("cnpj").value == "" || document.getElementById("data").value == null){
        alert("VERIFIQUE TODOS Os CAMPOS");
        return true;
    }

    document.getElementById("resNome").textContent = document.getElementById("nome").value;
    document.getElementById("resValor").textContent = document.getElementById("valor").value;
    document.getElementById("resFavorecido").textContent = document.getElementById("favorecido").value;
    document.getElementById("resCNPJ").textContent = document.getElementById("cnpj").value;
    document.getElementById("resPagamento").textContent = document.getElementById("pagamento").value;
    document.getElementById("resRelato").textContent = document.getElementById("relato").value;
    document.getElementById("resSetor").textContent = document.getElementById("setor").value;
    document.getElementById("resCategoria").textContent = document.getElementById("categoria").value;
   
    // Formatar a data para o formato brasileiro
    let dataInput = document.getElementById("data").value;
    let dataVencimento = new Date(dataInput);
    let dataFormatada = dataVencimento.toLocaleDateString('pt-BR');
    document.getElementById("resData").textContent = dataFormatada;
   
    verificarData();
    document.getElementById("resultado").style.display = "block";
}

function verificarData() {
    let dataInput = document.getElementById("data").value;
    let dataVencimento = new Date(dataInput);
    let hoje = new Date();
    let diferenca = (dataVencimento - hoje) / (1000 * 60 * 60 * 24);
    let printArea = document.getElementById("resultado");
   
    if (diferenca <= 4) {
        printArea.style.backgroundColor = "#ffc7ce";
        if(!document.getElementById("title").textContent.includes("URGENTE")){
            document.getElementById("title").textContent = document.getElementById("title").textContent + " - URGENTE";    
        }
       
    } else {
        printArea.style.backgroundColor = "#a7d0c8";
    }
}

function imprimirPedido() {
    if(gerarPedido()){
        return;
    };
    window.print();
}