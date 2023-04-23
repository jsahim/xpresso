describe("As a user, on page load I should see a navigation options and previous orders", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.sampleapis.com/coffee/hot", {
      statusCode: 200,
      fixture: "hotDrinks.json"
    })
    cy.intercept("GET", "https://api.sampleapis.com/coffee/iced", {
      statusCode: 200,
      fixture: "icedDrinks.json"
    })
    cy.visit("https://xpresso-coffee.vercel.app")
  })

  it('', () => {

  })
})

