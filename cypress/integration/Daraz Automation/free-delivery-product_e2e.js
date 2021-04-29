describe("Verify free delivery in Product page", () => {
    it("Click Shop now and verify free delivery in product page", () => {
        cy.visit("https://daraz.com.np");
        cy.login("anime4rik@gmail.com", "12345abcde...")
        cy.wait(10000)
        cy.get('[tag-info="//www.daraz.com.np/wow/gcp/daraz/channel/np/LP/essentials-to-keep-you-safe?scm=1003.4.icms-zebra-100031662-2974963.OTHER_6043685343_7355758"]').click()
        cy.get('[data-index="0"] > .card-banner-slider-main-span > a > .main-img').click()
        //Free Delivery is a temporary feature varies according to the product

    })
})