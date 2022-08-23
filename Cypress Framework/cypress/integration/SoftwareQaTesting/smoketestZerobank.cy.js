///<reference types="Cypress" />
describe("Test Suite -  Conjunto de pruebas",function(){

    beforeEach(function(){ //Utilizamos un Hook para iniciar siempre este codigo antes de cada test
        cy.visit('http://zero.webappsecurity.com/')
    })

    it("Validar pagina de inicio",function(){
        
        cy.get('.active > img').should("be.visible")
        cy.get('.active > .custom > h4').contains('Online Banking')
        
    })

    it("Pruebas E2E", function(){
        
        cy.get('#signin_button').click()
        cy.get('h3').should('be.visible')
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('.board-header').should('be.visible')
        cy.get('#tf_fromAccountId').select('Savings(Avail. balance = $ 1000)')
        cy.get('#tf_toAccountId').select('Credit Card(Avail. balance = $ -265)')
        cy.get('#tf_amount').type('300')
        cy.get('#tf_description').type('Transferencia en Cypress')
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.board-header').contains('Transfer Money & Make Payments - Confirm')
        cy.get('.alert').contains('You successfully submitted your transaction')
        cy.get(':nth-child(1) > .span2 > p > strong').should('be.visible')
        cy.get(':nth-child(1) > .span3').contains('Savings')
        cy.get(':nth-child(2) > .span2 > p > strong').should('be.visible')
        cy.get(':nth-child(2) > .span3').contains('Credit Card')
        cy.get(':nth-child(3) > .span2 > p > strong').should('be.visible')
        cy.get(':nth-child(3) > .span3').contains('$ 300')

    })

    it("Prueba de Validacion de actualizacion del Grafico",function(){ //it.only nos indica que solo va a ejecutar esta prueba

        cy.get('#signin_button').click()
        cy.get('h3').should('be.visible')
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('.btn').click()
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1259').should('be.visible')
        cy.get('#ext-sprite-1167 > tspan').click()
        cy.get('#ext-sprite-1259').should('not.be.visible')


    })
})