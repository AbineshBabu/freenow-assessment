Feature: To verify the Wikipedia's search page

    Scenario: To verify whether the system routes the user to the right page based on the search result selection
        Given user opens the Wikipedia's page
        When user chooses the language
            |language|
            |EN|
        And user types the search keyword
            |searchKeyword|
            |Apollo 11|
        And user clicks on the search result to open the article
            |searchResult|
            |Apollo 11 in popular culture|
        Then system should navigate the user to the correct page
            |pageTitle|
            |Apollo 11 in popular culture|