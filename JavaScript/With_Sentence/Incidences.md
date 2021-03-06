# Incidencias, Experiencias y Workarounds

Este archivo es una guía de ayuda para la resolución de problemas o situaciones de incompatibilidad. A continuación se listarán una serie de títulos indicando ``[I]`` si se trata de una incidencia o problema, una ``[E]`` indicando una experiencia o anécdota y una ``[W]`` indicando un workaround o forma de continuar sin resolver el problema.

## [E] Funciones que se ejecutan en vez de otras

La sentencia ``with`` simplifica el acceso a objetos, pero también puede generar una situación  de ambigüedad. Sólo si el objeto sobre el cual afecta la sentencia ``with`` no contiene la función que se espera, el intéprete del lenguaje buscará en el siguiente ambiente la función que necesita. Es decir, que códigos como el siguiente ejemplo generan conflictos:

```js
...
function sqrt(param){
	return param/2;
}
with(Math){
	console.log(sqrt(16));
}
...
```

Es muy común que el desarrollador cometa este error pensando que obtendrá el resultado de la función que definió anteriormente y no el resultado de la función ``Math.sqrt()``.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
