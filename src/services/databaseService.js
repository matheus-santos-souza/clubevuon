export default class DatabaseService {
    constructor(prismaClient) {
        this.prismaClient = prismaClient
    }

    async findManyClientes() {
        const result = await this.prismaClient.cliente.findMany()
        return result
    }

    async findCliente(id) {
        const result = await this.prismaClient.cliente.findUnique({
            where: {
                id: id
            }
        })
        return result
    }
}