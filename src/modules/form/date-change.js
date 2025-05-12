import { schedulesDay } from "../schedules/load"

const selectedDate = document.getElementById("date")

selectedDate.onchange = () => {
    console.log("arquivo form/datechage.js");
    console.log("selectedDate.onchange()");

    schedulesDay()
}