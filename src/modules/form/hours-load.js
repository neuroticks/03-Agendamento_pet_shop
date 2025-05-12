import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours"
import { hoursClick } from "./hours-click"

const hours = document.getElementById("hours")

export function hoursLoad( { date, dailySchedules }) {
    // limpa a lista de horarios
    hours.innerHTML = ""
    
    const unavailableHours = dailySchedules.map ((schedule) => 
        dayjs(schedule.when).format("HH:mm")
    )

    // console.log(unavailableHours)

    const opening = openingHours.map((hour) => {
        const [scheduleHour] = hour.split(":")

        // console.log(`analisando horario ${hour}`)

        const isHourAfterNow = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        // console.log(`isHourAfterNow = ${isHourAfterNow}`)

        const isHourAlreadyScheduled = unavailableHours.includes(hour)
        // console.log(`isHourAlreadyScheduled = ${isHourAlreadyScheduled}`)

        // define se horario esta disponível
        return {
            hour,
            available: (isHourAfterNow && !isHourAlreadyScheduled)
        }
    })

    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if (hour === "09:00"){
            hourHeaderAdd("Manhã")
        }
        else if (hour === "13:00"){
            hourHeaderAdd("Tarde")
        }
        else if (hour === "18:00"){
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })

    hoursClick()
}

function hourHeaderAdd( title ){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}