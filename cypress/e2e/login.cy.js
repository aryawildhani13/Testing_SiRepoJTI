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

  const invalidCredentials = {
    username: 'invalidUser',
    password: 'invalidPass'
  };
  
  it('Should login as a user', () => {
    cy.login(userCredentials.username, userCredentials.password);

  });
  
  it('Should login as an admin', () => {
    cy.login(adminCredentials.username, adminCredentials.password, true);

  });

  it('Should fail to login with invalid credentials', () => {
    cy.login(invalidCredentials.username, invalidCredentials.password);

  });

  it('Should show validation errors when login without username and password', () => {
    cy.login('', '');

  });

});
