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
    });

    it('Cek perilaku sistem jika menekan tombol tambah', () => {
        cy.get('a[href="https://sirepojti.gbrncode.com/home/user-management/create"]').click(); // Menekan tombol "Add User"
        cy.url().should('include', '/home/user-management/create');
        cy.get('input.form-control[placeholder="Enter the name"]').should('be.visible');
    });

    it('Cek perilaku sistem jika menekan tombol aksi Delete', () => {
        // Menemukan tombol delete dalam baris pertama
        cy.get('table tbody tr:first-child div.btn.btn-danger.delete-btn').click();
        cy.get('button#deletecriteria.btn.btn-danger.btn-submit').click();
        cy.contains("User deleted").should("be.visible");
    });

    it('Cek perilaku sistem jika menekan tombol aksi edit', () => {
        // Menemukan tombol edit dalam baris pertama
        cy.get('table tbody tr:first-child a.btn.btn-warning.edit-btn').click({ force: true });
    });

    it('Cek perilaku sistem jika menekan tombol aksi detail', () => {
        cy.get('table tbody tr:first-child a.btn.edit-btn.btn-detail').click({ force: true });

    });
});
