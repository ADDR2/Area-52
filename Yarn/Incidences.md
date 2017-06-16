# Incidencias, Experiencias y Workarounds

Este archivo es una guía de ayuda para la resolución de problemas o situaciones de incompatibilidad. A continuación se listarán una serie de títulos indicando ``[I]`` si se trata de una incidencia o problema, una ``[E]`` indicando una experiencia o anécdota y una ``[W]`` indicando un workaround o forma de continuar sin resolver el problema.

## [I] Yarn command not found on Windows

Después de instalar yarn a través de un archivo ``.msi`` debes revisar tus variables de entorno y añadir un ``\`` después de la ruta ``AppData\Yarn\bin`` de manera que quede algo como esto:

```
AppData\Yarn\bin\
```

Y listo, sólo debes abrir una nueva consola para poder usar el nuevo comando ``yarn``.

## [W] Error: Can't answer a question unless a user TTY

Este error sucede porque yarn parece requerir el manejo de ``TTY`` al hacer ``yarn init``. Una manera de evitar esto es la siguiente.

Debes situarte en la carpeta de tu proyecto y ejecutar los siguientes comandos:

```
$> yarn add yarn
$> node ./node_modules/yarn/bin/yarn.js init
```

Y ya podrás ver y responder las preguntas para inicializar tu proyecto con yarn.