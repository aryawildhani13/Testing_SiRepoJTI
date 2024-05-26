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

    it('Cek perilaku sistem jika mengupload data user yang benar', () => {
        cy.get('.btn-success.d-flex.align-items-center.gap-2[data-bs-target="#importModal"]').click(); // Klik tombol "Import Excel"
        cy.get('select[name="program_study"]').select('Teknik Informatika'); // Memilih program studi
        cy.get('input[name="import_file"]').attachFile('file/TemplateUserImport.xlsx'); // Mengunggah file Excel yang valid
        cy.get('button.btn-success.btn-submit').click();
        cy.contains("Import Success").should("be.visible"); // Pastikan pesan sukses muncul
        cy.wait(5000);
    });

    it('Cek perilaku sistem jika mengupload data user yang salah', () => {
        cy.get('.btn-success.d-flex.align-items-center.gap-2[data-bs-target="#importModal"]').click(); // Klik tombol "Import Excel"
        cy.get('select[name="program_study"]').select('Sistem Informasi Bisnis'); // Memilih program studi
        cy.get('input[name="import_file"]').attachFile('file/document.pdf'); // Mengunggah file Excel yang invalid
        cy.get('button.btn-success.btn-submit').click();
        cy.contains("The import file field must be a file of type: xlsx.").should("be.visible"); // Pastikan pesan gagal muncul
        cy.wait(5000);
    });


});
