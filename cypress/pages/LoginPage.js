class LoginPage {
  // Selectors
  get usernameInput() {
    return cy.get('input[name="username"]');
  }

  get passwordInput() {
    return cy.get('input[name="password"]');
  }

  get signInButton() {
    return cy.get('button[type="submit"]').contains('Sign In');
  }

  // Actions
  visit() {
    cy.visit('/login');
  }

  enterUsername(username) {
    this.usernameInput.clear().type(username);
  }

  enterPassword(password) {
    this.passwordInput.clear().type(password);
  }

  clickSignIn() {
    this.signInButton.click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickSignIn();
  }
}

export default new LoginPage();