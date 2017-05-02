# Ejemplo de Conexión MySQL con Express

Este ejemplo ilustra un Back-end que define varios servicios para manipular la tabla ``User`` de la base de datos. Para esto, se crea una conexión a base de datos con las credenciales necesarias y se define un evento que se ejecuta al momento de haber un erro con la conexión. Así al momento de perder la conexión por cualquier razón se intenta restablecer la misma.

Los servicios utilizan diferentes métodos Http según el tipo de acceso a la tabla.

## Instalación

Para este ejemplo es necesario instalar los siguientes módulos:

* [express](https://www.npmjs.com/package/express) ``npm install express --save``
* [body-parser](https://www.npmjs.com/package/body-parser) ``npm install body-parser --save``
* [multer](https://www.npmjs.com/package/multer) ``npm install multer --save``
* [mysql](https://www.npmjs.com/package/mysql) ``npm install mysql --save``
