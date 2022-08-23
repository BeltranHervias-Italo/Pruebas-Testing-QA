///<reference types="Cypress" />

beforeEach(() => { //Esto es un Hooks

    cy.fixture('datos_prueba.json').then(function(datos){
        this.datos_prueba=datos
        cy.visit(this.datos_prueba.url)
    })
    
})


describe ('Pruebas pagina de Inicio', function (){

    it('Validacion encabezado superior', function (){

        
        cy.get('.active > img').should('be.visible')
        cy.get('.active > .custom > h4').contains('Online Banking')

    })

    it('Validacion Columnas', function (){

        cy.get('#online_banking_features > :nth-child(1)').should('be.visible')
        cy.get('#online_banking_features > :nth-child(2) > div').should('be.visible')
        cy.get('#online_banking_features > :nth-child(3) > div').should('be.visible')
        cy.get('#online_banking_features > :nth-child(4) > div').should('be.visible')
    })

})



describe ('Prueba E2E Transferencia de Fondos', function (){ //Only ayuda a solo correr esta prueba

    it('Prueba 1 Transferencia de fondos de ahorros a t.credito', function (){
       
        cy.get('#signin_button').click()
        cy.get('#user_login').type(this.datos_prueba.username)
        cy.get('#user_password').type(this.datos_prueba.password)
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select(2)
        cy.get('#tf_toAccountId').select(4)
        cy.get('#tf_amount').type('500')
        cy.get('#tf_description').type('Transferencia de fondos de ahorros a t.credito')
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').should('contain.text','You successfully submitted your transaction')
        cy.get('.board-content').should('be.visible')

    })

})