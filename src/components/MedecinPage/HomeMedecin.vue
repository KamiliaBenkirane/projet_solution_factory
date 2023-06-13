<template>
  <h1>Home Medecin en cours de développement</h1>
</template>

<script>
export default {
  name: "HomeMedecin"
}

var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end('Hello World!');
}).listen(8080);

</script>

<style scoped>

</style>