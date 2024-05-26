describe("Add User Tests for SIREPOJTI", () => {
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
      cy.contains('User Management').click();
      cy.get('a[href="https://sirepojti.gbrncode.com/home/user-management/create"]').click(); // Menekan tombol "Add User"
    });
  
    it('Cek perilaku sistem jika memasukkan data dengan benar "Field Text"', () => {
      cy.get('input.form-control[placeholder="Enter the name"]').type("Test User");
      cy.get('input.form-control[placeholder="Enter the username"]').type("testuser");
      cy.get('input.form-control[placeholder="Enter the email"]').type("testuser@example.com");
      cy.get('input.form-control[placeholder="Enter the password"]').type("ValidPassword123");
      cy.get('select.form-select[name="program_study"]').select("1"); // Teknik Informatika
      cy.get('button.btn.btn-submit.text-white.px-5.btn-warning[type="submit"]').click();
      cy.contains("User Added").should("be.visible").then(() => {
        // Hapus data yang telah ditambahkan
          // cy.get('button.swal2-close').click({ force: true });
          cy.contains("Test User", { timeout: 10000 }).should('be.visible');
          // Periksa kembali selector untuk tombol delete
          cy.contains("Test User").parents('tr').find('div.btn.btn-danger.delete-btn').click({ force: true });
          cy.get('button#deletecriteria.btn.btn-danger.btn-submit').click({ force: true });
          cy.contains("User deleted").should("be.visible");
      });
    });
  
    it("Cek perilaku sistem jika mengupload profile picture dengan jpg", () => {
        cy.get('input.form-control[placeholder="Enter the name"]').type("Test User");
        cy.get('input.form-control[placeholder="Enter the username"]').type("testuser");
        cy.get('input.form-control[placeholder="Enter the email"]').type("testuser@example.com");
        cy.get('input.form-control[placeholder="Enter the password"]').type("ValidPassword123");
        cy.get('select.form-select[name="program_study"]').select("1"); // Teknik Informatika
        cy.get('input.form-control[type="file"]').attachFile("image/foto.png");
        cy.get('button.btn.btn-submit.text-white.px-5.btn-warning[type="submit"]').click();
        cy.contains("User Added").should("be.visible").then(() => {
          // Hapus data yang telah ditambahkan
            // // cy.get('button.swal2-close').click({ force: true });
            // cy.contains("Test User", { timeout: 10000 }).should('be.visible');
            // // Periksa kembali selector untuk tombol delete
            // cy.contains("Test User").parents('tr').find('div.btn.btn-danger.delete-btn').click({ force: true });
            // cy.get('button#deletecriteria.btn.btn-danger.btn-submit').click({ force: true });
            // cy.contains("User deleted").should("be.visible");
        });
      });
  });
  