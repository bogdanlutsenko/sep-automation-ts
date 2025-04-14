@sep29
Feature: Error message for the invalid CVC number

    As a user, I want to be informed when the CVC number I enter is incorrect or too short.

    #* AC1: The Immediate error message should be thrown if the CVC number is too short or wrong. "Your card's security code is incomplete."


    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information
        When user clicks installments payment option
        When user clicks next button
        Then user should be redirected to step three of the enrollment process

    @sep29-1
    Scenario: Verify Immediate error message should be thrown if the CVC number is too short or wrong
        When user enters an incomplete cvc number
        Then user should see cvc code error message "Your card’s security code is incomplete."