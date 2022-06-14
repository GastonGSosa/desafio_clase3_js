let repetir =true
let numero

while (repetir){
    numero = parseInt(prompt("Dígame un número, por favor: "))
    
    if (!isNaN(numero)){
        repetir=false
    }
}
if (numero!=2){
    for (let i =2 ; i<numero ; i++){
        if (numero%i===0){
            alert('El número ingresado NO es un número primo')
            break
        }
        else {
            alert('El número ingresado es un número primo.')
            break
        }
        
    }
}
else {
    alert('El número 2 NO es primo, dale, media pila jaj')
}



