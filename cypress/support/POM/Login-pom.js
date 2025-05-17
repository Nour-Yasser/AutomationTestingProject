class Login 
{

    signin(){

        cy.title().should('eq', data.loginTitle)
        cy.password().type(data.password)
        cy.loginBtn().click()

    }
    LoginUser1(){
    cy.userName().type(data.user1)
    this.signin()
    cy.url().should('eq', data.homePageUrl)

    }
    LoginUser2(){
        cy.userName().type(data.user2)
        this.signin()
    
        }

    LoginUser3(){
        cy.userName().type(data.user3)
        this.signin()
        cy.url().should('eq', data.homePageUrl)
            }

    CheckWrongLogin(){
        cy.loginBtn().click()
    cy.url().should('eq', data.loginUrl)
    cy.errorContainer().should('contain', "Username and password do not match any user in this service")

    }
}

export default Login