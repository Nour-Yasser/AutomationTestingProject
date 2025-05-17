describe('', () => {
    it('test case [1]', () => {

        cy.visit("http://automationexercise.com")
        cy.get('body').should("be.visible")
        cy.get('li a[href="/test_cases"]').click()
        cy.get

        
    });
});