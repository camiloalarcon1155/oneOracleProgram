//Variables
let numeroSecreto = 2;
let numeroUsuario = 0;
let intentos = 0;
let palabraVeces = 'vez';

while(numeroSecreto !=numeroUsuario) {
    numeroUsuario = Number(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(numeroUsuario);
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario === numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo lograste en ${intentos} ${palabraVeces}`);
    } else {
        //La condición no se cumplió
        if (numeroSecreto > numeroUsuario) {
            alert('el numero secreto es mayor ')
        } else {
            alert('el numero secreto es menor ')
        }
        intentos += 1;
        palabraVeces = 'veces';
    }
}


//...