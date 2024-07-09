describe('Cadastro de Usuário', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.visit('/');

    cy.generateUser().then(() => {
      cy.userRegistration();
    });
  });
});
