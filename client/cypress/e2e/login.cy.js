describe('Login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Deve fazer login com usuário válido', () => {
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('test@test.com')
    cy.get('input[name="password"]').type('test123')
    cy.contains('button', 'Sign in').click()
    cy.url().should('include', '/heroes')

  })

  it('Não deve logar com credenciais inválidas', () => {
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('errado@test.com')
    cy.get('input[name="password"]').type('senhaerrada')
    cy.contains('button', 'Sign in').click()
    cy.contains('Invalid').should('be.visible')

  })

})
