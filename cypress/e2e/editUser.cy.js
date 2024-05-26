describe("Edit User Tests for SIREPOJTI", () => {
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
        // Menekan tombol "Edit User" untuk baris pertama
        cy.get('table tbody tr:first-child a.btn.btn-warning.edit-btn').click();
    });

    it('Cek perilaku sistem jika memasukkan data dengan benar "Field Text"', () => {
        cy.get('input.form-control[placeholder="Enter the name"]').clear().type("Edited User");
        cy.get('input.form-control[placeholder="Enter the username"]').clear().type("editeduser");
        cy.get('input.form-control[placeholder="Enter the email"]').clear().type("editeduser@example.com");
        cy.get('input.form-control[placeholder="Enter the password"]').clear().type("EditedPassword123");
        cy.get('select.form-select[name="program_study"]').select("1"); // Teknik Informatika
        cy.get('button.btn.btn-submit.text-white.px-5.btn-warning[type="submit"]').click();
        cy.contains("User Updated").should("be.visible").then(() => {
            // // Hapus data yang telah ditambahkan
            // cy.contains("Edited User", { timeout: 10000 }).should('be.visible');
            // cy.contains("Edited User").parents('tr').find('div.btn.btn-danger.delete-btn').click({ force: true });
            // cy.get('button#deletecriteria.btn.btn-danger.btn-submit').click({ force: true });
            // cy.contains("User deleted").should("be.visible");
        });
    });

    it("Cek perilaku sistem jika mengupload profile picture dengan jpg", () => {
        cy.get('input.form-control[placeholder="Enter the name"]').clear().type("Edited User");
        cy.get('input.form-control[placeholder="Enter the username"]').clear().type("editeduser");
        cy.get('input.form-control[placeholder="Enter the email"]').clear().type("editeduser@example.com");
        cy.get('input.form-control[placeholder="Enter the password"]').clear().type("EditedPassword123");
        cy.get('select.form-select[name="program_study"]').select("1"); // Teknik Informatika
        cy.get('input.form-control[type="file"]').attachFile("image/foto.png");
        cy.get('button.btn.btn-submit.text-white.px-5.btn-warning[type="submit"]').click();
        cy.contains("User Updated").should("be.visible").then(() => {
            // // Hapus data yang telah ditambahkan
            // cy.contains("Edited User", { timeout: 10000 }).should('be.visible');
            // cy.contains("Edited User").parents('tr').find('div.btn.btn-danger.delete-btn').click({ force: true });
            // cy.get('button#deletecriteria.btn.btn-danger.btn-submit').click({ force: true });
            // cy.contains("User deleted").should("be.visible");
        });
    });
});
