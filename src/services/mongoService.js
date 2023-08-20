export default class MongoService {
    constructor(prismaClient) {
        this.prismaClient = prismaClient
    }

    async createDocumento(documento) {
        const topicos = documento.topicos.map((topico) => {
            return {
                text: topico.text,
                tags: topico.tags,
                createdAt: new Date(),
                updatedAt: new Date(),
                embedding: JSON.stringify(topico.embedding)
            }
        })
        const preparaDocumento = {
            titulo: documento.titulo,
            cigla: documento.cigla,
            revisao: documento.revisao,
            index: documento.index,
            topicos: {
                create: topicos
            }
        }
        const result = await this.prismaClient.documento.create({ 
            data: preparaDocumento,  
            include: {
                topicos: true,
            }, 
        })
        return result
    }

    async findDocumento(index) {
        const result = await this.prismaClient.documento.findMany({
            where: {
              index: index,
            },
            include: { topicos: true }
          })
        return result
    }

    async createIntent(documento) {
        const topicos = documento.topicos.map((topico) => {
            return {
                text: topico.text,
                title: topico.title,
                tags: topico.tags,
                createdAt: new Date(),
                updatedAt: new Date(),
                embedding: JSON.stringify(topico.embedding)
            }
        })
        
        const result = await this.prismaClient.intencao.createMany({ data: topicos  })
        return topicos
    }

    async findAllIntents() {
        const result = await this.prismaClient.intencao.findMany()
        return result
    }

    async findAllPerguntas() {
        const result = await this.prismaClient.pergunta.findMany()
        return result
    }

    async findAllTopicos() {
        const result = await this.prismaClient.topico.findMany()
        return result
    }

    async createResposta(resposta) {
        const result = await this.prismaClient.resposta.create({ 
            data: resposta
        })
        return result
    }

    async createPergunta(perguntas) {
        const resultPerguntas = perguntas.map((pergunta) => {
            return {
                pergunta: pergunta.pergunta,
                resposta: pergunta.resposta,
                tags: pergunta.tags,
                createdAt: new Date(),
                updatedAt: new Date(),
                perguntapai: pergunta.perguntapai,
                embedding: JSON.stringify(pergunta.embedding)
            }
        })
        
        const result = await this.prismaClient.pergunta.createMany({ data: resultPerguntas  })
        return resultPerguntas
    }
}