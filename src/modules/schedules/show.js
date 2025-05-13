import dayjs from "../../libs/dayjs"

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

/*
Cria os elementos HTML para a lista de agendamentos
*/
export function scheduleShow({ dailySchedules }) {
    try {
        console.log("Cria os elementos HTML para a lista de agendamentos")
        console.log(`file [schedules/show.js] function[scheduleShow]`)

        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        dailySchedules.sort((a, b) => new Date(a.when) - new Date(b.when))

        dailySchedules.forEach((agendamento) => {

            const item = document.createElement("li")
            const hora = document.createElement("strong")
            const pet_name = document.createElement("strong")
            const nome = document.createElement("span")
            const servico = document.createElement("p")

            item.setAttribute("data-id", agendamento.id)

            hora.textContent = dayjs(agendamento.when).format("HH:mm")
            nome.innerHTML = "<strong>" + agendamento.pet_name + "</strong> / " + agendamento.name
            servico.textContent = agendamento.servico

            const cancelLink = document.createElement("a")
            cancelLink.classList.add("del-agendamento")
            cancelLink.setAttribute("href", "")
            cancelLink.textContent = "Remover agendamento"

            item.append(hora, pet_name, nome, servico, cancelLink)

            const hour = dayjs(agendamento.when).hour()

            if (hour >= 18) {
                periodNight.appendChild(item)
            } else if (hour >= 13) {
                periodAfternoon.appendChild(item)
            } else {
                periodMorning.appendChild(item)
            }
        });

    } catch (error) {
        alert("não foi possível mostrar os agendamentos")
        console.log(error)
    }
}