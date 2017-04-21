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

Es necesario descargar los SDK's correspondientes a las diferentes versiones de Android que se requieran. A continuación se ilustran los pasos realizados por el autor para descargar los SDK's:

* Seleccionar la pestaña superior Tools
* Seleccionar opción Android
* Seleccionar opción SDK Manager
* Desplegar sección de Appearance & Behavior
* Desplegar la sección de System Settings
* Seleccionar la opción Android SDK
* Seleccionar la pestaña SDK Platforms
* Seleccionar las veriones de Android
* Presionar Apply

Una vez descargadas las versiones es necesario indicar la dirección de las mismas a Ionic y a Cordova, para esto se debe crear una variable de entorno que referencie a esta ruta donde se descargaron las versiones (mejor conocidas como SDK). El autor de la guía realizó los siguientes pasos para ello:

```
$> cd /etc/
$> vim profile
```

Añadir las siguientes líneas al final del archivo:

```
ANDROID_HOME=<ruta de android>/Android/Sdk
PATH=$PATH:$ANDROID_HOME
export PATH ANDROID_HOME
```
Donde ``<ruta de android>`` debe ser reemplazado por la ruta donde se encuentran los SDK's previamente descargados. Se recomienda la lectura del archivo ``Incidences.md`` en caso de errores o incompatibilidades. Para más información visite [Cordova Android Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/)

Por último para poder hacer uso de la aplicación en un dispositivo en modo debug es necesario crear el archivo ``51-android.rules`` en la ruta ``/etc/udev/rules.d`` y agregar la siguiente línea al archivo:

```
SUBSYSTEM=="usb", ATTR{<Vendor Id>}=="0bb4", MODE="0666", GROUP="plugdev"
```

Donde ``<Vendor Id>`` debe ser reemplazado por el vendor id del proveedor del dispositivo en cuestión. Para más información acerca de los Vendor Id visite [Debug in Device](https://developer.android.com/studio/run/device.html?hl=es-419)

Después de esto es necesario darle permisos a este archivo con el siguiente comando:

```
$> chmod a+r /etc/udev/rules.d/51-android.rules
```

## Mi primera aplicación

Se recomienda seguir el siguiente tutorial para comenzar a desarrollar [Ionic 2 Tutorial](http://ionicframework.com/docs/intro/tutorial/).

## Ejecución

Ionic 2 provee diversas formas para ejecutar tu aplicación, la más común de ellas es ``serve``. Esta compila la solución y la ejecuta utilizando tu navegador por defecto, es decir que podrás interactuar con tu aplicación en tu  navegador, sin embargo esta opción no provee servicios para funcionalidades como llamadas http, consultas a BD, manejo de periféricos y/o características propias del dispositivo. Esta opción también provee ``hot reloading`` de manera que no es necesario compilar de nuevo al hacer cambios en el código.

Otra opción es ejecutar en modo debug en el dispositivo, conectando por USB el dispositivo a la PC y ejecutando los siguientes comandos:

```
$> ionic platform add android
$> ionic run android
```
Para esto es necesario desbloquear las opciones de debug en el dispositivo. Visite [Android USB Debug Mode](https://www.kingoapp.com/root-tutorials/how-to-enable-usb-debugging-mode-on-android.htm) para desbloquear esta opción.

Para más información visite [Deploying to a Device](http://ionicframework.com/docs/intro/deploying/).

### Modo de producción

Este es una forma de compilar y firmar la solución con un certificado para poder ser instalada en cualquier dispositivo, ya sea a través de la play store o instalación manual del apk generado.

Para ello el autor realizó los siguientes pasos situado en la carpeta del proyecto:

```
$> cordova build --release android
$> keytool -genkey -v -keystore <nombre del certificado>.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```

Donde ``<nombre del certificado>`` debe ser reemplazado por el nombre que se le quiere dar al archivo de certificado que se quiere para la aplicación.

Esta generará un certificado válido por 10.000 días para poder ser publicado o instalado. Y requerirá de una contraseña para el certificado que deberá recordar para ingresarla en el siguiente paso.

Posteriormente se ejecuta el comando:

```
$> jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore <nombre del certificado>.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk alias_name
```

También deberá ingresar la contraseña del paso anterior.

Por último se ejecuta el comando:

```
$> <ruta de android>/Android/Sdk/build-tools/<versión del SDK utilizado>/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk <nombre del apk>.apk
```

Donde ``<ruta de android>`` es la ruta donde se descargaron los SDK's en uso, ``<versión del SDK utilizado>`` es la versión de SDK que se utiliza (esto debería ser una carpeta localizada dentro de build-tools, ejemplo: 25.0.2) y ``<nombre del apk>`` es el nombre que se le quiere dar al archivo de instalador de la aplicación.

Posteriormente sólo debe guardar o transferir este archivo a su dispositivo y hacer tab sobre el para instalarlo. Para más información acerca del modo de producción visite [Publishing your app](http://ionicframework.com/docs/v1/guide/publishing.html).

## Modificar Splash Screen e Ícono

Toda aplicación tiene un splash screen y un ícono por defecto. El splash screen es la animación o pantalla desplegada justo al iniciar la aplicación y el ícono es la imágen que se visualiza como el acceso directo de la aplicación en el dispositivo.

Para modificar estos recursos sólo es necesario reemplazar o crear los archivos ``icon.png``(en resolución 1024x1024), ``splash.png``(en resolución 2208x2208) y ejecutar el comando:

```
$> ionic resources
```

Se recomienda leer el archivo ``Incidences.md`` en caso de no notar algún cambio en estos recursos. Para más información visite [Icon and Splash Screen Image Generation](http://ionicframework.com/docs/v1/cli/icon-splashscreen.html).
