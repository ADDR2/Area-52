# Incidencias, Experiencias y Workarounds

Este archivo es una guía de ayuda para la resolución de problemas o situaciones de incompatibilidad. A continuación se listarán una serie de títulos indicando ``[I]`` si se trata de una incidencia o problema, una ``[E]`` indicando una experiencia o anécdota y una ``[W]`` indicando un workaround o forma de continuar sin resolver el problema.

## [E] Ejecución doble de una sección de código

Mientras el autor desarrollaba la solución, intentó colocar las llamadas a la cámara y al manejador http en el contructor de la clase de la página. Esto ocasionó que se ejecutara dos (2) veces esa sección de código, haciendo que se tomaran dos (2) fotos y se hicieran dos (2) llamadas http al servidor.

La solución fue simplemente colocar esa llamadas en una función y colocar un botón para ejecutar esa función de la siguiente forma:

``camera.ts``

```js
...
constructor(public loadingCtrl: LoadingController, public alerCtrl: AlertController) {
    this.http = new HTTP();
    this.camera = new Camera();
  }

  takePicture(){
...
```

``camera.html``

```html
...
<button ion-button color="primary" round icon-right (click)="takePicture()">Take Picture!
  </button>
...
```
