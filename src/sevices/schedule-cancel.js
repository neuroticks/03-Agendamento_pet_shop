import { apiConfig } from "./api-config.js"

export async function scheduleCancel({ id }) {
    // console.log("id = ", id)
    const rota = `${apiConfig.baseURL}/agendamentos/${id}`
    try {
        await fetch(rota, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        // alert("agendamento excluído com sucesso")

    } catch (error) {
        console.log(error)
        alert("Não foi possível cancelar agendamento")
    }

}