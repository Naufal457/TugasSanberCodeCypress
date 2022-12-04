describe('Login Test Positive', () => {

  beforeEach(()=>{

    cy.visit('https://parabank.parasoft.com/parabank/index.htm')


  })


  it('This is a Test Case 1', () => {
    cy.get(':nth-child(2) > .input').type('johnash')
    //cy.get(':nth-child(4) > .input').type()
    cy.get(':nth-child(5) > .button').click()
    cy.get('.error').should("include.text", "Please enter a username and password.")
  })

  it.skip('This is a Test Case 2', ()=>{
    

  })
})
