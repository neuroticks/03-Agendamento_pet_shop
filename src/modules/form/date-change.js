/***************************************************************
Atualiza o select HORA com as horas disponíveis para agendamento
*/
import { scheduleFetchByDay } from "../../sevices/schedule-fetch-by-day"
import { loadSelectHoursAvailable } from "./hours-load"

const serviceDateSelect = document.getElementById("service-date")
// const dateSelect = document.getElementById("service-date")

// serviceDateSelect.onchange = async () => {
serviceDateSelect.addEventListener('change', async function () {
    console.log("arquivo form/date-change.js");
    console.log("ServiceDateSelect.onchange()");

    const date = serviceDateSelect.value
    
    const temp_datas_reservadas = await scheduleFetchByDay({ date })

    loadSelectHoursAvailable({ date, temp_datas_reservadas })
})
