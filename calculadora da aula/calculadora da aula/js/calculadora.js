alert("Você está prestes a ver uma calculadora fantástica")//notificação de interação na página
function mudartextoeacao(){
    document.getElementById("botao").innerHTML = "viu?" //aqui estamos modificando o botão via Id
    alert("ira explodir já já")
    createImageBitmap
}

//Pega os elemntos do Li, abrevição de "button" é btn,e podemos criar mais de uma "var" usando vírgula para não usamor muitas var no texto//
var btn = document.querySelectorAll(".key li"),
    input = document.querySelectorAll(".input-valor"),
    operador = document.querySelectorAll(".operador");

//"for" é usado para dar loop no código e ver se as teclas foram clicadas
for(var i = 0; i <btn.length; i++){
    document.onkeypress = function(event){
        for(var e = 0; e <= 10; e++) {
            if(key === (48+e)){//limita a 48 caracteres
                input.innerHTML += e;
            }
        }  
        //verifica os operadores
        switch(key){
            case 1:
                input.innerHTML += "*";
                break;
            case 2:
                input.innerHTML += "+";
                break;
            case 3:
                input.innerHTML += "-";
                break;
            case 4:
                input.innerHTML += "/";
                break;
            case 5:
                input.innerHTML += "=";
                break;
            case 6:
                input.innerHTML += "."
                break;
            case 7:
            case 8:    
            var equacao = input.innerHTML;
            if(equacao){
                try{
                    input.innerHTML = eval(equacao);
                }  catch (e){
                    alert("Erro na Expressão");
                }
            }
            break;
            case 9:
            case 10:
                input.innerHTML = "";
                break;
                default:
                break;
        }
    }
}
