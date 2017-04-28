# Incidencias, Experiencias y Workarounds

Este archivo es una guía de ayuda para la resolución de problemas o situaciones de incompatibilidad. A continuación se listarán una serie de títulos indicando ``[I]`` si se trata de una incidencia o problema, una ``[E]`` indicando una experiencia o anécdota y una ``[W]`` indicando un workaround o forma de continuar sin resolver el problema.

## [I] Incompatibilidad con PC's de 32 bits

Al momento de descargar los SDK's a través de Android Studio la herramienta descargará la última versión de Gradle y la última versión de los SDK. Pero estas versiones no son compatibles con las PC's de 32 bits, por esto es necesario degradar las versiones en cuestión.

Se recomienda la versión 23.0.1 para los SDK y la 2.2.3 de Gradle. Después de descargarlas, la versión de SDK se agrega en la carpeta ``<ruta de android>/Android/Sdk/build-tools/`` y cambiando la referencia a esta versión en el archivo ``build.gradle(Module: app)``. Para ver este archivo debe ejecutar Android Studio y crear un proyecto cualquiera (con cualquier plantilla) y acceder a la sección ``Gradle Scripts``. Posteriormente al abrir el archivo verá algo como esto:

```js
apply plugin: 'com.android.application'

android {
    compileSdkVersion 25
    buildToolsVersion "25.0.2"
    repositories {
        maven { url 'http://repo1.maven.org/maven2' }
    }
    defaultConfig {
        applicationId "com.example.aduarte.myapplication"
        minSdkVersion 15
        targetSdkVersion 25
        versionCode 1
        versionName "1.0"
        testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
    }
...
```

En el cual deberá modificar las líneas ``4``, ``5`` y ``12`` con la versión que descargó anteriormente.

Después de esto es recomendable que pruebe si los cambios dieron efecto haciendo click derecho sobre el archivo y seleccionando la opción de ``Run 'build'``. Si la ejecución de la nueva configuración es exitosa  ya podrá continuar con su aplicación con Ionic 2.

## [W] No se modifica el splash screen/ícono

Desafortunadamente la herramienta Ionic mantiene una caché en la que los cambios no se verán reflejados después de ejecutar un ``ionic resources``, por lo que es necesario ejecutar los siguientes comandos situado sobre el proyecto:

```
$> ionic platform remove android
$> ionic platform add android
$> ionic resources
```

Recuerde verificar que los recursos que colocó (splash.png o icon.png) deben estar en la carpeta ``<proyecto>/resources/``.

## [I] Error junit al hacer build de gradle

Al crear un proyecto con android studio para poder visualizar las opciones para descragar los SDK's necesarios, se ejecuta el método ``build`` de ``Gradle`` y se generan algunos errores. Entre los errores de primero debe encontrarse un error relacionado con la versión ``4.12`` de ``junit`` y esto se debe a que el proyecto no contiene la dependencia necesaria para utilizar esa versión de ``junit``. De este problema hay dos posibles soluciones, la primera es agregar las siguientes líneas de código el archivo ``build.gradle(Module:app)``:

```js
repositories {
	maven { url 'http://repo1.maven.org/maven2' }
}
```

Y el archivo debería quedar parecido al siguiente ejemplo:

```js
apply plugin: 'com.android.application'

android {
    compileSdkVersion 25
    buildToolsVersion "25.0.3"
    defaultConfig {
        applicationId "com.example.mharrigan.myapplication"
        minSdkVersion 15
        targetSdkVersion 25
        versionCode 1
        versionName "1.0"
        testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
    }
    repositories {
        maven { url 'http://repo1.maven.org/maven2' }
    }
...
```

La segunda solución es eliminar ``junit`` y agregarlo de nuevo siguiendo estos pasos:

* Ir a la pestaña File
* Seleccionar la opción Project Structure
* Seleccionar app en la sección de Modules
* Seleccionar ``junit``
* Eliminarlo
* Agregarlo nuevamente
* Es posible que tenga que escribir manualmente ``junit:junit:4.12`` para volverlo a agregar

## [E] Cómo instalar o actualizar a la última versión estable de Node (LTS)

Es muy común esta pregunta y a continuación se encuentran los comandos que debe ingresar:

```sh
$> sudo npm cache clean -f
$> sudo npm install -g n
$> sudo n stable
```

## [I] Has no exported Member 'IonicNativePlugin'

Este error ocurre cuando se agrega un plugin de Ionic2 como ``SQLite`` o ``Camera`` y la versión de ``@ionic-native/core`` es menor a la ``3.6.0``. La solución es simplemente ir al archivo ``package.json`` en la carpeta del proyecto y cambiar la versión de la dependencia de la siguiente forma:

```js
{
  "name": "ionic-hello-world",
  "version": "0.0.0",
  "author": "Ionic Framework",
  "homepage": "http://ionicframework.com/",
  "private": true,
  "scripts": {
    ...
  },
  "dependencies": {
    ...
    "@ionic-native/core": "3.6.0",
    ...
  },
  ...
}
```

Luego debe eliminar la carpeta ``node_modules`` y ejecutar el comando:

```sh
$> npm install
```
