function get(url) {
  // Retorna una promesa nueva.
  return new Promise(function(resolve, reject) {
    // Típica llamada XMLHttpRequest
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // Esto se llama incluso con un 404
      // para verificar el estatus
      if (req.status === 200) {
        // Resuelve la promesa con el texto de la respuesta
        resolve(req.response);
      }
      else {
        // De otra forma la rechaza con el texto de la respuesta
        // el cual seguramente será un error significativo
        reject(Error(req.statusText));
      }
    };

    // Maneja errores de red
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Se hace el request
    req.send();
  });
}

// Se llama a la función con una dirección de prueba
// intenta con una dirección falsa para ver el error de red
get('https://httpbin.org/get').then(function(response) {
  // Retorna la respuesta parseada a un objeto json
  return JSON.parse(response);
}, function(err){
  // Muestra el error de red
  console.log("Oh no", err);
}).then(function(response) {
  // Muestra los headers del request recibidos del objeto json retornado anteriormente
  console.log("Yey JSON!", response.headers);
});
