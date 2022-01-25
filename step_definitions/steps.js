const { I } = inject();
// Add in your custom step files

Given('I fill the e-mail field correctly', () => {
  I.fillField('~email', 'teste@teste.com.br')
});

Given('I fill the passoword field correctly', () => {
  I.fillField('~senha', '123456')
});

When('I click the Entrar button', () => {
  I.tap('~entrar')
});

Then('I see the Salvar button', () => {
  I.waitForElement(this.messages.loginFail, 5)
  I.seeElement(this.messages.loginFail)
});
