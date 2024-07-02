

/* 
1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

3.Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.". 


4.Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

5.Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre. */


//solucion 1:

let diaSemana = prompt("que dia de la semana es?: ");

if (diaSemana === 'sabado' || diaSemana === 'domingo') {
    alert('feliz fin de semana')
} else {
    alert('trabaje bago');
}


//solucion 2:

let numeroIngresado = prompt("Ingresa un numero cuialquiera: ");

if (numeroIngresado >= 0) {
    alert(`el numero ${numeroIngresado} es positivo`);
} else if (numeroIngresado < 0){
    alert(`el numero ${numeroIngresado} es negativo`);
}
else {
    alert(`el numero ${numeroIngresado} es 0`);
}

//solucion 3: ya eran muy repetitivas, no las hice



