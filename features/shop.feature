 Feature: Purchase products on Magento website

  Scenario: Add an Electronic product to the cart and perform checkout
    Given I access the Magento website "https://magento.softwaretestingboard.com/"
    When I access the Shop
    And I filter products for category "Electronic"
    And I open the Product Page
    And I add multiple quantities of the product to the cart
    Then I perform a Checkout