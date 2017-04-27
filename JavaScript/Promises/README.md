# Ejemplo de uso de promesas

Una promesa de Javascript es un receptor de una acción que no se sabe cuándo se realizará, en pocas palabras es como un "listener" de un evento asíncrono.

Una promesa se encuentra en uno de los siguientes estados:

* <b>fulfilled (cumplida):</b> la acción relacionada con la promesa se completa con éxito.
* <b>rejected (rechazada):</b> la acción relacionada con la promesa no se completa con éxito.
* <b>pending (pendiente):</b> aún no se completa ni se rechaza.
* <b>settled (finalizada):</b> se completa o se rechaza.

Una promesa se crea de la siguiente manera:

```js
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```

El constructor de la promesa recibe un argumento: un callback con dos parámetros (``resolve`` y ``reject``). A continuación, se hace algo con el callback (tal vez un proceso asincrónico) y se llama a ``resolve`` si todo funciona bien o a ``reject`` si esto no sucede.

Así se usa esta promesa:

```js
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
```

``then()`` recibe dos argumentos: un callback para cuando se tiene éxito y otro para cuando sucede lo contrario. Ambos son opcionales; puedes agregar un callback sólo para cuando se tiene éxito o se produce una falla.

## Encadenamiento

``then()`` no es el final del camino. Puedes encadenar varios then para transformar valores o ejecutar acciones asincrónicas adicionales una tras otra.

### Poner en cola acciones asíncronas

También puedes encadenar los then para ejecutar acciones asincrónicas en secuencia.

Cuando retornas algo de un callback ``then()``, sucede algo mágico. Si retornas un valor, el siguiente ``then()`` se llama con ese valor. Por ejemplo:

```js
var promise = new Promise(function(resolve, reject) {
  resolve(1);
});

promise.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(val) {
  console.log(val); // 3
})
```

## Administración de errores

Como vimos antes, ``then()`` toma dos argumentos: uno por éxito y uno por falla (o completado y rechazado, hablando de promesas):

```js
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
```

También puedes usar ``catch()``:

```js
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}).catch(function(err){
  console.log(err); // Error: "It broke"
});
```

``catch()`` no tiene nada especial, es un recubrimiento para ``then(undefined, func)``, pero es más razonable. Ten en cuenta que los dos ejemplos de códigos anteriores no se comportan de la misma manera; el último equivale a lo siguiente:

```js
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}).then(undefined, function(err){
  console.log(err); // Error: "It broke"
});
```

Para más información acerca de las promesas visita [Origen de la documentación](https://developers.google.com/web/fundamentals/getting-started/primers/promises?hl=es).
