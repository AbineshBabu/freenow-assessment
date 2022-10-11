/// <reference types="cypress"/>

import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import { Search } from '../../pageobjects/search';
import { SearchResult } from '../../pageobjects/searchResult';

const search = new Search();
const searchResult = new SearchResult();

Given("user opens the Wikipedia's page", () => {
    cy.visitHomePage();
})

When('user chooses the language', (datatable) => {
    datatable.hashes().forEach( element => {
        search.selectLanguage(element.language);
    })
})

And('user types the search keyword', (datatable) => {
    datatable.hashes().forEach( element => {
        search.enterSearchData(element.searchKeyword);
        cy.wait(500);
    })
})

And('user clicks on the search result to open the article', (datatable) => {
    datatable.hashes().forEach( element => {
        search.selectSearchResult(element.searchResult);
    })
})

Then('system should navigate the user to the correct page', (datatable) => {
    datatable.hashes().forEach( element => {
        searchResult.element.pageTitle().then((value) => {
            var actualPageTitle = value.text();
            expect(actualPageTitle).to.equal(element.pageTitle);
        })
    })
})