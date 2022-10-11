export class Search {

    elements = {
        language: () => cy.get('#searchLanguage'),
        searchField: () => cy.get('#searchInput'),
        searchResult: () => cy.get("#typeahead-suggestions > div > a > div.suggestion-text > h3")
    }

    selectLanguage(language) {
        this.elements.language().select(language);
    }

    enterSearchData(searchValue) {
        this.elements.searchField().type(searchValue);
    }

    selectSearchResult(searchResult) {
        this.elements.searchResult().contains(searchResult).click();
    }
}