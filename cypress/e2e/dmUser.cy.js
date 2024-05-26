describe("Document Management Tests for SIREPOJTI", () => {
    const baseUrl = "https://sirepojti.gbrncode.com";
    const userCredentials = {
      username: "farhan12",
      password: "userpass",
    };
  
    beforeEach(() => {
      // Melakukan login sebagai user
      cy.visit(`${baseUrl}/login`);
      cy.get('input[name="username"]').type(userCredentials.username);
      cy.get('input[name="password"]').type(userCredentials.password);
      cy.get('button[type="submit"]').click();
      cy.get(".navbar-toggler").click();
      cy.contains('Documents Management').click(); // Mengakses menu manajemen dokumen melalui hamburger button
    });
  
    it('Cek perilaku sistem jika menekan tombol "add document"', () => {
        cy.get('a[href="https://sirepojti.gbrncode.com/home/my-document/create"].btn.btn-success').click(); // Menekan tombol "Add Document"
        cy.url().should('include', '/my-document/create'); // Memastikan bahwa halaman telah berubah
        cy.contains("Add Document").should("be.visible"); // Memastikan bahwa halaman "Add Document" terlihat
        cy.wait(2000); // Penundaan 2 detik
      });
    
      it('Cek perilaku sistem jika menekan tombol action "delete"', () => {
        // Menunggu hingga tabel dimuat sepenuhnya
        cy.get('.thesis-list-box .thesis-item').first().within(() => {
          cy.get('a.thesis-title.text-decoration-none.mb-1.fw-semibold').click(); // Menekan dokumen pada baris paling atas
        });
        cy.get('div.btn.btn-danger.delete-btn').click({ force: true }); // Menekan tombol delete
        cy.get('button#deletecriteria.btn.btn-submit.btn-danger').click({ force: true }); // Mengonfirmasi penghapusan
        cy.contains("Document deleted").should("be.visible"); // Memastikan bahwa dokumen telah dihapus
        cy.wait(2000); // Penundaan 2 detik
      });
    
      it('Cek perilaku sistem jika menekan tombol action "edit"', () => {
        // Menunggu hingga tabel dimuat sepenuhnya
        cy.get('.thesis-list-box .thesis-item').first().within(() => {
          cy.get('a.thesis-title.text-decoration-none.mb-1.fw-semibold').click(); // Menekan dokumen pada baris paling atas
        });
        cy.get('a.btn.btn-warning.text-white[href*="/edit"]').click(); // Menekan tombol edit
        cy.url().should('include', '/edit'); // Memastikan bahwa halaman telah berubah ke halaman edit
        cy.contains("Edit Document").should("be.visible"); // Memastikan bahwa halaman "Edit Document" terlihat
        cy.wait(2000); // Penundaan 2 detik
      });
  });
  