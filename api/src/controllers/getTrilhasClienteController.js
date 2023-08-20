
import DatabaseFactory from '../factory/mongoFactory.js'

export default class GetTrilhasClienteController {
    async handle(request, response) {
        const databaseFactory = DatabaseFactory.createInstance()
        const id = request.params.id

        const trilha = await databaseFactory.findTrilha(id)
        const seloTrilha = await databaseFactory.findSelo(trilha.seloid)
        trilha.selo = seloTrilha

        const missoes = await databaseFactory.findMissaoTrilha(id)
        trilha.missoes = missoes
        return response.json(trilha)
    }  
}

//bit.my.hackapastas