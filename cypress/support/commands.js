import { faker } from '@faker-js/faker';

function isStrongPassword(password) {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{}|;:',.<>\/?]/.test(password);

  return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigit &&
      hasSpecialChar
  );
}

Cypress.Commands.add('generateUser', () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  let password = '';

  do {
    password = faker.internet.password();
} while (!isStrongPassword(password));

  const user = { firstName, lastName, email, password };

  Cypress.env('user', user);

  return user;
});

Cypress.Commands.add('userAddress', () => {
  cy.fixture('address').then((address) => {
    return address;
  });
});

Cypress.Commands.add('userRegistration', () => {
  const user = Cypress.env('user');

  cy.get('a[href*="create"]').contains('Create an Account').click();
  cy.get('#firstname').type(user.firstName);
  cy.get('#lastname').type(user.lastName);
  cy.get('#email_address').type(user.email);
  cy.get('#password').type(user.password);
  cy.get('#password-confirmation').type(user.password);
  cy.get('button[title="Create an Account"]').click();

  cy.contains('Thank you for registering with Main Website Store.').should('be.visible');

  cy.get('.logo').click();
});

Cypress.Commands.add('logout', () => {
  cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click(); 
  cy.contains('Sign Out').click({force: true}); 
  cy.contains('You have signed out and will go to our homepage in 5 seconds.');
});

Cypress.Commands.add('login', () => {
  const user = Cypress.env('user');

  cy.get('#email').type(user.email);
  cy.get('#pass').type(user.password);
  cy.get('#send2').click();
  cy.contains('Welcome').should('be.visible'); 
});

Cypress.Commands.add('addToCart', () => {
    cy.get('a.product-item-link').first().click(); 
      cy.get('#option-label-size-157-item-170').click();
      cy.get('#option-label-color-93-item-57').click();
      cy.get('#product-addtocart-button').click();

      cy.contains('Added').should('be.visible');
  });
  
  Cypress.Commands.add('goToCheckout', () => {
    cy.get('.showcart').click();
    cy.get('#top-cart-btn-checkout').click();
  });
  
  Cypress.Commands.add('fillCheckoutForm', () => {
    cy.userAddress().then((address) => {
      
      cy.get('input[name="street[0]"]').type(address.street);
      cy.get('select[name="country_id"]').select(address.country); 
      cy.get('input[name="city"]').type(address.city);
      cy.get('input[name="postcode"]').type(address.zipcode);
      cy.get('select[name="region_id"]').select(address.region); 
      cy.get('input[name="telephone"]').type(address.telephone);
      cy.get('button.continue').click(); 
    });
  });
  
  Cypress.Commands.add('selectShippingMethod', () => {
    cy.get('input[value="flatrate_flatrate"]').click();
    cy.get('button.continue').click(); 
  });
  
  Cypress.Commands.add('selectPaymentMethod', () => {
    cy.get('button[title="Place Order"]').click(); 
  });

