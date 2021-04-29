describe("Daraz Automation - FILTER-ADD", () => {
    it("Apply Multiple filter (Brand, Color, Rating ) and add to cart", () => {
        cy.visit("https://daraz.com.np");
        cy.login("anime4rik@gmail.com", "12345abcde...")
        cy.wait(1000)
        cy.get('#q').type('Mobile' + '{enter}');
        //Filter -Brand (Samsung)
        cy.get(':nth-child(2) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(1)').click();
        //Filter -Color (Black)
        cy.get(':nth-child(9) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(1)').click();
        //Filter -Rating(5 Star)
        cy.get(':nth-child(6) > .c2uiAC > :nth-child(1)').click()
        cy.get('[data-item-id="103258171"] > .c3e8SH').click()
        cy.get('.pdp-button_theme_orange').contains("Add to Cart").click()
        cy.get('.next-btn-secondary').contains("GO TO CART").click()
    })
})