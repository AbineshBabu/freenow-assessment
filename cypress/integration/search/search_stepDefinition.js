/// <reference types="cypress"/>

import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';

Given("user opens the Wikipedia's page", () => {
    cy.visit('/');
})

When('user chooses the language', (datatable) => {
    datatable.hashes().forEach( element => {
        cy.get('#searchLanguage').select(element.language);
    })
})

And('user types the search keyword', (datatable) => {
    datatable.hashes().forEach( element => {
        cy.get('#searchInput').type(element.searchKeyword);
        cy.wait(500);
    })
})

And('user clicks on the search result to open the article', (datatable) => {
    datatable.hashes().forEach( element => {
        cy.get("#typeahead-suggestions > div > a > div.suggestion-text > h3").contains(element.searchResult).click()
    })
})

Then('system should navigate the user to the correct page', (datatable) => {
    datatable.hashes().forEach( element => {
        cy.get('.mw-page-title-main').then((value) => {
            var actualPageTitle = value.text();
            expect(actualPageTitle).to.equal(element.pageTitle);
        })
    })
})