/// <reference types="cypress" />

describe('My First Test', () => {
    it('clicking "type" navigate to a new url', () => {
      cy.visit('https://example.cypress.io')
      cy.pause()
      cy.contains('type').click();
  
      //Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/commands/actions')

      //get an input, type into it and verify that the value has been update
      cy.get('.action-email')
      .type('siti@gmail.com')
      .should('have.value',"siti@gmail.com")
    });
  });
  