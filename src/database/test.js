const Database = require('./db.js')
const createProffy = require('./createProffy')


Database.then((db) => {
  // Inserir dados

  proffy = {
    name: "Mayk Brito",
    avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp: "95551234",
    bio: 'Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.<br><br>Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"'
  }

  classValue = {
    subject: "Educação Física",
    cost: "40",
    // o proffy id virá pelo banco de dados
  }

  classSchedule = [
    //class_id virá pelo banco de dados, após cadastramos a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]
  

  // createProffy(db, { proffyValue, classValue, classScheduleValue })

  // Consultar dados inseridos
})