// cypress/e2e/afterSearch.cy.js

describe("After Search Tests for SIREPOJTI", () => {
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
    cy.visit(`${baseUrl}/home`);
  });

  it("Cek Perilaku sistem jika memilih salah satu dokumen yang tampil", () => {
    // Memilih dokumen pertama yang tampil dalam hasil pencarian
    cy.get(".thesis-title.text-decoration-none.mb-1.fw-semibold")
      .first()
      .click();
  });

  it("Cek perilaku sistem jika menekan foto profile pada kanan atas layar", () => {
    cy.get(
      ".nav-link.d-flex.gap-2.pt-3.pt-md-0.align-items-center.justify-content-end.dropdown-toggle"
    ).click();
  });

  it("Menekan tombol hamburger", () => {
    // Klik tombol hamburger untuk membuka menu
    cy.get(".navbar-toggler").click();
  });

  it("Cek perilaku sistem jika menekan checkbox pada salah satu kategori pada filtering", () => {
    // Klik checkbox pada salah satu kategori
    cy.get("input.checkbox.category-input").first().click();
    // Klik tombol Apply Filter
    cy.get("button.btn.btn-submit.btn-apply.px-4.py-2.fw-medium").click();
  });

it('Cek perilaku sistem jika menekan checkbox pada salah satu program studi pada filtering', () => {
  // Klik checkbox pada salah satu program studi
  cy.get('input[type="checkbox"].checkbox[name="id_program_study[]"]').first().click();
  // Klik tombol Apply Filter dengan kelas yang tepat
  cy.get("button.btn.btn-submit.btn-apply.px-4.py-2.fw-medium").click();
});

it('Cek perilaku sistem jika menekan checkbox pada lebih dari satu kategori pada filtering', () => {
  // Klik checkbox value pertama
  cy.get('input[type="checkbox"].checkbox.category-input[name="id_category[]"][value="1"]').click();
  // Klik checkbox value kedua
  cy.get('input[type="checkbox"].checkbox.category-input[name="id_category[]"][value="2"]').click();
  // Klik tombol Apply Filter
  cy.get("button.btn.btn-submit.btn-apply.px-4.py-2.fw-medium").click();
});


it('Cek perilaku sistem jika memasukkan data tahun dengan benar pada Publication Year pada filtering', () => {
  // Memasukkan data tahun dengan benar
  cy.get('input[name="publication_from"]').type('2021');

  cy.get('input[name="publication_until"]').type('2024');

  // Klik tombol submit
  cy.get("button.btn.btn-submit.btn-apply.px-4.py-2.fw-medium").click();

});


  it('Cek perilaku sistem jika memasukkan data tahun dengan format salah pada Publication Year filtering', () => {
    // Memasukkan data tahun dengan format salah
    cy.get('input[name="publication_from"]').type('duaribu dua satu');

    cy.get('input[name="publication_until"]').type('213asd213ads');
  
    // Klik tombol submit
    cy.get("button.btn.btn-submit.btn-apply.px-4.py-2.fw-medium").click();
  });

  it('Cek perilaku sistem jika memasukkan author dengan benar', () => {
    // Memasukkan nama author dengan benar
    cy.get('input[name="author"]').type('Farhan');
  
    cy.get("button.btn.btn-submit.btn-apply.px-4.py-2.fw-medium").click();
  });
  

  it('Cek perilaku sistem jika memasukkan author dengan format salah', () => {
    // Memasukkan nama author dengan format salah
    cy.get('input[name="author"]').type('12313/.;');
  
    cy.get("button.btn.btn-submit.btn-apply.px-4.py-2.fw-medium").click();
  });

  it('Cek perilaku sistem jika menekan nama pada dokumen yang telah tampil', () => {
    cy.get('a.text-decoration-none.thesis-identity')
      .contains('Farhan')
      .first()
      .click();
  });
  
  
  
});
