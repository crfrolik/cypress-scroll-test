describe('template spec', () => {
  it('does not scroll correctly', () => {
    cy.visit('./index.html');
    // *** uses jquery.scrollTo plugin ***/
    cy.get('#row100').scrollIntoView();
    cy.screenshot({ capture: 'viewport' });
  });
  it('scrolls correctly', () => {
    cy.visit('./index.html');
    // *** initiates a scroll via native HTMLElement::scrollIntoView ***
    cy.get('#row100').then($el => $el[0].scrollIntoView());
    cy.screenshot({ capture: 'viewport' });
  });
});
