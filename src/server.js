// Servidor
const express = require('express')
const server = express()

const {
  pageLanding,
  pageStudy,
  pageGiveClasses
} = require('./pages')

// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Início e configuração do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
// start do servidor
.listen(5000)