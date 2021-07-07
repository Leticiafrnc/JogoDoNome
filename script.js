function mostrar(){
    var aparecerText = document.querySelector('input#nomes')
    var n = document.querySelector('p#n')
    var n2 = document.querySelector('p#n2')
    var resultMaiuscula = String(aparecerText.value.toUpperCase()) 
    var resulNDeLetras = String(aparecerText.value.length) 

    n.innerHTML = `Sua palavra em maiúsculo é  : ${resultMaiuscula}`
    n2.innerHTML = `E tem  ${resulNDeLetras} letras`

    }