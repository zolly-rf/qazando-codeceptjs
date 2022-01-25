Feature('login');

const { I, loginPage } = inject()

BeforeSuite( () => {
    console.log('Before Suite')
})

Before( () => {
    console.log('Before Scenario')
})

AfterSuite( () => {
    console.log('After Suite')
})

After( () => {
    console.log('After Scenario')
})

Scenario('Login test', ( { homePage } ) => {

    loginPage.fazerLogin('teste@teste.com', '123456')
    homePage.checarLoginSucesso()

    
});

Scenario('Login test with failure', () => {

    loginPage.fazerLogin('xteste@teste.com', '123456')
    loginPage.checarLoginFalha()
});
