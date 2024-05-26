describe("Profile Edit Tests for SIREPOJTI", () => {
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
      cy.get('a.nav-link.d-flex.gap-2.pt-3.pt-md-0.align-items-center.justify-content-end.dropdown-toggle', { timeout: 10000 }).should('be.visible').click();
      // Memilih "Edit Profile"
      cy.get('a.dropdown-item.text-white[href="https://sirepojti.gbrncode.com/home/user/1"]').click(); 
      // Memastikan halaman edit profil terbuka
      cy.url().should('include', '/home/user/1');  
      cy.wait(2000); // Penundaan 2 detik
    });
  
    it('Cek perilaku sistem jika memasukkan data dengan benar dan mengupload profile picture', () => {
      // Mengisi field teks dengan benar
      cy.get('input.form-control[placeholder="Enter the username"]').clear().type("newusername"); // Mengisi username baru
      cy.get('input[name="old_password"]').type(userCredentials.password); // Mengisi password lama
      cy.get('input[name="new_password"]').type("newpassword"); // Mengisi password baru
      cy.get('input[name="confirm_password"]').type("newpassword"); // Mengisi konfirmasi password baru
  
      // Mengupload foto profil
      cy.get('input#formFile[type="file"]').attachFile('image/foto.png'); // Mengupload foto profil baru
  
      // Submit form
      cy.get('button.btn.btn-submit.text-white.px-5.btn-warning[type="submit"]').click();
      cy.wait(2000); // Penundaan 2 detik
    });
  
    // it('Cek perilaku sistem jika repeat password tidak sama dengan password', () => {
    //   // Mengisi field teks dengan password yang tidak cocok
    //   cy.get('input.form-control[placeholder="Enter the username"]').clear().type("newusername"); // Mengisi username baru
    //   cy.get('input[name="old_password"]').type(userCredentials.password); // Mengisi password lama
    //   cy.get('input[name="new_password"]').type("newpassword"); // Mengisi password baru
    //   cy.get('input[name="confirm_password"]').type("differentpassword"); // Mengisi konfirmasi password yang berbeda
  
    //   // Submit form
    //   cy.get('button.btn.btn-submit.text-white.px-5.btn-warning[type="submit"]').click();
    //   cy.wait(2000); // Penundaan 2 detik
    // });
  });
  