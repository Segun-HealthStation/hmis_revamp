Feature: HMIS Login

  Scenario: Successful login with valid credentials
    Given I navigate to the HMIS login page
    When I enter username "folashade" and password "password"
    And I click the Sign In button
    Then I should be redirected to the dashboard