Feature: Automation Test Swag Labs

  Background:
    Given Navigate to Swag Labs Website

  Scenario: Valid Login
    When correct user logs in
    Then it navigates to Home Page

  Scenario: Locked out user
    When locked out user logs in
    Then error message for locked out user is shown

  Scenario: Number on cart increases after adding item
    When correct user logs in
    And adds an item to the cart
    Then cart badge should show 1

  Scenario: Clicking on cart in valid login
    When correct user logs in
    And adds item via checkoutCart
    Then user should see item details in cart

  Scenario: Removing item from cart
    When correct user logs in
    And adds item via checkoutCart
    And removes item from cart
    Then cart should be empty

  Scenario: Visit Checkout Info page
    When correct user logs in
    And proceeds to checkout

  Scenario: Checkout without filling first name
    When correct user logs in
    And proceeds to checkout
    And clicks Continue without filling details
    Then error for missing first name is shown

  Scenario: Checkout overview page
    When correct user logs in
    And proceeds to checkout
    And fills in checkout details
    Then checkout overview page is displayed

  Scenario: Complete checkout
    When correct user logs in
    And completes a checkout
    Then order confirmation is displayed

  Scenario: Logout
    When correct user logs in
    And user logs out
    Then user is redirected to login page

  Scenario: Invalid Username
    When invalid username is used
    Then login error is displayed

  Scenario: Filter low to high
    When correct user logs in
    And filter is set to low to high
    Then first item should cost 7.99

  Scenario: Filter high to low
    When correct user logs in
    And filter is set to high to low
    Then first item should cost 49.99

  Scenario: Problem user
    When problem user logs in
    And adds and removes an item
    Then cart badge should show 1

  Scenario: Wrong Password
    When correct username and wrong password is used
    Then login error is displayed
