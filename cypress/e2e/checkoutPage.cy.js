describe('Checkout Page', () => {
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
    cy.get('.drink-card select').eq(6).select('One Size')
    cy.get('.drink-card button').eq(6).click()
    cy.get('.drink-card select').eq(11).select('Small')
    cy.get('.drink-card button').eq(11).click()
    cy.get('.drink-card select').eq(13).select('Small')
    cy.get('.drink-card button').eq(13).click()
    cy.get('.checkout').click()
  })
  it('should display a Delivery details section on with Address and Payment fields', () => {
    cy.get('.sub-head').eq(0).contains('DELIVERY')
    cy.get('h3').eq(0).contains('Address')
    cy.get('h3').eq(1).contains('Payment')
  })
  it('should display a Cart section on with all drinks added to the cart with a Total and Pay Now button', () => {
    cy.get('.sub-head').eq(1).contains('CART')
    cy.get('h3').eq(2).contains('Order Summary')
    cy.get('table').children('.line-items').should('have.length', 3)
    cy.get('.line-items').eq(0).contains('Cortado')
    cy.get('.line-items').eq(1).contains('Mocha')
    cy.get('.line-items').eq(2).contains('Flat White')
    cy.get('.total-details > p').contains('TOTAL:')
    cy.get('.total-details .total-number').contains('$12.85')
    cy.get('.pay-now').contains('PAY NOW')
  })
  it('should show the quantity, name, size, and price of each drink line item', () => {
    cy.get('.line-items').eq(2).contains(1)
    cy.get('.line-items').eq(2).contains('Flat White')
    cy.get('.line-items').eq(2).contains('SM')
    cy.get('.line-items').eq(2).contains('$3.75')
  })
  it('should be able to remove a specific item with the X button and see the total reflect the change', () => {
    cy.get('.sub-head').eq(1).contains('CART')
    cy.get('h3').eq(2).contains('Order Summary')
    cy.get('.total-details > .total-number').contains('$12.85')
    cy.get('table').children('.line-items').should('have.length', 3)
    cy.get('.remove-btn').eq(1).click()
    cy.get('.total-details > .total-number').contains('$9.40')
    cy.get('table').children('.line-items').should('have.length', 2)
  })
  it('should let the user click the Pay Now button, give the user and confirmation message then take them back home to view the order details', () => {
    cy.get('.pay-now').contains('PAY NOW').click()
    cy.get('.conf-screen').should('be.visible')
    cy.get('.conf-screen > p').eq(0).contains('THANK YOU FOR YOUR ORDER!')
    cy.get('.conf-screen > p').eq(1).contains('Please click the continue button to view your order details.')
    cy.get('.conf-screen .continue-btn').contains('CONTINUE').click()
    cy.url().should('eq', 'https://xpresso-coffee.vercel.app/home')
    cy.get('h2').contains('Previous Orders')
    cy.get('.order-card')
  })
  it('should should show the confirmation number, timestamp, items purchased, payment method and total', () => {
    cy.get('.pay-now').contains('PAY NOW').click()
    cy.get('.conf-screen .continue-btn').click()
    cy.get('.order-card > .order-content').children('p').eq(0).contains('ORDER:')
    cy.get('.order-card > .order-content').children('p').eq(2).contains('PAYMENT: VISA -XXXX')
    cy.get('.order-card > .order-content').children('div').contains('Cortado')
    cy.get('.order-card > .order-content').children('div').contains('Mocha')
    cy.get('.order-card > .order-content').children('div').contains('Flat White')
    cy.get('.order-card > .order-content').children('p').eq(3).contains('TOTAL: $12.85')
  })
})
