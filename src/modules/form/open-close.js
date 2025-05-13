import dayjs from "../../libs/dayjs"
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
        mantemMascaraDigitandoFone();
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
    serviceDateSelect.min = hoje

    await loadSelectHoursAvailable()
}

function mantemMascaraDigitandoFone() {
    document.getElementById('phone').addEventListener('input', function (e) {
        let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
        let valorFormatado = '';

        if (valor.length > 0) {
            valorFormatado = `(${valor.substring(0, 2)}`; // (XX
        }
        if (valor.length > 2) {
            valorFormatado += `) ${valor.substring(2, 7)}`; // ) XXXXX
        }
        if (valor.length > 7) {
            valorFormatado += `-${valor.substring(7, 11)}`; // -XXXX
        }
        
        e.target.value = valorFormatado;
    });
}

