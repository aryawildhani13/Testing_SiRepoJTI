describe("Dropdown Profile Tests for SIREPOJTI", () => {
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
  
      // Menunggu elemen dropdown tersedia dan kemudian mengkliknya
      cy.get('a.nav-link.d-flex.gap-2.pt-3.pt-md-0.align-items-center.justify-content-end.dropdown-toggle', { timeout: 10000 }).should('be.visible').click();
    });
  
    it('Cek perilaku sistem jika memilih edit profile', () => {
      // Memilih "Edit Profile"
      cy.get('a.dropdown-item.text-white[href="https://sirepojti.gbrncode.com/home/user/1"]').click(); 
      // Memastikan halaman edit profil terbuka
      cy.url().should('include', '/home/user/1');  
      cy.wait(2000); // Penundaan 2 detik
    });
  
    it('Cek perilaku sistem jika memilih sign out', () => {
      // Memilih "Sign Out"
      cy.get('form[action="https://sirepojti.gbrncode.com/signOut"] button[type="submit"]').click();
      // Memastikan halaman login terbuka setelah sign out
      cy.contains("Sign out success").should("be.visible");
      cy.wait(2000); // Penundaan 2 detik
    });
  });
  