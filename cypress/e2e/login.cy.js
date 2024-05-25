// cypress/e2e/login.cy.js

describe('Login Tests for SIREPOJTI', () => {
  
  const userCredentials = {
    username: 'farhan12',
    password: 'userpass'
  };
  
  const adminCredentials = {
    username: 'adminsirepojti',
    password: 'adminpass'
  };
  
  it('Should login as a user', () => {
    cy.login(userCredentials.username, userCredentials.password);
  });
  
  it('Should login as an admin', () => {
    cy.login(adminCredentials.username, adminCredentials.password, true);
  });
  
});
