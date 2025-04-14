@sep23
Feature: Make a payment

    As a customer, I should be able to make payments so I can enroll in the program.

    #* AC1: When the user enters valid card information, checks the terms and conditions checkbox, 
    #*      and clicks on the Pay button, then they should be redirected to the confirmation page.

    #* AC2: In the stepper, steps 1, 2, 3 should be green.
    #* AC3: The correct program name should be displayed.
    #* AC4: The correct user email should be displayed.
    #* AC5: The correct company contact information should be displayed.

    @sep23-1
    Scenario: Verify user lands on confirmation page after providing all valid information
        Given user is on the enrollment page
        And user has completed step one with valid information
        When user clicks upfront payment option
        When user clicks next button
        Then user should be redirected to step three of the enrollment process
        When user enters valid card information
        And user checks terms and conditions checkbox
        And user clicks pay button
        Then user should be redirected to confirmation page
        And step one should be green
        And step two should be green
        And step three should be green
        And program name should be displayed
        And user email should be displayed
        And company contact information should be displayed
        And user should see the payment confirmation message



