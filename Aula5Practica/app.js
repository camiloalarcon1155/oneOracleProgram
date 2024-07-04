//Variables

let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo + 1);
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
let maximoIntentos = 6;

while(numeroSecreto != numeroUsuario) {
    numeroUsuario = Number(prompt(`Me indicas un número entre 1 y ${numeroMaximo} por favor:`));

    console.log(numeroUsuario);
    console.log(numeroSecreto);

    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario === numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}.
            Lo lograste en ${intentos} ${intentos == 1? 'vez': 'veces'}`);
    } else {
        //La condición no se cumplió
        if (numeroSecreto > numeroUsuario) {
            alert('el numero secreto es mayor ');
        } else {
            alert('el numero secreto es menor ');
        }
        //incrementamos el contador cuando no acierta:
        //intentos= intentos + 1;
        //intentos += 1;
        intentos++
        //palabraVeces = 'veces';

         if (intentos > maximoIntentos) {
            alert(`perdiste my queen. LLegaste a ${maximoIntentos} intentos` );
             break
        }
    }
}
