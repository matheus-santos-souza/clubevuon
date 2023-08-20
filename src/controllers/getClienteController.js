
import DatabaseFactory from '../factory/mongoFactory.js'

export default class GetClientesController {
    async handle(request, response) {
        const databaseFactory = DatabaseFactory.createInstance()
        const id = request.params.id

        const result = await databaseFactory.findCliente(id)
        
        return response.json(result)
    }  
}
