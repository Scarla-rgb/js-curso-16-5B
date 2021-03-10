/* Algoritmo de ordenamiento de la Burbuja 0(n^2)*/
/*Scarla Rodriguez #16*/

const ordenaBurbuja = (lista) => {


    let longitudLista, indexOrder, indexChage, auxChange;
    longitudLista = lista.length;

    console.info(longitudLista); // Mostramos por consola la cantidad de elementos en la lista.

    for (indexOrder = 1; indexChage < longitudLista; indexOrder++) {
        //For anidado.
        for (indexChage = 0; indexChage < (longitudLista - indexOrder); indexChage++) {
            //Intercambiamos los valores si el anterior esmayor al siguiente.
            if (lista[indexChage] > lista [indexChage + 1]) {
                auxChange = lista [indexChage];
                lista[indexChage] = lista[indexChage + 1];
                lista[indexChage + 1] = auxChange;
            }
        }
    }

    return lista;
}

let listaDesordenada = [6, 5, 3, 1, 8, 7, 2, 4];
console.warn(listaDesordenada); // Mostramos, por consola, la lista desordenada.

const listaOrdenada = ordenaBurbuja(listaDesordenada);
console.log(listaOrdenada); //MOstramos, por consola, la lista ordenada.