// cypress/e2e/sidebarAdmin.cy.js

describe("Sidebar Admin Tests for SIREPOJTI", () => {
    const baseUrl = "https://sirepojti.gbrncode.com";
    const adminCredentials = {
      username: "adminsirepojti",
      password: "adminpass",
    };
  
    beforeEach(() => {
      // Melakukan login sebagai admin
      cy.visit(`${baseUrl}/login`);
      cy.get(".text-decoration-none.fw-light.text-center.link-text").click(); // Klik tombol "Sign In as Admin"
      cy.get('input[name="username"]').type(adminCredentials.username);
      cy.get('input[name="password"]').type(adminCredentials.password);
      cy.get('button[type="submit"]').click();
      cy.get(".navbar-toggler").click();
    });
  
    it("Cek perilaku sistem jika menekan menu home", () => {
        cy.get('a.nav-link.active.d-flex.align-items-center.gap-2.text-white').first().click(); 

    });
  
    it("Cek perilaku sistem jika menekan menu user management", () => {
        cy.contains('User Management').click();

      });
    
      it("Cek perilaku sistem jika menekan menu category management", () => {
        cy.contains('Categories Management').click();

      });
    
      it("Cek perilaku sistem jika menekan menu document management", () => {
        cy.contains('Documents Management').click();

      });
  
  });
  