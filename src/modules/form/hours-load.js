import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours"
import { scheduleFetchByDay } from "../../sevices/schedule-fetch-by-day"

const serviceDateSelect = document.getElementById("service-date")
const serviceHourSelect = document.getElementById("service-time")

export async function loadSelectHoursAvailable() {
    // data usada para consulta
    const date = serviceDateSelect.value
    // agendamentos dessa data
    const temp_datas_reservadas = await scheduleFetchByDay({ date })
    // console.log(temp_datas_reservadas)

    // limpa a lista de horarios
    serviceHourSelect.innerHTML = ""

    const horaJaReservada = temp_datas_reservadas.map((schedule) =>
        dayjs(schedule.when).format("HH:mm")
    )
    // console.log(horaJaReservada)

    const horaDisponibilidade = openingHours.map((hour) => {
        // console.log(`PRIMEIRO [hour]=${hour}`)
        const [horaAtendimento] = hour.split(":")

        const isHourAfterNow = dayjs(date).add(horaAtendimento, "hour").isAfter(dayjs())
        // console.log(`SEGUNDO [isHourAfterNow]=${isHourAfterNow}`)

        const isHourAlreadyScheduled = horaJaReservada.includes(hour)
        // console.log(`TERCEIRO [isHourAlreadyScheduled]=${isHourAlreadyScheduled}`)

        // define se horario esta disponível
        // console.log(`QUARTO [AVAILABLE]=${(isHourAfterNow && !isHourAlreadyScheduled)}`)
        return {
            hour,
            available: (isHourAfterNow && !isHourAlreadyScheduled)
        }
    })

    horaDisponibilidade.forEach(({ hour, available }) => {
        // console.log(` - - - - - [${hour}] - [${available}]`)
        const option = document.createElement('option');
        if (available) {
            option.value = hour;
            option.textContent = hour;
            serviceHourSelect.appendChild(option);
        }
    })

    console.log(serviceHourSelect)
}
