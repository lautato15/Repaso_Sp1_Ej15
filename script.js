function sumMultiples(num) {
  let output = 0;
  if (typeof num !== "number") return "Error de Parametros";
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) output += i;
  }
  return output;
}

// Ejercicio 15
// Crear una función en JavaScript llamada sumMultiples (Sumar Múltiplos) que reciba como parámetro un número natural (entero positivo) y retorne la suma de todos los números múltiplos de 3 o 5, que sean menores al número recibido por parámetro.
// Si un número fuese múltiplo de 3 y 5, se considerará una sola vez. Ejemplos:

// Input
// Output
// sumMultiples(1) ---> 0
// sumMultiples(2) ---> 0
// sumMultiples(3) ---> 0
// sumMultiples(6) ---> 8
// sumMultiples(10) ---> 23
