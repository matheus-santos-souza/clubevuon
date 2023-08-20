import DatabaseService from "../services/databaseService.js"
import prismaClient from './../repository/prisma/index.js'

export default class DatabaseFactory {
    static createInstance() {
        const mongoService = new DatabaseService(prismaClient)
        return mongoService
    }
}