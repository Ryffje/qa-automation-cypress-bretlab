import RegisterPage from '../pages/RegisterPage';

describe('BretLab - Registro', () => {
  beforeEach(() => {
    cy.openRegisterModal();
  });

  it('debe escribir en el campo nombre', () => {
    RegisterPage.firstName()
      .should('be.visible')
      .clear()
      .type('Jeffry')
      .should('have.value', 'Jeffry');
  });

  it('debe escribir en el campo apellido', () => {
    RegisterPage.lastName()
      .should('be.visible')
      .clear()
      .type('Leon')
      .should('have.value', 'Leon');
  });

  it('debe validar que el email exista', () => {
    RegisterPage.email()
      .should('be.visible');
  });

  it('debe mostrar validaciones al intentar enviar vacío', () => {
    RegisterPage.submit()
      .scrollIntoView()
      .click({ force: true });

    cy.contains('Este campo es obligatorio').should('be.visible');
  });

  it('debe llenar el formulario con datos válidos desde fixture', () => {
    cy.fixture('user').then((data) => {
      const user = data.validUser;

      RegisterPage.fillForm(user);

      RegisterPage.firstName().should('have.value', user.firstName);
      RegisterPage.lastName().should('have.value', user.lastName);
      RegisterPage.email().should('have.value', user.email);
      RegisterPage.password().should('have.value', user.password);
      RegisterPage.phone().should('have.value', user.phone);
      RegisterPage.document().should('have.value', user.documentId);
      RegisterPage.location().should('have.value', user.location);
    });
  });
});