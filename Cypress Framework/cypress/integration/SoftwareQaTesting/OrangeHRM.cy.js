///<reference types="Cypress" />

describe('Prueba con Cypress Orange HRM',function(){

    beforeEach(function(){
        cy.fixture('OrangeHRM.json').then(function(datos){
           this.OrangeHRM=datos     
           cy.visit(this.OrangeHRM.url)
        })
    })

    it('Elementos básicos de la página de inicio',function(){
        cy.get('#divLogo > img').should('be.visible')
        cy.get('#txtUsername').should('be.visible')
        cy.get('#footer > :nth-child(1)').contains(this.OrangeHRM.version)
        cy.get('#btnLogin').should('be.visible')

    })

    it('Validar la pagina de adicionar usuarios',function(){
        cy.get('#txtUsername').type(this.OrangeHRM.username)
        cy.get('#txtPassword').type(this.OrangeHRM.password)
        cy.get('#btnLogin').click()
        cy.get('#menu_admin_viewAdminModule > b').click()
        cy.get('#btnAdd').click()
        cy.get('#systemUser_employeeName_empName').type(this.OrangeHRM.user)
        cy.get('#systemUser_userName').type(this.OrangeHRM.username2)
        cy.get('#systemUser_password').type(this.OrangeHRM.password2)
        cy.get('#systemUser_confirmPassword').type(this.OrangeHRM.password2)
        cy.get('#btnSave').click()


    })
})