/**************************************************************
Atualiza a tela com os agendamentos conforme a data selecionada
*/
import { schedulesDay } from "./load"

const selectedDate = document.getElementById("date")

selectedDate.onchange = () => {
    console.log("file schedules/list.js");
    console.log("Atualiza a tela com os agendamentos conforme a data selecionada");

    schedulesDay()
}