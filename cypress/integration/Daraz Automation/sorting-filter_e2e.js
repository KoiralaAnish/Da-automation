describe("Daraz Automation - SORTING FILTER", () => {
    it("Should Sort Filter from High to Low", () => {
        cy.visit("https://daraz.com.np");
        cy.login("anime4rik@gmail.com", "12345abcde...")
        cy.wait(1000)
        cy.get('#q').type('Mobile' + '{enter}')
        cy.wait(1000)
        //sorting filter low to high (1000-10000)
        cy.get('[placeholder="Min"]').type('1000')
    })
})