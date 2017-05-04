# Ejemplo de Conexión MySQL con Express

Este ejemplo ilustra un Back-end que define varios servicios para manipular la tabla ``User`` de la base de datos. Para esto, se crea una conexión a base de datos con las credenciales necesarias y se define un evento que se ejecuta al momento de haber un erro con la conexión. Así al momento de perder la conexión por cualquier razón se intenta restablecer la misma.

Los servicios utilizan diferentes métodos Http según el tipo de acceso a la tabla.

## Instalación

Para este ejemplo es necesario instalar los siguientes módulos:

* [express](https://www.npmjs.com/package/express) ``npm install express --save``
* [body-parser](https://www.npmjs.com/package/body-parser) ``npm install body-parser --save``
* [multer](https://www.npmjs.com/package/multer) ``npm install multer --save``
* [mysql](https://www.npmjs.com/package/mysql) ``npm install mysql --save``

## Ejecución

Para su ejecución es necesario un cliente que realice las llamadas Http y retorne la respuesta del servidor como lo haría la herramienta [Postman](https://www.getpostman.com/).

También es necesario la instalación de un manejador MySQL y exportar el archivo ``database.sql`` que se encuentra para generar la estructura de la base de datos que utiliza el servidor.

## Servicios

Este ejemplo expone los siguientes servicios:

* GET ``/User/listAll``: Lista todos los usuarios en la BD.
* GET ``/User/:id``: Retorna el usuario con el ``id`` ingresado (en caso de no encontrarlo retorna un mensaje de error).
* PUT ``/User/:id``: Actualiza los datos del usuario indicado por su ``id`` con los parámetros ``{"name": <string>, "lastname": <string>}`` en el body de la petición.
* POST ``/User``: Inserta un usuario en la BD con los parámetros ``{"name": <string>, "lastname": <string>}`` en el body de la petición.
* DELETE ``/User/:id``: Elimina el usuario con el ``id`` ingresado (en caso de no encontrarlo retorna un mensaje de error).

```
Nota: Este ejemplo contiene código escrito en lenguaje Coffeescript por comodidad del autor. No es necesario tomar en cuenta los archivos con la extensión .coffee.
```
