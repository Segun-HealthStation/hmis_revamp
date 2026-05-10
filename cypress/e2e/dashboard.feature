Feature: HMIS Dashboard

  Background:
    Given I am logged in as "folashade" with password "password"

  Scenario: Verify Dashboard heading is visible
    Then I should see the Dashboard heading

  Scenario: Verify Dashboard sidebar navigation is visible
    Then I should see the sidebar navigation

  Scenario: Verify Dashboard displays logged-in user profile
    Then I should see the user profile "FOLASHADE JAMES"

  Scenario Outline: Verify General tab displays correct cards for each period
    When I click on the "General" dashboard tab
    And I select the period "<period>"
    Then the General tab stat cards should be visible
    And the General tab charts should be visible

    Examples:
      | period     |
      | Today      |
      | This Week  |
      | This Month |
      | This Year  |

  Scenario Outline: Verify Clerking tab displays correct cards for each period
    When I click on the "Clerking" dashboard tab
    And I select the period "<period>"
    Then the Clerking tab stat cards should be visible
    And the Clerking tab charts should be visible

    Examples:
      | period     |
      | Today      |
      | This Week  |
      | This Month |
      | This Year  |

  Scenario Outline: Verify Laboratory tab displays correct cards for each period
    When I click on the "Laboratory" dashboard tab
    And I select the period "<period>"
    Then the Laboratory tab stat cards should be visible
    And the Laboratory tab charts should be visible

    Examples:
      | period     |
      | Today      |
      | This Week  |
      | This Month |
      | This Year  |

  Scenario Outline: Verify Radiology tab displays correct cards for each period
    When I click on the "Radiology" dashboard tab
    And I select the period "<period>"
    Then the Radiology tab stat cards should be visible
    And the Radiology tab charts should be visible

    Examples:
      | period     |
      | Today      |
      | This Week  |
      | This Month |
      | This Year  |

  Scenario Outline: Verify Pharmacy tab displays correct cards for each period
    When I click on the "Pharmacy" dashboard tab
    And I select the period "<period>"
    Then the Pharmacy tab stat cards should be visible
    And the Pharmacy tab charts should be visible

    Examples:
      | period     |
      | Today      |
      | This Week  |
      | This Month |
      | This Year  |

  Scenario Outline: Verify Procedure tab displays correct cards for each period
    When I click on the "Procedure" dashboard tab
    And I select the period "<period>"
    Then the Procedure tab stat cards should be visible
    And the Procedure tab charts should be visible

    Examples:
      | period     |
      | Today      |
      | This Week  |
      | This Month |
      | This Year  |

  Scenario Outline: Verify Financials tab displays correct cards for each period
    When I click on the "Financials" dashboard tab
    And I select the period "<period>"
    Then the Financials tab stat cards should be visible
    And the Financials tab charts should be visible

    Examples:
      | period     |
      | Today      |
      | This Week  |
      | This Month |
      | This Year  |

  Scenario Outline: Verify Epidemiology tab displays correct cards for each period
    When I click on the "Epidemiology" dashboard tab
    And I select the period "<period>"
    Then the Epidemiology tab stat cards should be visible
    And the Epidemiology tab charts should be visible

    Examples:
      | period     |
      | Today      |
      | This Week  |
      | This Month |
      | This Year  |