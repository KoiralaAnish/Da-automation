

describe("daraz automation - SEARCH ITEMS", () => {
    it("Should search for particular items ", () => {
        cy.visit("https://daraz.com.np");
        cy.login("anime4rik@gmail.com", "12345abcde...")
        cy.wait(1000)
        cy.get('#q').type('Mobile' + '{enter}');




    })
})