
#Search.feature
Feature: Adding ad to favorites
  I should be able to go to a website
  and add ad to favorites

  Scenario: Add multiple adds to favorites
    When I add multiple ads to favorites
    Then I should verify that ads are added to memo
  Scenario: Add add using search
    When I add ad to favorites using search
    Then I should verify that ad is added to memo
  Scenario: Add one add to favorites
    When I add one ad to favorites
    Then I should select ad added to memo section
  Scenario: Verify that one ad can not be added twice
    When I add one ad to favorites twice
    Then there should be only one ad in Memo section
