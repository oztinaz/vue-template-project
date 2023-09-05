// https://on.cypress.io/api

describe('/ path', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('div', 'Hello, World!')
  })
})
