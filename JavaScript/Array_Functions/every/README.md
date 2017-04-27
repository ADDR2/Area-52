# Ejemplo de uso de every()

La función ``every()`` verifica si todos los elementos en el arreglo pasan la prueba implementada por la función dada.

## Parámetros

* <b>callback:</b>
	Función para probar cada elemento, recibe tres argumentos:
    * <b>valorActual (requerido):</b>
		El elemento actual del arreglo que está siendo procesado.
    * <b>índice (opcional):</b>
		El índice del elemento actual del arreglo que está siendo procesado.
    * <b>arreglo (opcional):</b>
		El arreglo sobre el cual fue llamado ``every()``
* <b>thisArg:</b>
	Opcional. Valor para usar como ``this`` cuando se ejecute callback.

## Descripción

El método ``every()`` ejecuta la función callback dada una vez por cada elemento presente en el arreglo hasta encontrar uno que haga retornar un valor falso a callback (un valor que resulte falso cuando se convierta a booleano).  Si no se encuentra tal elemento, el método ``every()`` de inmediato retorna  ``false``.   O si  callback retorna verdadero para todos los elementos, ``every()`` retornará ``true``. callback es llamada sólo para índices del arreglo que tengan valores asignados; no se llama para índices que hayan sido eliminados o a los que no se les haya asignado un valor.

``every()`` no modifica el arreglo sobre el cual es llamado.

El rango de elementos procesado por ``every()`` se establece antes de la primera llamada a callback.  Los elementos que se agreguen al arreglo después de que la función ``every()`` comience no serán vistos por la función callback.  Si se modifican elementos existentes en el arreglo, su valor cuando sea pasado a callback será el valor que tengan cuando sean visitados; los elementos que se eliminen no serán visitados.

``every()`` opera como el cuantificador "para todo" en matemáticas. En particular con el arreglo vacío retorna ``true``.

## Ejemplo

El siguiente ejemplo prueba si todos los elementos de un arreglo son mayores que ``10``.

```js
function esSuficientementeGrande(elemento, indice, arrreglo) {
  return elemento >= 10;
}
[12, 5, 8, 130, 44].every(esSuficientementeGrande);   // false
[12, 54, 18, 130, 44].every(esSuficientementeGrande); // true
```

Para más información visita [Every() Doc](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/every).
