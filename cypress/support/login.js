Cypress.Commands.add('userName', () => { 
    cy.get('#user-name')
})

Cypress.Commands.add('password', () => { 
    cy.get('#password')
})

Cypress.Commands.add('loginBtn', () => { 
    cy.get('#login-button')
})

Cypress.Commands.add('homePageTitle', () => {
    cy.get('.title')
})

Cypress.Commands.add('addToCart', () => {
    cy.get('#add-to-cart-sauce-labs-backpack')
})

Cypress.Commands.add('cartBadge', () => {
    cy.get('.shopping_cart_badge')
})

Cypress.Commands.add('itemName', () => {
    cy.get('.inventory_item_name')
})

Cypress.Commands.add('itemPrice', () => {
    cy.get('.inventory_item_price')
})

Cypress.Commands.add('removeItem', () => {
    cy.get('#remove-sauce-labs-backpack')
})

Cypress.Commands.add('checkoutBtn', () => {
    cy.get('#checkout')
})

Cypress.Commands.add('continueBtn', () => {
    cy.get('#continue')
})

Cypress.Commands.add('errorContainer', () => {
    cy.get('.error-message-container.error')
})

Cypress.Commands.add('sortBtn', () => {
    cy.get('.product_sort_container')
})


Cypress.Commands.add('postalCodeField', () => {
    cy.get('#postal-code')
})

Cypress.Commands.add('FirstName', () => {
    cy.get('#first-name')
})

Cypress.Commands.add('LastName', () => {
    cy.get('#last-name')
})

Cypress.Commands.add('ContinueBtn', () => {
    cy.get('#continue')
})


Cypress.Commands.add('finishBtn', () => {
    cy.get('#finish')
})

Cypress.Commands.add('logoutSidebar', () => {
    cy.get('#logout_sidebar_link')
})











