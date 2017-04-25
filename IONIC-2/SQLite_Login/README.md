# Ejemplo de uso de SQLite en el dispositivo

Este es un proyecto ejemplo que ilustra cómo hacer un login básico utilizando la base de datos SQLite del dispositivo.

El usuario simplemente ingresa su nombre de usuario y su contraseña en el formulario desplegado y la aplicación hará una consulta a BD para determinar si existe ese usuario. En caso de existir, se muestra una pantalla con el nombre del usuario como título y en caso contrario se muestra un mensaje de error diciendo que el usuario es inválido.

```
Nota: Este ejemplo incluye los siguientes componentes:
*  Navegación y pase de parámetros entre vistas
*  Alertas al usuario
*  Loader (mientras carga o procesa una acción)
*  Hash MD5
*  SQLite handler
```

Para comenzar el autor ejecutó los siguientes comandos:

```
$> ionic start SQLite_Login tutorial --v2
$> cd SQLite_Login
$> ionic platform add android
$> ionic resources
$> ionic plugin add cordova-sqlite-storage
$> npm install --save @ionic-native/sqlite
$> npm install ts-md5 --save
```
Estos comandos se encargarán de crear una aplicación base con todos los archivos necesarios para desarrollar el ejemplo. Para más información acerca de los comandos utilizados leer el readme principal del proyecto IONIC-2.
