///<reference types="Cypress" />

beforeEach(() => { //Esto es un Hooks

    cy.fixture('OrangeHRM.json').then(function(datos){
        this.OrangeHRM=datos
        cy.visit(this.OrangeHRM.url)
    })
    
})

describe ('Pruebas Cypress OrangeHRM', function (){

    it('Elementos Basicos OrangeHRM', function (){

        cy.get('#divLogo > img').should('be.visible')  
        cy.get('#txtUsername').should('be.visible')
        cy.get('#footer > :nth-child(1)').should('contain.text','OrangeHRM 4.10.1')
        cy.get('#btnLogin').should('be.visible') 
        
    })
   
})

describe.only ('Pruebas Cypress OrangeHRM', function (){

    it('Login OrangeHRM Adicionar usuarios',function(){

        cy.get('#txtUsername').type(this.OrangeHRM.username)
        cy.get('#txtPassword').type(this.OrangeHRM.password)
        cy.get('#btnLogin').click()
        cy.get('#menu_admin_viewAdminModule > b').click()
        cy.get('#btnAdd').click()
        cy.get('#UserHeading').contains('Add User')
        cy.get('#systemUser_employeeName_empName').type('Charlie Carter')
        cy.get('#systemUser_userName').type('Dylan')
        cy.get('#systemUser_password').type('Dyl4nyh@di3l')
        cy.get('#systemUser_confirmPassword').type('Dyl4nyh@di3l')
        cy.get('#btnSave').click()

    })



})
