describe("Documents Management Tests for SIREPOJTI", () => {
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
      cy.contains('Documents Management').click(); // Mengakses menu manajemen dokumen melalui hamburger button
    });
  
    it('Cek perilaku sistem jika menekan tombol "add document"', () => {
      cy.get('a[href="https://sirepojti.gbrncode.com/home/documents-management/create"].btn.btn-success').click(); // Menekan tombol "Add Document"
      cy.url().should('include', '/documents-management/create'); // Memastikan bahwa halaman telah berubah
      cy.contains("Add Document").should("be.visible"); // Memastikan halaman "Add Document" terlihat
      cy.wait(2000); // Penundaan 2 detik
    });
  
    it('Cek perilaku sistem jika menekan tombol aksi Delete', () => {
      // Menemukan tombol delete dalam baris pertama
      cy.get('#dataTable tbody tr').first().within(() => {
        cy.get('div.btn.btn-danger.delete-btn').click();
      });
      cy.get('button#deletecriteria.btn.btn-submit.btn-danger').click();
      cy.contains("Document deleted").should("be.visible");
      cy.wait(2000); // Penundaan 2 detik
    });
  
    it('Cek perilaku sistem jika menekan tombol aksi Edit', () => {
      // Menemukan tombol edit dalam baris pertama
      cy.get('#dataTable tbody tr').first().within(() => {
        cy.get('a.btn.btn-warning.edit-btn.text-white').click({ force: true });
      });
      cy.url().should('include', '/edit'); // Memastikan bahwa halaman telah berubah ke halaman edit
      cy.contains("Edit Document").should("be.visible"); // Memastikan bahwa halaman "Edit Document" terlihat
      cy.wait(2000); // Penundaan 2 detik
    });
  
    it('Cek perilaku sistem jika menekan tombol aksi Detail', () => {
      // Menemukan tombol detail dalam baris pertama
      cy.get('#dataTable tbody tr').first().within(() => {
        cy.get('a.btn.edit-btn.btn-detail.text-white').click({ force: true });
      });
      cy.url().should('include', '/documents-management/'); // Memastikan bahwa halaman telah berubah ke halaman detail
      cy.wait(2000); // Penundaan 2 detik
    });
  });
  