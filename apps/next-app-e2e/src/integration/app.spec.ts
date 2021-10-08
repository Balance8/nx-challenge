import { getGreeting } from '../support/app.po';

describe('next-app', () => {
  beforeEach(() => cy.visit('/'));

  /* ==== Test Created with Cypress Studio ==== */
  it('Create Ticket', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:4200/');
    cy.get('.mt-5 > :nth-child(1) > .flex').should('be.visible');
    cy.get('.mt-5 > :nth-child(1) > .flex').click();
    cy.get('.py-5').should('be.visible');
    cy.get('#title').clear();
    cy.get('#title').type('New Ticket');
    cy.get('#user').select('1');
    cy.get('#description').clear();
    cy.get('#description').type('New Test');
    cy.get('#completed').should('not.be.checked');
    cy.get('.inline-flex').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Check Filtering', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.w-40 > .flex').should('have.text', 'Pending');
    cy.get('.w-40 > .flex').click();
    cy.get('.w-40 > .flex').should('have.text', 'Done');
    cy.get(
      '[href="/ticket/1"] > :nth-child(2) > .focus\\:outline-none > .relative > .flex > #comments'
    ).should('be.checked');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Edit Ticket', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="/ticket/3"]').should('be.visible');
    cy.get('[href="/ticket/3"]').click();
    cy.get('.p-5').should('be.visible');
    cy.get('.text-indigo-700').click();
    cy.get('#user').select('1');
    cy.get('#user').should('have.id', 'user');
    cy.get('.inline-flex').click();
    /* ==== End Cypress Studio ==== */
  });
});
