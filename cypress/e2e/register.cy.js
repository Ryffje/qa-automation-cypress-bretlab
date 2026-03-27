describe('BretLab - Registro', () => {
  beforeEach(() => {
    cy.visit('https://www.bretlab.net/');

    cy.contains('button, a', /registr/i, { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });
  });

  it('debe escribir en el campo nombre', () => {
    cy.get('#firstName')
      .should('be.visible')
      .clear()
      .type('Jeffry')
      .should('have.value', 'Jeffry');
  });

  it('debe escribir en el campo apellido', () => {
    cy.get('#lastName')
      .should('be.visible')
      .clear()
      .type('Leon')
      .should('have.value', 'Leon');
  });

  it('debe validar que el email exista', () => {
    cy.get('input[name="email"], #email')
      .should('be.visible');
  });

  it('debe mostrar validaciones al intentar enviar vacío', () => {
    cy.get('button[type="submit"]')
      .scrollIntoView()
      .click({ force: true });

    cy.contains('Este campo es obligatorio').should('be.visible');
  });

  it('debe llenar el formulario con datos válidos desde fixture', () => {
    cy.fixture('user').then((data) => {
      const user = data.validUser;

      cy.get('#firstName').clear().type(user.firstName);
      cy.get('#lastName').clear().type(user.lastName);
      cy.get('input[name="email"], #email').clear().type(user.email);
      cy.get('input[name="password"], #password').clear().type(user.password);
      cy.get('input[name="phone"], #phone').clear().type(user.phone);
      cy.get('input[name="identity_document"]').clear().type(user.documentId);
      cy.get('input[name="location"], #location').clear().type(user.location);
    });
  });
});