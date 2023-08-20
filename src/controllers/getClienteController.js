
import DatabaseFactory from '../factory/mongoFactory.js'

export default class GetClientesController {
    async handle(request, response) {
        const databaseFactory = DatabaseFactory.createInstance()
        const id = request.params.id

        const cliente = await databaseFactory.findCliente(id)
        if (cliente) {
            const selo = await databaseFactory.findSelo(cliente.seloid) 
            cliente.selo = selo

            const trilhasCliente = await databaseFactory.findTrilhasCliente(id)
            const trihasQuery = await trilhasCliente.map(async trilha => {
                return await databaseFactory.findTrilha(trilha.trilhaid)
            })
            const resultTrilhas = await Promise.all(trihasQuery)
            cliente.trilhas = resultTrilhas
        }


        return response.json(cliente)
    }  
}
