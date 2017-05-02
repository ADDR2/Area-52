# Incidencias, Experiencias y Workarounds

Este archivo es una guía de ayuda para la resolución de problemas o situaciones de incompatibilidad. A continuación se listarán una serie de títulos indicando ``[I]`` si se trata de una incidencia o problema, una ``[E]`` indicando una experiencia o anécdota y una ``[W]`` indicando un workaround o forma de continuar sin resolver el problema.

## [I] Refusing to install package

Si les aparece el siguiente error o algo parecido:

```
...
npm ERR! Refusing to install package with name "express" under a package
npm ERR! also called "express". Did you name your project the same
npm ERR! as the dependency you're installing?
...
```

Significa que están intentando descargar una dependencia con el mismo nombre de su proyecto. En el caso del autor, creó una carpeta llamada ``Express`` y un proyecto ``express`` en ella donde intentó descargar la dependencia ``express``. Lo cual ocasionó este error.

La solución es simplemente cambiar el nombre del proyecto, buscar otra dependencia sustituta o descargar la dependencia en otra carpeta y cambiarle el nombre para incluirla en su proyecto.

## [E] Iniciar en segundo plano el servidor

Ejecutar el siguiente comando:

```
$> node <archivo del Back-end>.js > stdout.txt 2> stderr.txt &
```

Donde ``<archivo del Back-end>`` debe ser reemplazado por el nombre del archivo principal del Back-end. Este comando generará dos archivos donde se almacenarán los logs de los mensajes y los errores respectivamente.
