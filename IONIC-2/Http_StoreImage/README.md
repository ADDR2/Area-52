# Ejemplo de envío de Imágenes por Http

Este es un proyecto ejemplo que ilustra cómo enviar imágenes via http a un servidor y almacenarlas en el file system del mismo.

Al ingresar a la aplicación se pedirá tomar una foto, luego se le da al usuario una opción para recortar la imágen y al terminar la imagen será enviada al servidor con un método post en formato json y la información de la imágen en formato base 64.

```
Nota: Este ejemplo incluye los siguientes componentes:
*  Http handler
*  Camera handler
*  Alertas al usuario
*  Loader (mientras carga o procesa una acción)
```

Para comenzar el autor ejecutó los siguientes comandos:

```
$> ionic start Http_StoreImage tutorial --v2
$> cd Http_StoreImage
$> ionic platform add android
$> ionic resources
$> ionic plugin add cordova-plugin-camera
$> npm install --save @ionic-native/camera
$> ionic plugin add cordova-plugin-http
$> npm install --save @ionic-native/http
```
Estos comandos se encargarán de crear una aplicación base con todos los archivos necesarios para desarrollar el ejemplo. Para más información acerca de los comandos utilizados leer el readme principal del proyecto IONIC-2.

## Servidor

Este ejemplo contiene el código de un sevidor desarrollado en Node para poder poner en práctica la aplicación. Por esta razón es necesario levantar el servidor antes de probar y hacer un cambio en el código de la aplicación.

Ya que este servidor es de uso local, es necesario el conocimiento de la dirección IP de su máquina y colocarla en el archivo ``camera.ts`` que se encuentra en la carpeta ``<ruta del area 52>/Area-52/IONIC-2/Http_StoreImage/src/pages/camera/`` en la línea de código ``53`` como se ilustra a continuación:

```js
...
camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpg;base64,' + imageData;
      this.data = base64Image;

      loading.present();

      http.post('http://<dirección IP local>:3000' + '/UploadImage', { 'Data': this.data }, { 'Content-Type': 'application/json', 'Content-Transfer-Encoding': 'base64' })
        .then(data => {

...
```

Donde ``<dirección IP local>`` debe ser sustituido por la dirección IP de su máquina.

Para levantar el servidor sólo es necesario colocarse sobre la carpeta ``<ruta del area 52>/Area-52/IONIC-2/Http_StoreImage/Server/`` y ejecutar el siguiente comando:

```
$> node index.js
```
