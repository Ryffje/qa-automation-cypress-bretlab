Cypress.Commands.add('openRegisterModal', () => {
    cy.visit('https://www.bretlab.net/');
  
    cy.contains('button, a', /registr/i, { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });
  });