/***************************************************************
Atualiza o select HORA com as horas disponíveis para agendamento
*/
import { scheduleFetchByDay } from "../../sevices/schedule-fetch-by-day"
import { loadSelectHoursAvailable } from "./hours-load"

const serviceDateSelect = document.getElementById("service-date")
// const dateSelect = document.getElementById("service-date")

// serviceDateSelect.onchange = async () => {
serviceDateSelect.addEventListener('change', async function () {

    await loadSelectHoursAvailable()
})
