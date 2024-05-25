// cypress/e2e/detailDokumen.cy.js

describe("Detail Dokumen Tests for SIREPOJTI", () => {
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
      cy.visit(`${baseUrl}/home`);
      cy.get(".thesis-title.text-decoration-none.mb-1.fw-semibold").first().click();
    });
  
    it("Cek perilaku sistem jika menekan foto profile pada kanan atas layar", () => {
      cy.get(
        ".nav-link.d-flex.gap-2.pt-3.pt-md-0.align-items-center.justify-content-end.dropdown-toggle"
      ).click();
    });
  
    it("Cek perilaku sistem jika menekan tombol hamburger pada kiri atas layar", () => {
      cy.get(".navbar-toggler").click();
    });
  
    it("Cek perilaku sistem jika menekan menu overview", () => {
        cy.get('#home-tab[data-bs-target="#overview-tab-pane"]') 
          .click();
      });
  
    it("Cek perilaku sistem jika menekan menu file PDF", () => {
        cy.get('#profile-tab[data-bs-target="#pdf-tab-pane"]')
        .click();
    });
  
    it('Cek perilaku sistem jika menekan logo "dokumen download"', () => {
        cy.get('#profile-tab[data-bs-target="#pdf-tab-pane"]').click();
        cy.get('.ri-file-download-line.fs-5.text-danger').click();
    });
    
  });
  