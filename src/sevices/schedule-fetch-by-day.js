import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({ date }) {
    try {
        // console.log(` === == == date = ${date}`)
        const response = await fetch(`${apiConfig.baseURL}/agendamentos`)

        const data = await response.json()

        // const teste = data.map((elem) =>
        //     console.log(`### id=${elem.id} // when=${elem.when} // pet_name=${elem.pet_name} // name=${elem.name} // servico=${elem.servico}`)
        // )

        const dailySchedules = data.filter((schedule) =>
            dayjs(date).isSame(schedule.when, "day")
        )

        // console.log(" ----- antes")
        // const xpto = dailySchedules.map((elem) =>
        //     console.log(`>>>>>> id=${elem.id} // when=${elem.when} // pet_name=${elem.pet_name} // name=${elem.name} // servico=${elem.servico}`)
        // )
        // console.log(" ----- depois")

        return dailySchedules

    } catch (error) {
        console.log(error)
        alert("não foi possível buscar os agendamentos do dia informado")
    }
}