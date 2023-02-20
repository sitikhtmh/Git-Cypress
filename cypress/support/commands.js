// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();

  cy.get("#user_login").clear();
  cy.get("#user_login").type(username);

  cy.get('input[name="user_password"]').clear();
  cy.get('input[name="user_password"]').type(password);

  cy.get("#user_remember_me").type("checkbox");

  cy.get('input[name="submit"]').click();
});

Cypress.Commands.add("clickbutton", (label) => {
  cy.get("a").contains(label).click();
});

Cypress.Commands.add("AddNewPayee", () => {
  cy.clearCookies();
  cy.clearLocalStorage();

  cy.get("#np_new_payee_name").type("sitikhtmh").should("have.value", "sitikhtmh");
  cy.get("#np_new_payee_address").type("Yogyakarta").should("have.value", "Yogyakarta");
  cy.get("#np_new_payee_account").type("sitikhtmhh").should("have.value", "sitikhtmhh");
  cy.get("#np_new_payee_details").type("paybill paybill paybill paybill paybill paybill").should("have.value", "paybill paybill paybill paybill paybill paybill");
  cy.get("#add_new_payee").click();

 });

Cypress.Commands.add("PaySavedPayee", () => {
  cy.clearCookies();
  cy.clearLocalStorage();

  cy.get("#sp_payee").select("Apple");

  cy.get("#sp_account").select("Checking");

  cy.get("#sp_amount").type("100").should("have.value", "100");

  cy.get("#sp_date").click();
  cy.get(".ui-state-default").contains("20").click();

  cy.get("#sp_description").type("paybill paybill paybill paybill paybill paybill").should("have.value", "paybill paybill paybill paybill paybill paybill");

  cy.get("#pay_saved_payees").click();
});



