import { schedulesDay, setTodayDate } from "./schedules/load.js"
import { novoAgendamento } from "./schedules/new.js"

console.log("file [modules/page-load.js]")
console.log("schedulesDay()")

document.addEventListener("DOMContentLoaded", () => {

  setTodayDate()

  schedulesDay()


})
