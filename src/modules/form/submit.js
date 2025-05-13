import dayjs from "../../libs/dayjs"

import { scheduleNew } from "../../sevices/schedule-new"
import { schedulesDay } from "../schedules/load"

const form = document.querySelector("form")
const nomeTutor = document.getElementById("nome-tutor")
const nomePet = document.getElementById("nome-pet")
const fone = document.getElementById("phone")
const servico = document.getElementById("service")
const servicoData = document.getElementById("service-date")
const servicoHora = document.getElementById("service-time")

form.onsubmit = async (event) => {
    event.preventDefault() // Evita o envio do formulário

    try {
        const l_nomeTutor = nomeTutor.value.trim()
        if (!l_nomeTutor) {
            return alert("Informe o nome do cliente")
        }
        const l_nomePet = nomePet.value.trim()
        if (!l_nomePet) {
            return alert("Informe o nome do pet")
        }
        const l_fone = fone.value.trim()
        if (!l_fone) {
            return alert("Informe o telefone")
        }
        const l_servico = servico.value.trim()
        if (!l_servico) {
            return alert("Informe o serviço")
        }
        const l_data = servicoData.value
        if (!l_data) {
            return alert("Informe o dia")
        }
        const l_hora = servicoHora.value
        if (!l_hora) {
            return alert("Informe a hora")
        }

        const [l_horaAgendamento] = l_hora.split(":")

        const l_dataAgendamento = dayjs(l_data).add(l_horaAgendamento, "hour").format()

        const id = new Date().getTime().toString()

        await scheduleNew({
            id,
            name: l_nomeTutor,
            pet_name: l_nomePet,
            servico: l_servico,
            when: l_dataAgendamento
        })

        await schedulesDay()

        const telaListaAgendamentos = document.querySelector('.app-container');
        const telaPopUp = document.querySelector('.popup');

        telaPopUp.style.display = 'none';
        telaListaAgendamentos.classList.remove('blur');

    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }
}