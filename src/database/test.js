const Database = require('./db.js')
const createProffy = require('./createProffy')


Database.then(async (db) => {
  // Inserir dados

  proffyValue = {
    name: "Mayk Brito",
    avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp: "95551234",
    bio: "Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.<br><br>Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: 'Aprenda a fazer dinheiro com isso!'"
  }

  classValue = {
    subject: "Educação Física",
    cost: "40",
    // o proffy id virá pelo banco de dados
  }

  classScheduleValues = [
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
  

  // await createProffy(db, { proffyValue, classValue, classScheduleValues })

  // Consultar dados inseridos

  // todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys")
  // console.log(selectedProffys)

  // consultar as classes de um determinado professor
  //e trazer junto os dados do professor
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id  = 1
  `)
  // console.log(selectClassesAndProffys)

  // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
  // o horário do time_from (8h) precisa ser antes ou igual ao horário solicitado
  // o time_to precisa ser acima
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "620"
    AND class_schedule.time_to > "620"
  `)

  console.log(selectClassesSchedules)
})