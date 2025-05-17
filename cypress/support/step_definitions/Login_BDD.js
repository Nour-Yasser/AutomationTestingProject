import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import checkout1 from "../POM/checkout1-pom";
import Login from "../POM/Login-pom";

const login = new Login();
const checkoutCart = new checkout1();

Before(() => {
  cy.fixture('example').then((loadedData) => {
    globalThis.data = loadedData;
  });
});

Given("Navigate to Swag Labs Website", () => {
  cy.visit(data.loginUrl);
});

When("correct user logs in", () => {
  login.LoginUser1();
});

Then("it navigates to Home Page", () => {
  cy.homePageTitle().should('contain', 'Products');
});

When("locked out user logs in", () => {
  login.LoginUser2();
});

Then("error message for locked out user is shown", () => {
  cy.contains("Epic sadface: Sorry, this user has been locked out.").should('exist');
});

When("adds an item to the cart", () => {
  cy.addToCart().click();
});

Then("cart badge should show 1", () => {
  cy.cartBadge().should('contain', '1');
});

When("adds item via checkoutCart", () => {
  checkoutCart.add();
});

Then("user should see item details in cart", () => {
  cy.url().should('eq', data.cartUrl);
  cy.itemName().should('contain', "Sauce Labs Backpack");
  cy.itemPrice().should('contain', "29.99");
});

When("removes item from cart", () => {
  cy.removeItem().click();
});

Then("cart should be empty", () => {
  cy.cartBadge().should('not.exist');
  cy.itemName().should('not.exist');
});

When("proceeds to checkout", () => {
  checkoutCart.checkout();
});

When("clicks Continue without filling details", () => {
  cy.continueBtn().click();
});

Then("error for missing first name is shown", () => {
  cy.errorContainer().should('contain', 'Error: First Name is required');
  cy.url().should('eq', data.checkoutOneUrl);
});

When("fills in checkout details", () => {
  checkoutCart.details();
});

Then("checkout overview page is displayed", () => {
  cy.url().should('eq', data.checkoutTwoUrl);
  cy.get('.summary_total_label').should('contain', "32.39");
});

When("completes a checkout", () => {
  checkoutCart.checkout();
  checkoutCart.details();
  cy.finishBtn().click();
});

Then("order confirmation is displayed", () => {
  cy.url().should('eq', data.checkoutCompleteUrl);
  cy.get('.complete-header').should('contain', 'Thank you for your order!');
});

When("user logs out", () => {
  cy.get('#react-burger-menu-btn').click();
  cy.logoutSidebar().click();
});

Then("user is redirected to login page", () => {
  cy.url().should('eq', data.loginUrl);
});

When("invalid username is used", () => {
  cy.userName().type("WrongUser");
  cy.password().type(data.password);
  login.CheckWrongLogin();
});

Then("login error is displayed", () => {
  cy.get('[data-test="error"]').should('exist');
});

When("filter is set to low to high", () => {
  cy.sortBtn().select('lohi');
});

Then("first item should cost 7.99", () => {
  cy.itemPrice().first().should('contain', '7.99');
});

When("filter is set to high to low", () => {
  cy.sortBtn().select('hilo');
});

Then("first item should cost 49.99", () => {
  cy.itemPrice().first().should('contain', '49.99');
});

When("problem user logs in", () => {
  login.LoginUser3();
});

When("adds and removes an item", () => {
  cy.addToCart().click();
  cy.removeItem().click();
});

When("correct username and wrong password is used", () => {
  cy.userName().type(data.user1);
  cy.password().type("Wronggg");
  login.CheckWrongLogin();
});
