describe('Home Page - Error', () => {
  it('should show the user an error message if the fetch fails', () => {
    cy.visit('https://xpresso-coffee.vercel.app')
      .intercept('GET', 'https://api.sampleapis.com/coffee/hot' , {
        statusCode: 400,
  })  
      .intercept('GET', 'https://api.sampleapis.com/coffee/iced' , {
        statusCode: 400,
  })  
    cy.get('h3').eq(0).contains('Sorry, there was an error because: Unexpected end of JSON input.')
    })
  })