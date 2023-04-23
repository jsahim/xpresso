describe('Home Page', () => {
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
  })
  it('should have header navigation with a logo, home button, menu button, user icon and shopping bag icon', () => {
    cy.get('img').eq(0).should('have.attr', 'src').should('equal', 'https://user-images.githubusercontent.com/107663888/233799142-9fdde281-3a5f-4e0b-8b7f-9873273069c1.png')
    cy.get('.navbar > .active > li').eq(0).contains('HOME')
    cy.get('li').eq(1).contains('MENU')
    cy.get('li').eq(2).contains('account_circle')
    cy.get('li').eq(3).contains('shopping_bag')
  })
  it('should display previous orders', () => {
    cy.get('h2').contains('Previous Orders')
    cy.get('p').contains('No orders have been placed yet.')
  })
  it('should be routed to the Menu page when the user clicks the Menu button', () => {
    cy.get('li').eq(1).contains('MENU').click()
    cy.url().should('eq', 'https://xpresso-coffee.vercel.app/menu/all-drinks')
  })
  it('should be routed to the Profile page when the user clicks the User icon', () => {
    cy.get('li').eq(2).contains('account_circle').click()
    cy.url().should('eq', 'https://xpresso-coffee.vercel.app/profile')
  })
  it('should be routed to the Checkout page when the user clicks the Shopping Bag icon', () => {
    cy.get('li').eq(3).contains('shopping_bag').click()
    cy.url().should('eq', 'https://xpresso-coffee.vercel.app/checkout')
  })
})

