const criancasModel = require('../src/models/criancasModel')

describe('Get route test', () => {
    const crianca = new criancasModel({
        "name": "Ana Maria",
        "cpf": 58996523114,
        "age": 4,
        "gender": "female",
        "condition": true

    })

    it("Deve chamar o schema e retornar o nome da criança correto", () => {
        expect(crianca.name).toBe("Ana Maria")
    })

    it("Deve chamar o schema e retornar o cpf da criança correto", () => {
        expect(crianca.cpf).toBe(58996523114) //cpf é " "?
    })

    it("Deve chamar o schema e retornar a idade da criança correta", () => {
        expect(crianca.age).toBe(4)
    })

    it("Deve chamar o schema e retornar o gênero da criança correto", () => {
        expect(crianca.gender).toBe("female")
    })
    it("Deve chamar o schema e retornar a condition como verdadeiro", () => {
        expect(crianca.condition).toBe(true)
    })
})

describe("Create route test", () => {
    const crianca = new criancasModel({
        "name": "Ana Maria",
        "cpf": 58996523114,
        "age": 4,
        "gender": "female",
        "condition": true

    })

    it("Deve criar no banco de dados um novo cadastro de criança", () => {
        crianca.save().then((dados) => {
            expect(dados.name).toBe("Ana Maria")

        })

    })
})

describe("Update route test", () => {
    it("Deve modificar o nome e atualizar no banco de dados o novo nome", () => {
        const crianca = new criancasModel({
            "name": "Ana Maria",
            "cpf": 58996523114,
            "age": 4,
            "gender": "female",
            "condition": true

        })
        crianca.name = "novo nome"
        crianca.save().then((dados) => {
            expect(dados.name).toBe("novo nome")
        })
    })
})
describe("Delete route test", () => {
    it("Deve excluir os dados de uma criança", () => {
        const crianca = new criancasModel({
            "name": "Ana Maria",
            "cpf": 58996523114,
            "age": 4,
            "gender": "female",
            "condition": true
        })
        crianca.save().then((dados) => {
            crianca.delete().then((dados) => {
                expect(dados.name).toBe(null)

            })
        })
    })


})

