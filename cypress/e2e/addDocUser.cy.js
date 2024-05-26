describe("Document Management Tests for SIREPOJTI", () => {
    const baseUrl = "https://sirepojti.gbrncode.com";
    const userCredentials = {
      username: "farhan12",
      password: "userpass",
    };
  
    beforeEach(() => {
      // Melakukan login sebagai user dan menuju halaman tambah dokumen
      cy.visit(`${baseUrl}/login`);
      cy.get('input[name="username"]').type(userCredentials.username);
      cy.get('input[name="password"]').type(userCredentials.password);
      cy.get('button[type="submit"]').click();
      cy.get(".navbar-toggler").click();
      cy.contains('Documents Management').click(); // Mengakses menu manajemen dokumen melalui hamburger button
      cy.get('a[href="https://sirepojti.gbrncode.com/home/my-document/create"].btn.btn-success').click(); // Menekan tombol "Add Document"
      cy.url().should('include', '/my-document/create'); // Memastikan bahwa halaman telah berubah
      cy.contains("Add Document").should("be.visible"); // Memastikan bahwa halaman "Add Document" terlihat
    });
  
    it('Cek perilaku sistem untuk semua tindakan tambah dokumen', () => {
      // Memasukkan data dengan benar "Field Text"
      cy.get('input.form-control[placeholder="Enter your title"]').type("Test Document Title"); // Memasukkan judul dokumen
      cy.get('textarea.form-control[placeholder="Enter document abstract"]').type("This is a test abstract for the document."); // Memasukkan abstrak dokumen
    
      // Memilih dropdown menu category
      cy.get('select.form-select[name="category"]').select("1"); // Memilih kategori "Big Data"
  
      // Mengupload dokumen dengan benar
      cy.get('div.img-view').click(); // Klik pada field dokumen
      cy.get('input[type="file"]').attachFile('file/document.pdf'); // Mengupload dokumen
  
      // Submit form
      cy.get('button.btn.btn-submit.text-white.px-5.btn-warning[type="submit"]').click(); // Submit form
      
      // Memastikan pesan sukses terlihat
      cy.contains("Document Added").should("be.visible");
  
      cy.wait(4000); 

    });

    it('Delete Document', () => {
        cy.get(".navbar-toggler").click();
        cy.contains('Documents Management').click(); // Mengakses menu manajemen dokumen melalui hamburger button
        // Menunggu hingga tabel dimuat sepenuhnya
        cy.get('.thesis-list-box .thesis-item').first().within(() => {
          cy.get('a.thesis-title.text-decoration-none.mb-1.fw-semibold').click(); // Menekan dokumen pada baris paling atas
        });
        cy.get('div.btn.btn-danger.delete-btn').click({ force: true }); // Menekan tombol delete
        cy.get('button#deletecriteria.btn.btn-submit.btn-danger').click({ force: true }); // Mengonfirmasi penghapusan
        cy.contains("Document deleted").should("be.visible"); // Memastikan bahwa dokumen telah dihapus
        cy.wait(2000); // Penundaan 2 detik
      });

    
  });
  