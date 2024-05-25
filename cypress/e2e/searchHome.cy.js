// cypress/e2e/searchHome.cy.js

describe('Search Thesis Data on SIREPOJTI', () => {

    const baseUrl = 'https://sirepojti.gbrncode.com';
    const adminCredentials = {
      username: 'adminsirepojti',
      password: 'adminpass'
    };
  
    beforeEach(() => {
      // Melakukan login sebagai admin
      cy.visit(`${baseUrl}/login`);
      cy.get('.text-decoration-none.fw-light.text-center.link-text').click(); // Klik tombol "Sign In as Admin"
      cy.get('input[name="username"]').type(adminCredentials.username);
      cy.get('input[name="password"]').type(adminCredentials.password);
      cy.get('button[type="submit"]').click();
  
      // Navigasi ke halaman home setelah login
      cy.visit(`${baseUrl}/home`);
    });
  
    it('Mengisi field dengan data yang ada', () => {
      // Mengisi kata kunci pencarian
      cy.get('.form-control.py-2.px-3.search-input.border-0').type('Data');
  
      // Memastikan hanya satu elemen tombol pencarian yang di klik
      cy.get('.input-group-text.btn.btn-danger.btn-submit.d-flex.align-items-center.fs-5.px-3').click();
  
    });
  
    it('Mengisi field dengan data yang tidak ada', () => {
      // Mengisi kata kunci pencarian yang tidak ada
      cy.get('.form-control.py-2.px-3.search-input.border-0').type('Kain Pel');
  
      // Memastikan hanya satu elemen tombol pencarian yang di klik
      cy.get('.input-group-text.btn.btn-danger.btn-submit.d-flex.align-items-center.fs-5.px-3').click();
  
    });
  
    it('Mengisi field dengan data yang kosong', () => {
      // Memastikan hanya satu elemen tombol pencarian yang di klik
      cy.get('.input-group-text.btn.btn-danger.btn-submit.d-flex.align-items-center.fs-5.px-3').click();
  
    });
  
    it('Menekan tombol hamburger', () => {
      // Klik tombol hamburger untuk membuka menu
      cy.get('.navbar-toggler').click();
  

    });
  
    it('Melihat dropdown profil pengguna', () => {
      // Klik link profil untuk melihat profil
      cy.get('.nav-link.d-flex.gap-2.pt-3.pt-md-0.align-items-center.justify-content-end.dropdown-toggle').click();
  

    });
  
  });
  