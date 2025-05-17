class checkout1 {

    checkout(){

    this.add()
    cy.url().should('eq', data.cartUrl)
    cy.checkoutBtn().click()
    cy.url().should('eq', data.checkoutOneUrl)
    cy.get('.title').should('contain', 'Checkout: Your Information')

    }

    details(){
    cy.FirstName().type(data.FirstName)
    cy.LastName().type(data.LastName)
    cy.postalCodeField().type(data.postalCode)
    cy.continueBtn().click()
    }

    add(){
        cy.addToCart().click()
    cy.cartBadge().click()
        }
}

export default checkout1