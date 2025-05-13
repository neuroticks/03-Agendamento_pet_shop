import { scheduleFetchByDay } from "../../sevices/schedule-fetch-by-day.js"
import { scheduleShow } from "./show.js"
import dayjs from "../../libs/dayjs"

// seleciona o input de data
const dateSelect = document.getElementById("date")

export async function schedulesDay() {

    // obtem a data selecionada na tela principal (que lista os agendamentos/ horários disponíveis)
    const date = dateSelect.value

    // busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })

    // Mostra os agendamentos trazidos pela API
    scheduleShow({ dailySchedules })
}

export function setTodayDate() {

    const hoje = dayjs().format("YYYY-MM-DD").toString()
    dateSelect.value = hoje
}