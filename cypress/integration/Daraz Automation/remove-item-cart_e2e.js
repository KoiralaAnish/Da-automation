describe("Daraz Automation - REMOVE ITEM", () => {
    it("Remove item from the cart", () => {
        cy.visit("https://daraz.com.np");
        cy.login("anime4rik@gmail.com", "12345abcde...")
        cy.wait(10000)
        cy.get('.cart-icon > svg').click()
        cy.get('.operations > .automation-btn-delete > .lazada').click()
        cy.get('#dialog-footer-2 > .next-btn-primary').click()
    })
})