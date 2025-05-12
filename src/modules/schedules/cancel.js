import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../sevices/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

periods.forEach( (periodo) => {

    periodo.addEventListener("click", async (event) => {

        if (event.target.classList.contains("del-agendamento")){
            
            const item = event.target.closest("li")
            const { id } = item.dataset

            if ( id ){
                // const isConfirm = confirm("Deseja excluir agendamento?")
                const isConfirm = true

                if (isConfirm){
                    await scheduleCancel({ id })
                    schedulesDay()
                }
            }
        }
    })
})