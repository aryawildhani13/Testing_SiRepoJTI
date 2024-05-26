describe("Category Management Tests for SIREPOJTI", () => {
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
      cy.contains('Categories Management').click(); // Mengakses menu manajemen kategori melalui hamburger button
    });
  
    it('Cek perilaku sistem jika menekan tombol "add category"', () => {
      cy.get('a.btn.btn-success').click(); // Menekan tombol "Add Category"
      cy.get('#add').should('have.attr', 'data-bs-target', '#addNewModal'); // Memastikan modal add category terbuka
      cy.get('#addNewModal').should('be.visible'); // Memastikan modal terlihat
      cy.wait(4000); 
    });
  
    it('Cek perilaku sistem jika menekan tombol action "delete"', () => {
      // Menemukan tombol delete dalam baris pertama
      cy.get('#category-table tbody tr').first().within(() => {
        cy.get('div.btn.btn-danger.delete-btn').click();
      });
      cy.get('button#deletecriteria.btn.btn-submit.btn-danger').click();
      cy.contains("Category deleted").should("be.visible");
      cy.wait(4000); 
    });
  
    it('Cek perilaku sistem jika menekan tombol action "edit"', () => {
      // Menemukan tombol edit dalam baris pertama
      cy.get('#category-table tbody tr').first().within(() => {
        cy.get('div.btn.btn-warning.edit-btn.text-white').click({ force: true });
      });
      cy.get('#editModal').should('be.visible'); // Memastikan modal edit terlihat
      cy.contains("Edit Category").should("be.visible"); // Memastikan bahwa modal "Edit Category" terlihat
      cy.wait(4000); 
    });
  });
  