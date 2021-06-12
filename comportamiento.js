var numeros = "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20";
var numeroDeVeces = 0; // 0 = > 20
var numerosSeparados = numeros.split(','); // separa los numeros
while(numeroDeVeces < 21) {
    // division entre 2 residuo igual a 0
    //2/2 = 1 // resultado
    //2%2 = 0 // residuo
    if( numerosSeparados[numeroDeVeces] % 2 == 0){
        document.getElementById("numeros").innerHTML += numerosSeparados[numeroDeVeces]+ "_";
    }
    numeroDeVeces = numeroDeVeces + 1;
}

