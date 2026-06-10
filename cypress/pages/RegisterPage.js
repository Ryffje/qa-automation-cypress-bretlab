class RegisterPage {
    firstName() {
      return cy.get('#firstName');
    }
  
    lastName() {
      return cy.get('#lastName');
    }
  
    email() {
      return cy.get('input[name="email"], #email');
    }
  
    password() {
      return cy.get('input[name="password"], #password');
    }
  
    phone() {
      return cy.get('input[name="phone"], #phone');
    }
  
    document() {
      return cy.get('input[name="identity_document"]');
    }
  
    location() {
      return cy.get('input[name="location"], #location');
    }
  
    submit() {
      return cy.get('button[type="submit"]');
    }
  
    fillForm(user) {
      this.firstName().clear().type(user.firstName);
      this.lastName().clear().type(user.lastName);
      this.email().clear().type(user.email);
      this.password().clear().type(user.password);
      this.phone().clear().type(user.phone);
      this.document().clear().type(user.documentId);
      this.location().clear().type(user.location);
    }
  }
  
  export default new RegisterPage();