describe('Listagem de Heróis', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('test@test.com')
    cy.get('input[name="password"]').type('test123')
    cy.contains('button', 'Sign in').click()
    cy.url().should('include', '/heroes')
  })

 it('Deve exibir todos os heróis na lista', () => {
  cy.get('[alt="The Smoker"]').should('be.visible')
  cy.get('[alt="Warp Speed"]').should('be.visible')
  cy.get('[alt="Cyonic"]').should('be.visible')
  cy.get('[alt="The Librarian"]').should('be.visible')
  cy.get('[alt="Mr Angular"]').should('be.visible')
  cy.get('[alt="Collect Call Paul"]').should('be.visible')
  cy.get('[alt="Fly Girl"]').should('be.visible')

    })
})