@sep27
Feature: Error messages for the invalid expiration number

    As a user, I want to be informed when my card's expiration date has failed. 


    #* AC1: 1. An immediate error message should be thrown if the expiration number is too short or wrong:
    #*                  Your card's expiration date is incomplete.
    #*                  Your card's expiration year is in the past.


    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information
        When user clicks installments payment option
        When user clicks next button
        Then user should be redirected to step three of the enrollment process

    @sep27-1
    Scenario: An immediate error message should be thrown if the expiration number is too short or wrong
        When user enters an incomplete expiration date
        Then user should see expiration date error message "Your card’s expiration date is incomplete."
        When user enters an invalid expiration date
        And user should see expiration date error message "Your card’s expiration year is in the past."