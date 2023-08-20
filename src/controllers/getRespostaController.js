
import MongoFactory from '../factory/mongoFactory.js'

export default class GetRespostaController {
    async handle(request, response) {
        const { messages, tags } = request.body
        const mongoFactory = MongoFactory.createInstance()
        
        return response.json({ result: "ola mundo!" })
    }  
}
