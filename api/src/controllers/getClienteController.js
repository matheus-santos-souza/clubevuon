
import DatabaseFactory from '../factory/mongoFactory.js'

export default class GetClientesController {
    async handle(request, response) {
        const databaseFactory = DatabaseFactory.createInstance()
        const id = request.params.id

        const cliente = await databaseFactory.findCliente(id)
        if (cliente) {
            const selo = await databaseFactory.findSelo(cliente.seloid) 
            cliente.seloperfil = selo

            const trilhasCliente = await databaseFactory.findTrilhasCliente(id)
            const trihasQuery = await trilhasCliente.map(async trilha => {
                return await databaseFactory.findTrilha(trilha.trilhaid)
            })
            const resultTrilhas = await Promise.all(trihasQuery)
            cliente.trilhas = resultTrilhas

            const selosCliente = await databaseFactory.findSelosCliente(id)
            const selosQuery = await selosCliente.map(async selo => {
                return await databaseFactory.findSelo(selo.seloid)
            })
            const resultSelos = await Promise.all(selosQuery)
            cliente.selos = resultSelos
        }


        return response.json(cliente)
    }  
}
