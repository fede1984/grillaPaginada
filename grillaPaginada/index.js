
const express = require('express')
const path = require('path')
var __dirname = path.resolve()
const PORT = process.env.PORT || 5050




express()
  .use( express.static(path.join(__dirname, 'public')) )
  .use( "/css",express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))
  .use( "/js",express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))) 
  .use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))
  .use("/js", express.static(path.join(__dirname, "node_modules/gridjs/dist/")))
  .use("/ts", express.static(path.join(__dirname, "node_modules/gridjs/dist/")))
  .use("/ts", express.static(path.join(__dirname, "node_modules/gridjs/dist/src")))
  .use("/css", express.static(path.join(__dirname, "node_modules/gridjs/theme/")))
  .get( '/', (req, res) => res.redirect('/index.html') )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

