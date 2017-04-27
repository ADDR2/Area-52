# Ejemplo de uso de sort()

La función ``sort()`` ordena los elementos de un arreglo localmente y devuelve el arreglo. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.

## Parámetros

* <b>compareFunction:</b>
Opcional. Especifica una función que define el modo de ordenamiento. Si se omite, el arreglo es ordenado atendiendo a la posición del valor Unicode de cada caracter, según la conversión a string de cada elemento.

## Valor devuelto

El arreglo ordenado.

## Descripción

Si no se provee compareFunction, los elementos son ordenados convirtiéndolos a strings y comparando la posición del valor Unicode de dichos strings. Por ejemplo, ``"Cherry"`` viene antes que ``"banana"``  ( por ir las mayúsculas antes que las minúsculas en la codificación Unicode) . En un ordenamiento numérico, ``9`` viene antes que ``80``, pero como los números son convertidos a strings y ``"80"`` se encuentra antes que ``"9"`` en Unicode entonces ``"80"`` quedará antes que ``"9"`` en el arreglo retornado.

Si se provee compareFunction, los elementos del array son ordenados de acuerdo al valor que retorna dicha función de comparación. Siendo a y b dos elementos comparados, entonces:

* Si ``compareFunction(a, b)`` es menor que ``0``, se sitúa a en un índice menor que b. Es decir, a viene primero.

* Si ``compareFunction(a, b)`` retorna ``0``, se deja a y b sin cambios entre ellos, pero ordenados con respecto a todos los elementos diferentes. Nota: el estandar ECMAscript no garantiza este comportamiento, por esto no todos los navegadores (ejemplo:  Mozilla en versiones que datan hasta el 2003) respetan esto.

* Si ``compareFunction(a, b)`` es mayor que ``0``, se sitúa b en un indice menor que a.

* ``compareFunction(a, b)`` siempre debe retornar el mismo valor dado un par específico de elementos a y b como sus argumentos. Si se retornan resultados inconsistentes entonces el orden de ordenamiento es indefinido.

Entonces, la función de comparación tiene la siguiente forma:

```js
function compare(a, b) {
  if (a es menor que b según criterio de ordenamiento) {
    return -1;
  }
  if (a es mayor que b según criterio de ordenamiento) {
    return 1;
  }
  // a debe ser igual b
  return 0;
}
```

Para comparar números en lugar de strings, la función de comparación puede simplemente restar b de a. La siguiente función ordena el arreglo de modo ascendente:

```js
function compareNumbers(a, b) {
  return a - b;
}
```

La función ``sort()`` puede ser usado convenientemente con ``function expressions`` (y ``closures``):

```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
```

Los objectos pueden ser ordenados por el valor de una de sus propiedades.

```js
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
```

## Ejemplos

Un arreglo de elementos string, sin especificar una función de comparación:

```js
var arr = [ 'a', 'b', 'Z', 'Aa', 'AA' ];
arr.sort();  //[ 'AA', 'Aa', 'Z', 'a', 'b' ]
```

Un arreglo de elementos numéricos,  sin función de comparación:

```js
var arr = [ 40, 1, 5, 200 ];
arr.sort();  //[ 1, 200, 40, 5 ]
```

Un arreglo de elementos numéricos, usando una función de comparación:

```js
var arr = [ 40, 1, 5, 200 ];
function comparar ( a, b ){ return a - b; }
arr.sort( comparar );  // [ 1, 5, 40, 200 ]
```

Para más información visita [sort() Doc](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort).
