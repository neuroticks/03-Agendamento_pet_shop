import dayjs from "dayjs"
import { loadSelectHoursAvailable } from "./hours-load"

const botaoNovoAgendamento = document.querySelector('.div-botao-agendar');
const telaListaAgendamentos = document.querySelector('.app-container');
const telaPopUp = document.querySelector('.popup');
const serviceDateSelect = document.getElementById("service-date")


export function novoAgendamento() {

    botaoNovoAgendamento.addEventListener('click', function (e) {
        e.preventDefault();
        console.log("clicou em novo agendamento")

        telaPopUp.style.display = 'flex';
        telaListaAgendamentos.classList.add('blur');
        setDateTimeSelectValues();
    });
}

export function closeFormAbandon() {

    telaPopUp.addEventListener('click', function (e) {
        if (e.target === telaPopUp) {
            telaPopUp.style.display = 'none';
            telaListaAgendamentos.classList.remove('blur');
        }
    });
}

async function setDateTimeSelectValues() {

    const hoje = dayjs().format("YYYY-MM-DD").toString()
    serviceDateSelect.value = hoje

    await loadSelectHoursAvailable()
}