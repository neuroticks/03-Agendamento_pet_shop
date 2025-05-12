import { schedulesDay } from "./schedules/load.js"


console.log("file [modules/page-load.js]")
console.log("schedulesDay()")

document.addEventListener("DOMContentLoaded", () => {
  schedulesDay()
})