Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

describe('Visit itera-qa', () => {
    beforeEach(() => {
        cy.visit('https://itera-qa.azurewebsites.net/')
    })

    it('Success to Visit Page', () => {
      //cy.visit('https://itera-qa.azurewebsites.net/')
      cy.get('h1').contains('Test Automation')
      cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
      cy.get('[style="text-decoration:underline"]').contains('LOGIN')
      cy.get(':nth-child(2) > :nth-child(1) > label').contains('Username')
      cy.get(':nth-child(4) > :nth-child(1) > label').contains('Password')
      .should('be.visible')
    })
})

describe('Login itera-qa', () => {
    beforeEach(() => {
        cy.visit('https://itera-qa.azurewebsites.net/Login')
    })

    it('Failed to Login', () => {
        //cy.visit('https://itera-qa.azurewebsites.net/Login')
        cy.get('#Username').type('ESA')
        cy.get('#Password').type('12345')
        cy.get('.btn-primary').click()
        cy.get('.alert-danger').contains('Wrong username or password')
        .should('be.visible')
      })

    it('Success to Login', () => {
      //cy.visit('https://itera-qa.azurewebsites.net/Login')
      cy.get('#Username').type('ESA')
      cy.get('#Password').type('123456')
      cy.get('.btn-primary').click()
      cy.get('h1').contains('Dashboard')
      cy.get('h2').contains('Customer')
      .should('be.visible')
    })

    it('Success to Logout', () => {
        //cy.visit('https://itera-qa.azurewebsites.net/Login')
        cy.get('#Username').type('ESA')
        cy.get('#Password').type('123456')
        cy.get('.btn-primary').click()
        cy.get('h1').contains('Dashboard')
        cy.get('h2').contains('Customer')
        cy.get('.form-inline > .navbar-nav > :nth-child(2) > .nav-link').click()
        cy.get('h2').contains('An error occurred while processing your request.')
        .should('be.visible')
      })
})

describe('Success to Dashboard Page', () => {
    beforeEach(() => {
        cy.visit('https://itera-qa.azurewebsites.net/Login')
    })

    it('Success Login Dashboard', () => {
        //cy.visit('https://itera-qa.azurewebsites.net/Login')
        cy.get('#Username').type('ESA')
        cy.get('#Password').type('123456')
        cy.get('.btn-primary').click()
        cy.get('h1').contains('Dashboard')
        cy.get('h2').contains('Customer')
        .should('be.visible')
      })
})
