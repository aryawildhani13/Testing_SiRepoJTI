// cypress/e2e/profile.cy.js

describe('Profile Page Tests for SIREPOJTI', () => {
  
    const userCredentials = {
      username: 'farhan12',
      password: 'userpass'
    };
  
    beforeEach(() => {
      cy.login(userCredentials.username, userCredentials.password);
    });
  
    it('Should navigate to profile page and verify content', () => {
      cy.navigateToProfile();
      cy.url().should('include', '/profile');
      cy.get('.profile-header').should('contain', 'Profile');
      cy.get('.username').should('contain', userCredentials.username);
    });
  
  });
  