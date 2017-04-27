# Ejemplo de uso de forEach()

La función ``forEach()`` ejecuta la función indicada una vez por cada elemento del arreglo.

## Parámetros

* <b>callback:</b>
	Función a ejecutar por cada elemento, que recibe tres argumentos:
    * <b>valorActual:</b>
		El elemento actual del arreglo que está siendo procesado.
    * <b>índice:</b>
		El índice del elemento actual del arreglo que está siendo procesado.
    * <b>arreglo:</b>
		El arreglo sobre el cual fue llamado ``forEach()``
* <b>thisArg:</b>
	Opcional. Valor para usar como ``this`` cuando se ejecute callback.

## Descripción

``forEach()`` ejecuta la función callback una vez por cada elemento presente en el arreglo en orden ascendente. No es invocada para índices que han sido eliminados o que no hayan sido inicializados (Ej. sobre ``arrays sparse``).

El rango de elementos procesados por ``forEach()`` se establece antes de la primera invocación del callback. Los elementos que sean añadidos al arreglo después de que inicie la llamada a ``forEach()`` no serán visitados por callback. Si los valores de los elementos existentes en el arreglo son modificados, el valor pasado al callback será el valor al momento de que ``forEach()`` los visite; no se evaluarán los elementos borrados antes de ser visitados por ``forEach()``.

``forEach()`` ejecuta la función callback una vez por cada elemento del arreglo; a diferencia de ``map()`` o ``reduce()`` este siempre devuelve el valor ``undefined`` y no es encadenable. El típico uso es ejecutar los efectos secundarios al final de la cadena.

## Ejemplo

El siguiente código imprime una línea por cada elemento en un arreglo:

```js
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
// Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
[2, 5, , 9].forEach(logArrayElements);
// salida:
// a[0] = 2
// a[1] = 5
// a[2] = 9
```

Para más información visita [ForEach() Doc](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach).
