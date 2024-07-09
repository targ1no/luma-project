describe('Finalização de Compra', () => {

  it('Deve finalizar a compra com sucesso', () => {
    cy.visit('/');
    cy.generateUser().then(() => {
      cy.userRegistration();  
    });   

      cy.wait(3000);
      cy.addToCart();
      cy.wait(3000);

      cy.goToCheckout();
      cy.wait(3000);
      
      cy.fillCheckoutForm();
      cy.selectShippingMethod();
      cy.selectPaymentMethod();
      cy.contains('Thank you for your purchase!').should('be.visible');
  });
});
  