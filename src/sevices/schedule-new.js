import { apiConfig } from "./api-config.js";

export async function scheduleNew( { id, name, pet_name, servico, when } ) {
    try {
        await fetch (`${apiConfig.baseURL}/agendamentos`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( { id, name, pet_name, servico, when } ),
        })

        alert("agendamento realizado com sucesso")
    } catch (error) {
        alert("não foi possível agendar.")
        console.log(error)
    }
    
}
