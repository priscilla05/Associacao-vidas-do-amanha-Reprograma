const padrinhoModel = require('../src/models/padrinhoModel')

describe('Get route test', () => {
    const padrinho = new padrinhoModel({
        "name": "Paulo Antonio",
        "cpf": 11466987551,
        "telephone": 8898744130,
        "endereco": "Av.Ruy Barbosa, 456"
    })

    it("Deve chamar o schema e retornar o nome do padrinho correto", () => {
        expect(padrinho.name).toBe("Paulo Antonio")
    })

    it("Deve chamar o schema e retornar o cpf correto do padrinho", () => {
        expect(padrinho.cpf).toBe("11466987551") //cpf é " "?
    })

    it("Deve chamar o schema e retornar o telefone correto do padrinho", () => {
        expect(padrinho.telephone).toBe("8898744130")
    })

    it("Deve chamar o schema e retornar o endereço correto do padrinho", () => {
        expect(padrinho.endereco).toBe("Av.Ruy Barbosa, 456")
    })
})

describe("Create route test", () => {
    const padrinho = new padrinhoModel({
        "name": "Paulo Antonio",
        "cpf": 11466987551,
        "telephone": 8898744130,
        "endereco": "Av.Ruy Barbosa, 456"
    })

    it("Deve criar no banco de dados um novo cadastro de padrinho", () => {
        padrinho.save().then(dados) => {
            expect(dados.name).toBe("Paulo Antonio")

        }

    })
})

    describe("Update route test", () => {
        it("Deve modificar o nome e atualizar no banco de dados o novo nome", () => {
            const padrinho = new padrinhoModel({
                "name": "Paulo Antonio",
                "cpf": 11466987551,
                "telephone": 8898744130,
                "endereco": "Av.Ruy Barbosa, 456"
                

            })
            padrinho.name = "novo nome"
            padrinho.save().then(dados) => {
                expect(dados.name).toBe("novo nome")
            }
        })
    })
    describe("Delete route test", () => {
        it("Deve excluir os dados de um padrinho", () => {
            const padrinho = new padrinhoModel({
                "name": "Paulo Antonio",
                "cpf": 11466987551,
                "telephone": 8898744130,
                "endereco": "Av.Ruy Barbosa, 456"

            })
            padrinho.save().then(dados) => {
                padrinho.delete().then(dados) => {
                    expect(dados.name).toBe(null)

                }
            }
        })    
       
    
    })
