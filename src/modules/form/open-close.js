const botaoNovoAgendamento = document.querySelector('.div-botao-agendar');
const telaListaAgendamentos = document.querySelector('.app-container');
const telaPopUp = document.querySelector('.popup');


export function novoAgendamento() {

    botaoNovoAgendamento.addEventListener('click', function (e) {
        e.preventDefault();
        console.log("clicou em novo agendamento")

        telaPopUp.style.display = 'flex';
        telaListaAgendamentos.classList.add('blur');
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