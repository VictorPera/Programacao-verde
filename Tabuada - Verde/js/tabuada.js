function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var resultado = document.getElementById("resposta");
    var tabuada = "";//isso significa vazio/nada

    for (var count = 1; count <= 999; count ++){//estrutura de repetição
        tabuada += num + "x" + count + "=" + 
        num * count + "<br />";

        resultado.innerHTML = tabuada;
    }
}