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
      cy.get('a.btn.btn-success').click(); // Menekan tombol "Add Category"
      cy.get('#add').should('have.attr', 'data-bs-target', '#addNewModal'); // Memastikan modal add category terbuka
      cy.get('#addNewModal').should('be.visible'); // Memastikan modal terlihat
    });
  
    it('Cek perilaku sistem jika mengisikan nama dengan benar dan menekan tombol save', () => {
      cy.get('input.form-control[name="category"][id="category"]').type("New Category Name"); // Mengisi nama kategori dengan benar
      cy.get('button.btn.btn-submit.btn-success[type="submit"]').click(); // Menekan tombol save
      cy.contains("Category Created").should("be.visible"); // Memastikan pesan sukses terlihat
      cy.wait(2000); // Penundaan 2 detik
    });

    it('Cek perilaku sistem jika mengisikan nama duplicate dan menekan tombol save', () => {
        cy.get('input.form-control[name="category"][id="category"]').type("New Category Name");
        cy.get('button.btn.btn-submit.btn-success[type="submit"]').click(); // Menekan tombol save
        cy.contains("The category has already been taken.").should("be.visible"); // Memastikan pesan sukses terlihat
        cy.wait(2000); // Penundaan 2 detik
      });
  
    it('Cek perilaku sistem jika tidak mengisikan nama dan menekan tombol save', () => {
      cy.get('button.btn.btn-submit.btn-success[type="submit"]').click(); // Menekan tombol save tanpa mengisi nama
      cy.wait(9000); 
    });


  });
  