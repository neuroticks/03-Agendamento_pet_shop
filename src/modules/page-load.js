import { schedulesDay, setTodayDate } from "./schedules/load.js"
import { novoAgendamento, closeFormAbandon } from "./form/open-close.js"

console.log("file [modules/page-load.js]")
console.log("schedulesDay()")

document.addEventListener("DOMContentLoaded", () => {

  setTodayDate()

  schedulesDay()

  novoAgendamento()
  closeFormAbandon()
})
