describe('Menu Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.sampleapis.com/coffee/hot', {
      statusCode: 200,
      fixture: 'hotDrinks.json'
    })
    cy.intercept('GET', 'https://api.sampleapis.com/coffee/iced', {
      statusCode: 200,
      fixture: 'icedDrinks.json'
    })
    cy.visit('https://xpresso-coffee.vercel.app')
    cy.get('li').eq(1).contains('MENU').click()
  })
  it('should display a sidebar with drinks-type options and section displaying the drink cards on page load', () => {
    cy.get('.menu-options > ul').children().should('have.length', 3)
    cy.get('.menu-options > ul').children().should('have.length', 3)
    cy.get('li').eq(4).contains('All Drinks')
    cy.get('li').eq(5).contains('Hot Drinks')
    cy.get('li').eq(6).contains('Iced Drinks')
  })
  it('should land all the "All Drinks" page and display a different selection of drinks for each drink type selected', () => {
    cy.get('.menubar > .active > li').contains('All Drinks')
    cy.get('.drink-card').should('have.length', 18)
    cy.get('li').eq(5).contains('Hot Drinks').click()
    cy.get('.drink-card').should('have.length', 12)
    cy.get('li').eq(6).contains('Iced Drinks').click()
    cy.get('.drink-card').should('have.length', 6)
  })
  it('should display each card with an image, name, ingredients, description, size selection dropdown and add to cart button', () => {
    cy.get('.drink-card > img').eq(2).should('have.attr', 'src').should('equal', 'https://lianaskitchen.co.uk/wp-content/uploads/Cortado-720x540.jpg')
    cy.get('.drink-card h2').eq(2).contains('Cortado')
    cy.get('.drink-details .ingredients')
  })
})
