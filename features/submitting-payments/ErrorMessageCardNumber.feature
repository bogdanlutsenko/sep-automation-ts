@sep25
Feature: Error message for the invalid card number

    As a user, I want to be informed when my card info has failed. 

    #* AC1: An immediate error message should be thrown if the card number is wrong or too short:
    #*              Your card number is incomplete.
    #*              Your card number is invalid.


    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information
        When user clicks installments payment option
        When user clicks next button
        Then user should be redirected to step three of the enrollment process

    @sep25-1
    Scenario: Verify users see immediate error message if the card number is wrong or too short
        When user enters an incomplete card number
        Then user should see card number error message "Your card number is incomplete."
        When user enters an invalid card number
        And user should see card number error message "Your card number is invalid."