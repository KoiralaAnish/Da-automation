describe("daraz automation -LOGIN", () => {
  it("Login with valid Username Password", () => {

    cy.visit("https://daraz.com.np");
    cy.login("anime4rik@gmail.com", "12345abcde...")

  })




})