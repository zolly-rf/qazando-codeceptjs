Feature: Business rules
  As a persona
  I want to successfully log into the system
  To test its features

  Scenario: do login
    Given I fill the e-mail field correctly
    And I fill the passoword field correctly
    When I click the Entrar button
    Then I see the Salvar button

