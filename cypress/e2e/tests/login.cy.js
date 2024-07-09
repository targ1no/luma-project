describe('Login', () => {
  it('Deve realizar o login com sucesso', () => {
    cy.visit('/');  

    cy.generateUser().then(() => {
      cy.userRegistration();     
      cy.logout()

      cy.visit('/customer/account/login/');
      cy.login();
    });
  });
});
  