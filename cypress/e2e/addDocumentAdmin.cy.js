describe("Add Document Tests for SIREPOJTI", () => {
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
      cy.get('a[href="https://sirepojti.gbrncode.com/home/documents-management/create"].btn.btn-success').click(); // Menekan tombol "Add Document"
    });
  
    it('Cek perilaku sistem jika memasukkan data dengan benar, memilih kategori, mengupload dokumen, dan mengisi field username', () => {
      // Memasukkan field username
      cy.get('input.form-control[placeholder="Enter your username"]').type("editeduser");
  
      // Memasukkan data dengan benar "Field Text"
      cy.get('input.form-control[placeholder="Enter your title"]').type("Test Document Title"); // Memasukkan judul dokumen
      cy.get('textarea.form-control[placeholder="Enter document abstract"]').type("This is a test abstract for the document."); // Memasukkan abstrak dokumen
  
      // Memilih dropdown menu category
      cy.get('select.form-select[name="category"]').select("1"); // Memilih kategori "Big Data"
  
      // Mengupload dokumen dengan benar
      cy.get('label.w-100.drop-area').click(); // Klik pada area unggah dokumen
      cy.get('input[type="file"]').attachFile('file/document.pdf'); // Mengupload dokumen
  
      // Submit form
      cy.get('button.btn.btn-submit.text-white.px-5.btn-warning[type="submit"]').click(); // Submit form
      cy.contains("Document Added").should("be.visible"); // Memastikan pesan sukses terlihat
      cy.wait(2000); // Penundaan 2 detik

      cy.get(".navbar-toggler").click();
      cy.contains('User Management').click();
    });
  });
  