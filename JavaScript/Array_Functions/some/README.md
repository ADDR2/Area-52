# Ejemplo de uso de some()

La función ``some()`` verifica si algún elemento de un arreglo cumple con el test implementado por la función brindada.

## Parámetros

* <b>callback:</b>
	Función que verifica cada elemento, recibe tres argumentos:
    * <b>valorActual:</b>
		El elemento actual del arreglo que está siendo procesado.
    * <b>índice:</b>
		El índice del elemento actual del arreglo que está siendo procesado.
    * <b>arreglo:</b>
		El arreglo sobre el cual fue llamado ``some()``
* <b>thisArg:</b>
	Opcional. Valor para usar como ``this`` cuando se ejecute callback.

## Descripción

``some()`` ejecuta la función callback una vez por cada elemento presente en el arreglo hasta que encuentre uno donde callback retorna un valor verdadero (``true``). Si se encuentra dicho elemento, ``some()`` retorna ``true`` inmediatamente. Sino, ``some()`` retorna ``false``. callback es invocada sólo para los índices del arreglo que tienen valores asignados; no es invocada para índices que han sido borrados o a los que nunca se les han asignado valores.

``some()`` no modifica el arreglo con el cual fue llamada.

El rango de elementos procesados por ``some()`` es configurado antes de la primer invocación de callback. Los elementos anexados al arreglo luego de que comience la llamada a ``some()`` no serán visitados por callback. Si un elemento existente y no visitado del arreglo es alterado por callback, su valor pasado al callback será el valor al momento que ``some()`` visita el índice del elemento; los elementos borrados no son visitados.

## Ejemplo

El siguiente ejemplo verifica si algún elemento del arreglo es mayor a ``10``.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

Para más información visita [Some() Doc](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/some).
