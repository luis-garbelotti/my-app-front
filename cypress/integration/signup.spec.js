/// <reference types="cypress" />

describe('Sign Up and Sign In flow', () => {
  it('should create a new user and login', () => {
    const user = {
      name: 'User Test',
      email: `tester${Date.now()}@email.com`,
      password: '1234',
    };

    cy.visit('http://localhost:3000/');
    cy.contains('Cadastre-se').click();
    cy.contains('Fazer login').click();
    cy.contains('Cadastre-se').click();

    cy.get('input[name="name"]').type(user.name);
    cy.get('input[name="email"]').type(user.email);
    cy.get('input[name="password"]').type(user.password);
    cy.get('input[name="confirmPassword"]').type(user.password);
    cy.intercept('POST', 'http://localhost:5000/signup').as('signUp');
    cy.get('button').click();
    cy.wait('@signUp');
    cy.contains('Cadastro efetuado com sucesso.');

    cy.get('input[name="email"]').type(user.email);
    cy.get('input[name="password"]').type(user.password);
    cy.intercept('POST', 'http://localhost:5000/signin').as('signIn');
    cy.get('button').click();
    cy.wait('@signIn');
    cy.contains('Login efetuado com sucesso.');
    
  });


});