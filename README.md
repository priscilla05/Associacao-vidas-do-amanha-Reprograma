<h1 align="center">
<img src="public/images/crianca.gif" alt="Menino de braços abertos" width="500" height="500" /> 
</h1>
<br>

# Projeto Final 

## Apresentação

A Associação Vidas do Amanhã (AVA) é o projeto de conclusão do curso de Backend da {Reprograma}, foi inspirada em uma associação real, situada em João Pessoa- Paraíba da qual fui voluntária. Fui madrinha de um menino chamado Maxsuel Martins(in memoriam), o conheci com 5 anos e ele se foi aos 8 anos e cinco meses. Foram três anos de muito amor, de muito aprendizado e de  muitos desafios também. Então pensando na minha vivência com ele resolvi fazer esse projeto.

O Objetivo deste projeto é cadastrar pessoas que tenham o desejo de apadrinhar e ajudar mensalmente, através de cestas básicas, as crianças que estejam em tratamento contra o câncer.

Acesse a aplicação  [aqui](https://associacao-vidas-do-amanha.herokuapp.com/)  |
Acesse a documentação [aqui](https://associacao-vidas-do-amanha.herokuapp.com/minha-rota-de-documentacao/)



## Tecnologias e Pacotes 

* Git
* Visual Studio Code
* Node js
* Postman
* Mongo Atlas
* Heroku
* Express
* npm
* dotenv
*  mongoose
*  bcrypt
*  jsonwebtoken
*  jest

## Arquitetura da API


   ```
  📁Associacao-vidas-do-amanha-Reprograma
├── 📁node_modules
├── 📁src
│   ├── 📁controller
        ├── 📄criancasController.js
|       ├── 📄padrinhosController.js
        ├── 📄usersController.js
|   ├── 📁database
|       ├── 📄mongooseConnect.json
    ├── 📁models
|       ├── 📄criancasModel.json
|       ├── 📄padrinhoModel.json
|       ├── 📄usersModel.json
│   ├── 📁routes
│       ├── 📄criancaRoutes.js
        ├── 📄padrinhoRoutes.js
│       ├── 📄usersRoutes.js
|       ├── 📄index.js
|   ├── app.js
├── 📁swagger
|   ├── 📄swagger_output.json
├── 📁test
    ├── 📄crianca.test.js
    ├── 📄padrinho.test.js
    ├── 📄users.test.js
├── 📄.env
├── 📄.env.example 
├── 📄.eslintrc.json
├── 📄.gitignore
├── 📄package-lock.json
├── 📄package.json
├── 📄Procfile
├── 📄README.md
├── 📄server.js
├── 📄swagger.js
```
 
## Funcionalidades

* O schema do cadastro de users na API deve conter: id (autogerado), nome, e-mail e senha;
* O schema de crianças na API deve conter id (autogerado), name, cpf, age, gender e condition;
* O schema de padrinhos na API deve conter id (autogerado), name, cpf, telephone, adress e status;
* A API deve permitir o cadastro de crianças ;
* A API deve permitir o cadastro de padrinhos;
* A API deve listar crianças cadastradas;
* A API deve listar padrinhos cadastros;
* A API deve retornar criança por id;
* A API deve retornar padrinho por id; 
* A API deve permitir modificação em  criança;
* A API deve permitir modificação em  padrinho;
* A API deve permitir deletar cadastro de criança;
* A API deve permitir deletar (no caso inativar) cadastro de  padrinho;

## Como exemplo de estrutura de cadastro de criança temos:
```yaml
{
  "name": "Ana Clara", 
  "cpf": 75987592275,
  "age": 7,
  "gender": "female",
  "condition": "true"
}
```
 
## Como exemplo de estrutura de cadastro de padrinho temos:

```yaml
{
    "name": " Otavio Lins",
    "cpf": 11452369875,
    "telephone": 88963251410,
    "adress": "Av.Caxias , 122",
    "status": true
}
```

## Rotas e Endpoints

Rotas de crianças
```
 verbo |   rota       | função
-----------------------------------------------------
get   | /crianca     |listar todas as crianças
get   | /crianca/:id | retornar criança por id
get   | /condicao    | listar crianças por condição
post  | /crianca     | cadastrar criança
patch |/condicao/:id |Atualizar por condição
delete| /crianca/:id |Deletar cadastro de criança
```

Rotas de padrinho
```
verbo |   rota       | função
-----------------------------------------------------
get   | /padrinho    |listar todos os padrinhos
get   | /padrinho/:id| retornar padrinho por id
post  | /padrinho    | cadastrar padrinho
put   |/padrinho/:id |Atualizar cadastro de padrinho
delete| /padrinho/:id|Inativar cadastro de padrinho
```

## Contribua com esse projeto

Faça o fork do projeto;
Crie uma branch para realizar suas alterações: git checkout -b feature/nome-da-nova-branch
Commit as alterações feitas e abra um pull request

## Agradecimentos

Dedico este projeto a todas as crianças e adolescentes com câncer, em especial a Maxsuel Martins (in memoriam) que foi a minha maior inspiração para esse projeto, gratidão por ter me dado a honra de ter me tornado sua madrinha por 3 anos, três intensos anos. Gratidão a Deus por me permitir vivenciar tudo isso. Dedico também a minha família em especial ao meu irmão por ter sido inspiração nesta área linda que é a tecnologia.Gratidão pela compreensão do meu Namorado pelas incontáveis noites em que eu estava mentalmente ausente e por todo seu amor. Gratidão às professoras em especial à Mayhhhara Morais(maravilhosa), gratidão a nossa facilitadora (Janiarli) e a toda a Reprograma por me permitir tantos aprendizados. Grata pelas colegas de turma em especial ao Grupinho das amigas maravilhosas, cada uma de vocês foram fundamentais nessa jornada de meses de aprendizado, tornaram as coisas mais leves. Um destaque especial para a minha amiga Nath Caldas por dividir comigo meu dia a dia, aperreios e vitórias com os códigos. 

                                                             Tecnologia por amor ❤️
