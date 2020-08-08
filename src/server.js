//Dados

const proffys = [
  { 
   name: "Diego Fernandes",
   avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
   whatsapp: "899976456",
   bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
   subject: "Química",
   cost: "20",
   weekday: [0],
   time_from: [720],
   time_to: [1220]
  },
  { 
    name: "Mayk Brito",
    avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp: "899976456",
    bio: 'Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.<br><br>Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"',
    subject: "Educação Física",
    cost: "40",
    weekday: [1],
    time_from: [720],
    time_to: [1220]
   },
   { 
    name: "Ted Mosby",
    avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.c9YWEyqSYt8l-_JIVX4nDwHaHa%26pid%3DApi&f=1",
    whatsapp: "899976456",
    bio: 'As vezes não sei nem onde eu tô, mas consigo me localizar facilmente em qualquer lugar. Tenho memória fotográfica e nunca fico perdido.<br><br>Eu ensino a galera como não se perder na vida, com lições geográficas simples para você nunca mais precisar de mapa na sua bela vida.',
    subject: "Geografia",
    cost: "360",
    weekday: [1],
    time_from: [720],
    time_to: [1220]
   }
]

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química"
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
]

// Funcionalidades

function getSubject(subjectNumber) {
  const position = +subjectNumber - 1
  return subjects[position]
}

function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
  const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
  const data = req.query
  
  //[name, avatar, ..]
  const isNotEmpty = Object.keys(data).length != 0
  //se tiver dados
  if (isNotEmpty) {

    data.subject = getSubject(data.subject)
    //adicionar dados a lista de proffys
    proffys.push(data)

    return res.redirect("/study")
  }

  //senão só mostrar a página
  return res.render("give-classes.html", { subjects, weekdays })
}

// Servidor
const express = require('express')
const server = express()


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