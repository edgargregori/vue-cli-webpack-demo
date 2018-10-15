// import { manejadorEventos } from '../../../main.js'
function sendDatetime (startTime, manejadorEventos) {
  console.log('startTime-from-factory:')
  console.log(startTime.time)
  var dateStartTime = new Date(startTime.time)
  manejadorEventos.$emit('enviar-start-datetime', dateStartTime.getTime())
}

function fromBeforeDay () {
  let date = new Date()
  date.setDate(date.getDate() - 2)
  // eslint-disable-next-line
  //console.log(date)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  if (month < 10) { month = '0' + month }
  let day = date.getDate()
  if (day < 10) { day = '0' + day }
  // eslint-disable-next-line
  //console.log(year + '-' + month + '-' + day)
  return year + '-' + month + '-' + day
}

function toAfterWeek () {
  let date = new Date()
  date.setDate(date.getDate() + 8)
  // eslint-disable-next-line
  //console.log(date)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  if (month < 10) { month = '0' + month }
  let day = date.getDate()
  if (day < 10) { day = '0' + day }
  // eslint-disable-next-line
  //console.log(year + '-' + month + '-' + day)
  return year + '-' + month + '-' + day
  // eslint-disable-next-line
  return '2018-02-22'
}

module.exports = {
  sendDatetime: sendDatetime,
  fromBeforeDay: fromBeforeDay,
  toAfterWeek: toAfterWeek
}
