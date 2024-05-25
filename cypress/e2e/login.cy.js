

describe('Login Tests for SIREPOJTI', () => {
  beforeEach(() => {
    cy.visit('https://sirepojti.gbrncode.com/');
  });

  it('Login as a user', () => {
    cy.fixture('users').then((users) => {
      const user = users.user;
      cy.get('input[name="username"]').type(user.username);
      cy.get('input[name="password"]').type(user.password);
      cy.get('button[type="submit"]').click();

      // Verifikasi berhasil login
      cy.url().should('include', '/dashboard'); // Sesuaikan dengan URL dashboard setelah login
      cy.contains('Welcome, Farhan'); // Sesuaikan dengan elemen yang muncul setelah login
    });
  });

  it('Login as an admin', () => {
    cy.fixture('users').then((users) => {
      const admin = users.admin;
      cy.get('input[name="username"]').type(admin.username);
      cy.get('input[name="password"]').type(admin.password);
      cy.get('button[type="submit"]').click();

      // Verifikasi berhasil login
      cy.url().should('include', '/admin-dashboard'); // Sesuaikan dengan URL dashboard admin setelah login
      cy.contains('Welcome, Admin'); // Sesuaikan dengan elemen yang muncul setelah login
    });
  });
});  