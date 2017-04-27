# Ejemplo de uso de map()

La función ``map()`` crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

## Parámetros

* <b>callback:</b>
	Función que producirá un elemento del nuevo array, recibe tres argumentos:
    * <b>valorActual:</b>
		El elemento actual del arreglo que está siendo procesado.
    * <b>índice:</b>
		El índice del elemento actual del arreglo que está siendo procesado.
    * <b>arreglo:</b>
		El arreglo sobre el cual fue llamado ``map()``
* <b>thisArg:</b>
	Opcional. Valor para usar como ``this`` cuando se ejecute callback.

## Descripción

``map()`` llama a la función callback provista una vez por elemento de un arreglo, en orden, y construye un nuevo arreglo con los resultados. callback se invoca sólo para los índices del arreglo que tienen valores asignados; no se invoca en los índices que han sido borrados o a los que no se ha asignado valor.

``map()`` no modifica el arreglo original en el que es llamado (aunque callback, si es llamada puede modificarlo).

El rango de elementos procesado por ``map()``, es establecido antes de la primer invocación de el callback.Elementos que sean agregados al arreglo después de que la llamada a ``map()`` comience no serán visitados por el callback. Si elementos existentes del arreglo son modificados, o eliminados, su valor pasado al callback será el valor en el momento que el ``map()`` lo visita; elementos que son eliminados no son visitados.

## Ejemplos

El siguiente código itera un arreglo de números, aplicándoles la raíz cuadrada a cada uno de sus elementos, produciendo un nuevo arreglo a partir del inicial.

```js
var numeros= [1, 4, 9];
var raices = numeros.map(Math.sqrt);
// raices tiene [1, 2, 3], numeros todavía tiene [1, 4, 9]
```

El siguiente código toma un arreglo de objetos y crea un nuevo arreglo que contiene los nuevos objetos con su nuevo formato.

```js
var kvArray = [{clave:1, valor:10}, {clave:2, valor:20}, {clave:3, valor: 30}];
var reformattedArray = kvArray.map(function(obj){
   var rObj = {};
   rObj[obj.clave] = obj.valor;
   return rObj;
});
// reformattedArray es ahora [{1:10}, {2:20}, {3:30}],
// kvArray sigue siendo [{clave:1, valor:10}, {clave:2, valor:20}, {clave:3, valor: 30}]
```

Para más información visita [Map() Doc](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map).
