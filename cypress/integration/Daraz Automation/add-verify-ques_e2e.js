describe("Daraz Automation - ASK QUESTION VERIFY QUESTION", () => {
    it("ask question and verify the question", () => {
        cy.visit("https://daraz.com.np");
        cy.login("anime4rik@gmail.com", "12345abcde...")
        cy.wait(10000)
        //Visit any particular product home page
        cy.visit("https://www.daraz.com.np/products/honor-play-464-i104132518-s1024960903.html?spm=a2a0e.searchlist.list.1.2b1343cc1MJBpJ&search=1")
    })
})