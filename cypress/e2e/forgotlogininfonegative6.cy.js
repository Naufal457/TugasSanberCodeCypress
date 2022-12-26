describe('Forgot Login Info-negative', () => {

  beforeEach(()=>{

    cy.visit('https://parabank.parasoft.com/parabank/index.htm')


  })


  it('This is a Test Case 1', () => {
   
      cy.get('#loginPanel > :nth-child(2) > a').click()
      cy.get('#firstName').type("Johnx")
      cy.get('#lastName').type("Smith")
      cy.get(':nth-child(3) > [width="20%"] > .input').type("1431 Main St")
      cy.get(':nth-child(4) > [width="20%"] > .input').type("Beverly Hills")
      cy.get(':nth-child(5) > [width="20%"] > .input').type("CA")
      cy.get(':nth-child(6) > [width="20%"] > .input').type("90210")
      //cy.get('#ssn').type("112-11-2111")
      cy.get('[colspan="2"] > .button').click()
      cy.get(':nth-child(7) > [width="50%"]').should("include.text", "SSN is required.")
      //cy.get('@address').type("1431 Main St")
      //#address\.street.type('1431 Main St')3
      //cy.get('#address\.city').type('Beverly Hills')4
      //cy.get('#address\.state').type('CA')5
      //cy.get('#address\.zipCode').type('90210')6
      //cy.get('#ssn').type('310-447-4121')
      //cy.get('[colspan="2"] > .button').click()

  })

  it.skip('This is a Test Case 2', ()=>{
    

  })
})
