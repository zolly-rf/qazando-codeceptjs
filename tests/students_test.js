const code = require('../Utils/code')
const name = require('../Utils/name')

Feature('students');

const { I, loginPage } = inject()

Scenario('Create student with success', ( { homePage }) => {

    const codigo = code.getCode()
    const nome = name.getName()

    console.log(`${codigo} - ${nome}`)

    loginPage.fazerLogin('teste@teste.com', '123456')
    homePage.checarLoginSucesso()
    homePage.registrarEstudante(codigo, nome)
    homePage.pesquisaEstudante(codigo, nome)

});
