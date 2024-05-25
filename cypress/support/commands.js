// cypress/support/commands.js

import 'cypress-file-upload';


Cypress.Commands.add('openLoginPage', () => {
    cy.visit('https://sirepojti.gbrncode.com/');
    cy.get('a.login-link').click(); // Menggunakan selector untuk class tombol 'Sign In'
  });
  
  Cypress.Commands.add('login', (username, password, isAdmin = false) => {
    cy.openLoginPage();
    if (isAdmin) {
      cy.get('.text-decoration-none.fw-light.text-center.link-text').click(); // Selector untuk tombol "Sign In as Admin"
    }
    if (username) {
      cy.get('input[name="username"]').type(username);
    }
    if (password) {
      cy.get('input[name="password"]').type(password);
    }
    cy.get('button[type="submit"]').click();
  });
  
  Cypress.Commands.add('logout', () => {
    cy.get('button.logout').click(); // Sesuaikan dengan selector yang benar untuk tombol logout
  });
  
  Cypress.Commands.add('navigateToProfile', () => {
    cy.get('a[href="/profile"]').click(); // Sesuaikan dengan selector yang benar untuk navigasi profil
  });
  
  Cypress.Commands.add('navigateToSettings', () => {
    cy.get('a[href="/settings"]').click(); // Sesuaikan dengan selector yang benar untuk navigasi pengaturan
  });
  