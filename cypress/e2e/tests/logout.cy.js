describe('Logout de Usuário', () => {
    it('Deve fazer logout com sucesso', () => {
      cy.visit('/'); 
  
      cy.generateUser().then(() => {
        cy.userRegistration();
        cy.logout();
      });
    });  
  });
  