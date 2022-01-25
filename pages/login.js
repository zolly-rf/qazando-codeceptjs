const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields:{
    email:'~email',
    senha:'~senha',
  },

  buttons:{
    entrar:'~entrar'
  },

  messages:{
    loginFail:'~lognFail'
  },

  fazerLogin(email, senha){
    // Fill e-mail
    I.fillField(this.fields.email, email)

    // Fill password
    I.fillField(this.fields.senha, senha)

    // Click enter
    I.tap(this.buttons.entrar)
  },

  checarLoginFalha(){
    // Assert
    I.waitForElement(this.messages.loginFail, 5)
    I.seeElement(this.messages.loginFail)
  },

}