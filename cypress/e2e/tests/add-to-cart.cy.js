describe('Adicionar Produto ao Carrinho', () => {
    it('Deve adicionar um produto ao carrinho com sucesso', () => {
      cy.visit('/');
  
      cy.generateUser().then(() => {
        cy.userRegistration();  
    });
    
    cy.addToCart();
  });
});
  