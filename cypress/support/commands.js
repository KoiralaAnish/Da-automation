Cypress.Commands.add("login", (email, password) => {
    cy.get('#anonLogin > .grey').click({ force: true })
    cy.get('.mod-login-input-loginName > input').click().type(email)
    cy.get('.mod-input-password > input').click().type(password)
    cy.get('.next-btn').click()
})