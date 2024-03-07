describe('hero', () => {
  it('should display header text', () => {
    cy.visit('/')
    cy.contains('h5', 'Welcome To Job Board')
  })
})
