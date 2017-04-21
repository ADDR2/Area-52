# Guía de uso IONIC 2

## Introducción

Ionic 2 es una herramienta que permite el desarrollo de aplicaciones para dispositivos como teléfonos y tablets con el uso de Typescript como lenguaje base y AngularJS 2 como framework del lado del cliente. Las vistas se desarrollan con html5, los estilos con SASS y el comportamiento de la aplicación con Typescript (este es una extensión de ECMAScript6, para más información visite [Typescript Doc](https://www.typescriptlang.org/)).

Ionic 2 compila la solución en los lenguajes anteriormente mencionados a una solución utilizando la ayuda de [Cordova](https://cordova.apache.org/) (otra herramienta intermediaria) para obtener el código correspondiente al SDK proporcionado de los dispositivos en cuestión (Android, iOS, Windows Phone, BlackBerry, etc...).


Para efectos de esta guía se estudiará el uso de Ionic 2 para Android, sin embargo
está disponible para cualquier cambio o inclusión de otros sistemas.

## Instalación

Ionic 2 requiere de la instalación de las siguientes herramientas:

 * [Node.js](https://nodejs.org/es/download/package-manager/)
 * [Cordova](https://www.npmjs.com/package/cordova)
 * [Ionic](https://www.npmjs.com/package/ionic)
 * [Adroid Studio](https://developer.android.com/studio/index.html?hl=es-419)

Es recomendable el uso de la versión más estable de Node, es decir la versión LTS más actual.

A continuación se ilustrarán los pasos utilizados por el autor de la guía para la instalación de cada herramienta.

### Node

```
$> curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$> sudo apt-get install -y nodejs
$> sudo apt-get install nodejs-legacy
```

### Cordova y Ionic

```
$> npm install -g ionic cordova
```

### Android Studio

Sólo se requiere de una descarga del paquete y se ejecuta el archivo ``studio.sh`` localizado en la carpeta ``bin`` del paquete descargado de la siguiente forma:

```
$> sh studio.sh
```
