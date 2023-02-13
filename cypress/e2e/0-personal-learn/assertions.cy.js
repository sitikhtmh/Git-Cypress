/// <reference types="cypress" />

describe('Browser Action', () => {
    it('Should load correct url', () => {
      cy.visit('https://example.com', {timeout: 10000})

    });
    it('Should check correct url', () => {
        cy.url().should('include', 'example.com')
    });

    it('Should check for correct element on the page', () => {
        cy.get('h1').should('be.visible')
  
      });
  });
  