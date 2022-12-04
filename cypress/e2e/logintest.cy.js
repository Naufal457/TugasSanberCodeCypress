describe('Login Test Positive', () => {

  beforeEach(()=>{

    cy.visit('https://parabank.parasoft.com/parabank/index.htm')


  })


  it('This is a Test Case 1', () => {
    cy.get(':nth-child(2) > .input').type('john')
    cy.get(':nth-child(4) > .input').type('demo')
    cy.get(':nth-child(5) > .button').click()
   
  })

  it.skip('This is a Test Case 2', ()=>{
    

  })
})
