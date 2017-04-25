# Incidencias, Experiencias y Workarounds

Este archivo es una guía de ayuda para la resolución de problemas o situaciones de incompatibilidad. A continuación se listarán una serie de títulos indicando ``[I]`` si se trata de una incidencia o problema, una ``[E]`` indicando una experiencia o anécdota y una ``[W]`` indicando un workaround o forma de continuar sin resolver el problema.

## [W] Enlace de Highcharts en parte inferior del gráfico

En la parte inferior del gráfico resultante aparece un enlace con el texto ``Highcharts.com``. Para evitar esto sólo es necesario agregar al archivo ``index.css`` en la carpeta ``<ruta del Area-52>/Area-52/Javascript/Browser_SQLite/css/`` las siguientes líneas:

```css
...
text.highcharts-credits{
  visibility: hidden;
}
```
