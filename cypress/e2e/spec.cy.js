
import checkout1 from "../support/POM/checkout1-pom";
import Login from "../support/POM/Login-pom";

const login = new Login();
const checkoutCart = new checkout1();

describe("Automation Test Swag Labs", () => {
  before(function () {

    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    })

  })
  beforeEach(function () {
    cy.visit(data.loginUrl);
  }
  )

  it('[1] Valid Login', () => {

    login.LoginUser1();
    cy.homePageTitle().should('contain', 'Products');
  })

  it('[2] Locked out user', () => {

    login.LoginUser2()
    cy.contains("Epic sadface: Sorry, this user has been locked out.").should('be.exist')
  })

  it('[3] Number on cart increasing in valid login', () => {
    login.LoginUser1()
    cy.addToCart().click()
    cy.cartBadge().should('contain', '1')
  })


  it('[4] Clicking on cart in valid login', () => {
    login.LoginUser1()
    checkoutCart.add()
    cy.url().should('eq', data.cartUrl)
    cy.itemName().should('contain', "Sauce Labs Backpack")
    cy.itemPrice().should('contain', "29.99")
  })

  it('[5] Removing item from cart', () => {
    login.LoginUser1()
    checkoutCart.add()
    cy.url().should('eq', data.cartUrl)
    cy.removeItem().click()
    cy.cartBadge().should('not.exist')
    cy.itemName().should('not.exist')
  })

  it('[6] Visit Checkout Info page', () => {
    login.LoginUser1()
    checkoutCart.checkout()

  })



  it('[7] Checkout without filling first name', () => {
    login.LoginUser1()
    checkoutCart.checkout()
    cy.continueBtn().click()
    cy.errorContainer().should('contain', 'Error: First Name is required')
    cy.url().should('eq', data.checkoutOneUrl)

  })

  it('[8] Checkout overview page', () => {
    login.LoginUser1()
    checkoutCart.checkout()
    checkoutCart.details()
    cy.url().should('eq', data.checkoutTwoUrl)
    cy.get('.summary_total_label').should('contain', "32.39")


  })


  it('[9] Complete checkout', () => {
    login.LoginUser1()
    checkoutCart.checkout()
    checkoutCart.details()
    cy.finishBtn().click()
    cy.url().should('eq', data.checkoutCompleteUrl)
    cy.get('.complete-header').should('contain', 'Thank you for your order!')

  })

  it('[10] Logout', () => {

    login.LoginUser1()
    cy.get('#react-burger-menu-btn').click()
    cy.logoutSidebar().click()
    cy.url().should('eq', data.loginUrl)

  })

  it('[11] Invalid Username', () => {


    cy.userName().type("WrongUser")
    cy.password().type(data.password)
    login.CheckWrongLogin()

  })


  it('[12] Filter low to high', () => {


    login.LoginUser1()
    cy.sortBtn().select('lohi')
    cy.itemPrice().first().should('contain', '7.99')

  })

  it('[13] Filter high to low', () => {


    login.LoginUser1()
    cy.sortBtn().select('hilo')
    cy.itemPrice().first().should('contain', '49.99')

  })

  it('[14] Problem user', () => {


    login.LoginUser3()
    cy.addToCart().click()
    cy.removeItem().click()
    cy.cartBadge().should("contain", "1")

  })

  it('[15] Wrong Password', () => {


    cy.userName().type(data.user1)
    cy.password().type("Wronggg")
    login.CheckWrongLogin()

  })




})