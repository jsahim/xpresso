describe('Profile Page', () => {
  beforeEach(() => {
    cy.visit('https://xpresso-coffee.vercel.app')
    cy.get('li').eq(2).contains('account_circle').click()
  })
  it('should display a user account page with sections for User Information, Shipping Details and Payment method', () => {
    cy.get('h3').eq(0).contains('User Information')
    cy.get('h3').eq(1).contains('Shipping Details')
    cy.get('h3').eq(2).contains('Payment Method')
  })
  it('should display First Name, Last Name, date of birth, Email and Phone number in the User Information section', () => {
    cy.get('h3').eq(0).contains('User Information')
    cy.get('p').eq(0).contains('Ed')
    cy.get('p').eq(1).contains('Spresso')
    cy.get('p').eq(2).contains('04/05/1989')
    cy.get('p').eq(3).contains('espresso@cmail.com')
    cy.get('p').eq(4).contains('555-555-5555')
  })
  it('should display Street name, City, State, and Zip in the Shipping Details section', () => {
    cy.get('h3').eq(1).contains('Shipping Details')
    cy.get('p').eq(5).contains('105 Brewers Way')
    cy.get('p').eq(6).contains('Atlanta')
    cy.get('p').eq(7).contains('GA')
    cy.get('p').eq(8).contains('30033')
  })
  it('should display credit card type, carn number and expiration date in the Payment Method section', () => {
    cy.get('h3').eq(2).contains('Payment Method')
    cy.get('p').eq(9).contains('Visa')
    cy.get('p').eq(10).contains('XXXX-XXXX-XXXX-XXXX')
    cy.get('p').eq(11).contains('12/28')
  })
})
