/**9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
 */

const numeroAleatorio = () => console.log(Math.random() * 100 + 500);

numeroAleatorio();

/**10) Programa una función que reciba un número y evalúe si es capicúa o no
 *  (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
 **/

const numeroCapicua = (num = undefined) => {
    if (num == undefined) return console.warn(`Este dato no es un numero.`);
    if (Math.sign(num) == -1) return console.warn('Este dato tiene que ser positivo');
    num = num.toString();
    let reves = '';
    for (let i = num.length; i >= 0; i--) {
        reves = reves + num.charAt(i);
    }

    (num == reves) ? console.info(`El numero ${num} es CAPICUO`): console.info(`El numero ${num} no es CAPICUO`);
}

numeroCapicua(202);

/**11) Programa una función que calcule el factorial de un número 
 * (El factorial de un entero positivo n, se define como el producto de todos
 *  los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120
 *  */

const factorial = (num = undefined) => {
    if (num == undefined) return console.error('Este dato no es un numero');
    if (Math.sign(num) == -1) return console.error('Este dato tiene que ser positivo')
    if (num === 0) return console.error('El numero no puede ser cero');
    let aux = 1;
    for (let i = num; i > 1; i--) {
        aux *= i;
    }
    console.log(aux);
}

factorial(5);