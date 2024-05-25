// cypress/e2e/profileUser.cy.js

describe("Sidebar User Tests for SIREPOJTI", () => {
    const baseUrl = "https://sirepojti.gbrncode.com";
    const userCredentials = {
      username: 'farhan12',
      password: 'userpass'
    };
  
    beforeEach(() => {
      // Melakukan login sebagai user
      cy.visit(`${baseUrl}/login`);
      cy.get('input[name="username"]').type(userCredentials.username);
      cy.get('input[name="password"]').type(userCredentials.password);
      cy.get('button[type="submit"]').click();
      cy.get(".navbar-toggler").click();
    });
  
    it("Cek perilaku sistem jika menekan menu home", () => {
        cy.get('a.nav-link.active.d-flex.align-items-center.gap-2.text-white').first().click(); 

      });
  
      it("Cek perilaku sistem jika menekan menu my document", () => {
        cy.contains('Documents Management').click();

      });

  
  });
  