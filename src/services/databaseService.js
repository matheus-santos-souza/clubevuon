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

    async findSelo(id) {
        const result = await this.prismaClient.selo.findUnique({
            where: {
                id: id
            }
        })
        return result
    }

    async findTrilhasCliente(id) {
        const result = await this.prismaClient.trilhacliente.findMany({
            where: {
                clientid: id
            }
        })
        return result
    }

    async findTrilha(id) {
        const result = await this.prismaClient.trilha.findUnique({
            where: {
                id: id
            }
        })
        return result
    }

    async findSelosCliente(id) {
        const result = await this.prismaClient.selocliente.findMany({
            where: {
                clientid: id
            }
        })
        return result
    }


}