
Feature: Sample Test

    Scenario: Check site is available
        Given I am on the home page
        When I click on doc link
        Then I should see cypress doc
            