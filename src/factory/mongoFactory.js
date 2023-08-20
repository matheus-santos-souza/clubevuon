import MongoService from "../services/mongoService.js"
import prismaClient from './../repository/prisma/index.js'

export default class MongoFactory {
    static createInstance() {
        const mongoService = new MongoService(prismaClient)
        return mongoService
    }
}