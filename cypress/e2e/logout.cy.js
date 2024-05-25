// cypress/e2e/logout.cy.js

describe('Logout Tests for SIREPOJTI', () => {
  
    const userCredentials = {
      username: 'farhan12',
      password: 'userpass'
    };
  
    beforeEach(() => {
      cy.login(userCredentials.username, userCredentials.password);
    });
  
    it('Should logout successfully', () => {
      cy.logout();
      cy.url().should('include', '/login');
      
      cy.get('button[type="submit"]').should('be.visible');
    });
  
  });
  