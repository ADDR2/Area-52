# Ejemplo de uso de la sentencia with

Es común el desarrollo orientado a objetos, por eso JavaScript implementa una sentencia que facilita el acceso a objetos sintácticamente. En pocas palabras, su propósito es simplificar líneas de código como las siguientes:

```js
...
Main.View.Combo.Item.value(Main.View.Input.get(1).value);
$('#app').html(Main.View.getDom());
...
```

Utilizando la sentencia ``with`` esas líneas se convertirían en las siguientes:

```js
...
with(Main.View){
	Combo.Item.value(Input.get(1).value);
	$('#app').html(getDom());
}
...
```

Esta sentencia aplica para todas las veriones actuales de JavaScript, incluyendo [ES6](https://github.com/lukehoban/es6features).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
