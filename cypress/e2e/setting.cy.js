// cypress/e2e/settings.cy.js

describe('Settings Page Tests for SIREPOJTI', () => {
  
    const userCredentials = {
      username: 'farhan12',
      password: 'userpass'
    };
  
    beforeEach(() => {
      cy.login(userCredentials.username, userCredentials.password);
    });
  
    it('Should navigate to settings page and change settings', () => {
      cy.navigateToSettings();
      cy.url().should('include', '/settings');
      cy.get('.settings-header').should('contain', 'Settings');
      
      // Contoh: Ubah pengaturan
      cy.get('input[name="email"]').clear().type('newemail@example.com');
      cy.get('button.save-settings').click();
      
      // Verifikasi perubahan (verifikasi tiruan)
      cy.get('.notification').should('contain', 'Settings saved');
    });
  
  });
  