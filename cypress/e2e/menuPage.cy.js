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
    cy.get('.drink-card').should('have.length', 26)
    cy.get('li').eq(5).contains('Hot Drinks').click()
    cy.get('.drink-card').should('have.length', 20)
    cy.get('li').eq(6).contains('Iced Drinks').click()
    cy.get('.drink-card').should('have.length', 6)
  })
  it('should display each card with an image, name, ingredients, description, size selection dropdown and add to cart button', () => {
    cy.get('.drink-card > img').eq(6).should('have.attr', 'src').should('equal', 'https://lianaskitchen.co.uk/wp-content/uploads/Cortado-720x540.jpg')
    cy.get('.drink-card h2').eq(6).contains('Cortado')
    cy.get('.drink-card .ingredients').eq(6).contains('► 1oz Espresso ⎜ 1oz Steamed Milk')
    cy.get('.drink-card .drink-description').eq(6).contains('Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso\’s acidity.')
    cy.get('.drink-card select').eq(6).contains('One Size')
    cy.get('.drink-card button').eq(6).contains('Add to Cart')
  })
  it('should allow the user to click the add to cart button when a size is selected', () => {
    cy.get('.drink-card select').eq(13).select('Small')
    cy.get('.drink-card button').eq(13).contains('Add to Cart - $3.75').click()
    cy.get('.message-container').should('exist')
  })
  it('should also not allow the user to click the add to cart button when no size is selected', () => {
    cy.get('.drink-card select').eq(13).contains('Small')
    cy.get('.drink-card button').eq(13).contains('Add to Cart').click()
    cy.get('.message-container').should('not.exist')
  })
  it('should display a pop-up prompting the user to checkout', () => {
    cy.get('.drink-card select').eq(11).select('Small')
    cy.get('.drink-card button').eq(11).contains('Add to Cart - $3.45').click()
    cy.get('.message-container').should('exist').contains('There are 1 item(s) in your cart.')
  })
  it('should take the user to the checkout page once checkout button is clicked', () => {
    cy.get('.drink-card select').eq(11).select('Small')
    cy.get('.drink-card button').eq(11).contains('Add to Cart - $3.45').click()
    cy.get('.message-container').should('exist').contains('There are 1 item(s) in your cart.')
    cy.get('.checkout').click()
    cy.url().should('eq', 'https://xpresso-coffee.vercel.app/checkout')
  })
  it('should also allow the user to click the shopping bag icon in navigation and checkout that way', () => {
    cy.get('.drink-card select').eq(11).select('Small')
    cy.get('.drink-card button').eq(11).contains('Add to Cart - $3.45').click()
    cy.get('li').eq(3).contains('shopping_bag').click({force: true})
    cy.url().should('eq', 'https://xpresso-coffee.vercel.app/checkout')
  })
})
