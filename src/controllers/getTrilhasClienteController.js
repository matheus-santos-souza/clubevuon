
import DatabaseFactory from '../factory/mongoFactory.js'

export default class GetTrilhasClienteController {
    async handle(request, response) {
        const databaseFactory = DatabaseFactory.createInstance()
        const id = request.params.id

        const result = await databaseFactory.findTrilhasCliente(id)
        
        return response.json(result)
    }  
}
