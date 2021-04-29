describe("Daraz Automation - VISIT OLIZ STORE AND VERIFY BASE URL", () => {
    it("Search Oliz store and verify base URL", () => {
        cy.visit("https://www.daraz.com.np/shop/oliz-store/?spm=a2a0e.pdp.seller.1.19b323d6uv0rgL&itemId=104162536&channelSource=pdp").title().should('contain', 'Oliz Store Nepal: Official Online Store - Daraz.com.np').wait(500)

    })
})