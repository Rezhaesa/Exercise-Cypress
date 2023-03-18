Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

describe('Visit itera-qa', () => {
    beforeEach(() => {
        cy.visit('https://itera-qa.azurewebsites.net/')
    })

    it('Success to Visit Page Login', () => {
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

    it('Success to Login Page', () => {
        //cy.visit('https://itera-qa.azurewebsites.net/Login')
        cy.get('#Username').type('ESA')
        cy.get('#Password').type('123456')
        cy.get('.btn-primary').click()
        cy.get('h1').contains('Dashboard')
        cy.get('h2').contains('Customer')
        .should('be.visible')
    })
})

describe('Success to Dashboard itera-qa', () => {
    beforeEach(() => {
        cy.visit('https://itera-qa.azurewebsites.net/Dashboard')
    })

    it('Success to Dashboard Page', () => {
        //cy.visit('https://itera-qa.azurewebsites.net/Login')
        cy.get('#Username').type('ESA')
        cy.get('#Password').type('123456')
        cy.get('.btn-primary').click()
        cy.get('h1').contains('Dashboard')
        cy.get('h2').contains('Customer')
        cy.get(':nth-child(4) > .btn').contains('Create New')
        .should('be.visible')
      })

    it('Success to Create New Customer Page', () => {
        //cy.visit('https://itera-qa.azurewebsites.net/Login')
        cy.get('#Username').type('ESA')
        cy.get('#Password').type('123456')
        cy.get('.btn-primary').click()
        cy.get('h1').contains('Dashboard')
        cy.get('h2').contains('Customer')
        cy.get(':nth-child(4) > .btn').contains('Create New')
        cy.get(':nth-child(4) > .btn').click()
        .should('be.visible')
      })

    it.skip('Success Create New Customer', () => {
        //cy.visit('https://itera-qa.azurewebsites.net/Login')
        cy.get('#Username').type('ESA')
        cy.get('#Password').type('123456')
        cy.get('.btn-primary').click()
        cy.get('h1').contains('Dashboard')
        cy.get('h2').contains('Customer')
        cy.get(':nth-child(4) > .btn').contains('Create New')
        cy.get(':nth-child(4) > .btn').click()
        cy.get('h2').contains('Create')
        cy.get('h4').contains('Customer')
        cy.get(':nth-child(3) > .control-label').contains('Name')
        cy.get(':nth-child(4) > .control-label').contains('Company')
        cy.get(':nth-child(5) > .control-label').contains('Address')
        cy.get(':nth-child(6) > .control-label').contains('City')
        cy.get(':nth-child(7) > .control-label').contains('Phone')
        cy.get(':nth-child(8) > .control-label').contains('Email')
        cy.get('.col-md-offset-2 > .btn').contains('Create')
        cy.get(':nth-child(3) > .btn').contains('Back to List')
        cy.get('#Name').type('Customer ESA')
        cy.get('#Company').type('Perusahaan TAK')
        cy.get('#Address').type('Jalan Alamat TAK')
        cy.get('#City').type('Jakarta TAK')
        cy.get('#Phone').type('0811111111')
        cy.get('#Email').type('TAK@gmail.com')
        cy.get('.col-md-offset-2 > .btn').click()
        .should('be.visible')
       })

    it('Success to Search Customer', () => {
        //cy.visit('https://itera-qa.azurewebsites.net/Dashboard')
        cy.get('#Username').type('ESA')
        cy.get('#Password').type('123456')
        cy.get('.btn-primary').click()
        cy.get('#searching').type('Customer ESA')
        cy.get('.container > div > form > .btn').click()
        cy.get('tbody > :nth-child(2) > :nth-child(1)').contains('Customer ESA')
        cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('Perusahaan TAK')
        cy.get('tbody > :nth-child(2) > :nth-child(3)').contains('Jalan Alamat TAK')
        cy.get('tbody > :nth-child(2) > :nth-child(4)').contains('Jakarta TAK')
        cy.get('tbody > :nth-child(2) > :nth-child(5)').contains('0811111111')
        cy.get('tbody > :nth-child(2) > :nth-child(6)').contains('TAK@gmail.com')
        .should('be.visible')
       })

    it.skip('Success to Edit Customer', () => {
        //cy.visit('https://itera-qa.azurewebsites.net/Dashboard')
        cy.get(':nth-child(2) > :nth-child(7) > .btn-outline-primary').click()

    })
})
  