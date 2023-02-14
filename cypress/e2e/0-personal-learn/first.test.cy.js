/// <reference types="cypress" />

describe('My First Test', () => {
  it('clicking "get" navigate to a new url', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').contains('Kitchen Sink')
    cy.contains('get').click();

    //Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/querying')
  });
});
