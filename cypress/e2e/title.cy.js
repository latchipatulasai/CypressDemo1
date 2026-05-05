describe('Launch URL and verify title', () => {
  it('should open the page and check the title', () => {
    cy.visit('/');
    cy.title().should('include', 'Cypress');
  });
});
