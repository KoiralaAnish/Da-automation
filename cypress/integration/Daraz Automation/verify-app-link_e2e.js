describe("Daraz Automation VERIFY APP LINK", () => {
    it("Verify app download link", () => {
        cy.visit("https://daraz.com.np");
        cy.login("anime4rik@gmail.com", "12345abcde...")
        cy.wait(10000)
        cy.scrollTo('top');
        cy.get('#topActionDownload > :nth-child(1)').click()
        //Verify app-google link
        cy.get('.app-google').parent().should('have.attr', 'href', '//play.google.com/store/apps/details?id=com.daraz.android&scm=1003.4.icms-zebra-100024132-2890703.OTHER_5557794167_2540120');



    })
})