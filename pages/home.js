const { I } = inject();

module.exports = {

  buttons:{
    salvar:'~salvar',
  },

  fields:{
    nome:'~aluno',
    codigo:'~codigo',
    pesquisa:'~search',
  },

  registrarEstudante(codigo, nome){
    I.fillField(this.fields.codigo, codigo)
    I.fillField(this.fields.nome, nome)
    I.tap(this.buttons.salvar)
  },

  pesquisaEstudante(codigo, nome){
    I.fillField(this.fields.pesquisa, nome)
    I.see(`${codigo} - ${nome}`)
  },



  checarLoginSucesso(){
    // Assert
    I.waitForElement(this.buttons.salvar, 5)
    I.seeElement(this.buttons.salvar)
  },

}