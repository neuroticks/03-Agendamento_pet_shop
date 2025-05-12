import { scheduleFetchByDay } from "../../sevices/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load"
import { scheduleShow } from "./show.js"

// seleciona o input de data
const selectedDate = document.getElementById("date")


export async function schedulesDay() {

    console.log("file [schedules/load.js]")
    console.log("schedulesDay()")

    // obtem a data selecionada na tela principal (que lista os agendamentos/ horários disponíveis)
    const date = selectedDate.value

    // busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })

    // Mostra os agendamentos trazidos pela API
    // To-Do -- deve ser revisto
    scheduleShow({ dailySchedules })

    // os horários disponíveis para agendamento
    // desabilita os horários não disponíveis
    // To-Do -- deve ser revisto
    //hoursLoad({ date, dailySchedules })
}