# Ejemplo de uso de filter()

La función ``filter()`` crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

## Parámetros

* <b>callback:</b>
	Función que comprueba cada elemento del array para ver si cumple la condición 		(también llamada predicado).  Retorna ``true`` si el elemento la cumple, ``false`` 		en caso contrario. Este callback acepta hasta tres parámetros.
    * <b>elemento:</b>
		El elemento en sí que se está visitando.
    * <b>index:</b>
		El índice del elemento que se está visitando.
    * <b>array:</b>
		El propio array que se está filtrando.
* <b>thisArg:</b>
	Opcional. Usa el valor como ``this`` cuando es ejecutado el callback.

``filter()`` llama a la función dada callback  para cada elemento del array , y construye un nuevo array con todos los valores para los cuales  callback retorna un valor verdadero. callback es invocada sólo para índices del array que tengan asignado un valor. No es invocada para índices que hayan sido borrados o a los que no se les haya asignado valor alguno. Los elementos del array que no pasen la prueba callback  simplemente se saltan, y no son incluidos en el nuevo array.

``filter()`` no hace mutar el array sobre el cual es llamado.

El rango de elementos procesados por ``filter()`` se establece antes de la primera invocación de  callback. Los elementos que se añadan al array después de que comience la llamada a ``filter()`` no serán visitados por callback. Si se modifica o elimina un elemento existente del array,  su valor cuando pase a callback será el que tengan cuando ``filter()`` lo visite; los elementos que son eliminado no son visitados.

## Ejemplo

El siguiente ejemplo usa ``filter()`` para crear un array filtrado que excluye todos los elementos con valores inferiores a ``10``.

```js
function esSuficientementeGrande(elemento) {
  return elemento >= 10;
}
var filtrados = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);
// filtrados es [12, 130, 44]
```
Para más información visita [Filter() Doc](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter).
