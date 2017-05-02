# Guía de uso de Express

Express es un pequeño framework que facilita el desarrollo de Back-end sobre Node. Es decir, es posible desarrollar un Back-end con Node pero es más complicado en términos de líneas de código. Por lo que nace Express.

## Instalación

Express requiere de la instalación de las siguientes herramientas:

* [Node.js](https://nodejs.org/es/download/package-manager/)

Es recomendable el uso de la versión más estable de Node, es decir la versión LTS más actual. A continuación se ilustran los comandos utilizados por el autor para instalar Node:

```
$> curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$> sudo apt-get install -y nodejs
$> sudo apt-get install nodejs-legacy
```

## Proyecto Express

Para comenzar es neceario crear una carpeta del proyecto, luego dentro de la misma se ejecuta el siguiente comando:

```
$> npm install express --save
```

Una vez completado con éxito la descarga de las dependencias sólo es necesario crear un archivo principal del Back-end, que por lo general es ``index.js`` y comenzar a desarrollar.

## Deploy del servidor

Para levantar el servidor es necesario el siguiente comando:

```
$> node <archivo del Back-end>.js
```

Donde ``<archivo del Back-end>`` debe reemplazarlo por el nombre del archivo principal del Back-end (ejemplo: ``index.js``).
