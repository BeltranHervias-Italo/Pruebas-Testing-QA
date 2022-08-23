///<reference types="Cypress" />

describe("Mercury Tours Automation" , function(){

    beforeEach(function(){
        cy.fixture('MercuryTours.json').then(function(datos){
           this.MercuryTours=datos     
           cy.visit(this.MercuryTours.url)
        })
    })

    it('Registrar un Usuario en Mercury Tours',function(){
        cy.get('[width="77"] > a').click()
        cy.get('#email').type("Italo")
        cy.get(':nth-child(14) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type("Password")
        cy.get(':nth-child(15) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type("Password")
        cy.get(':nth-child(17) > td > input').click()
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(3) > td').contains(
            "Thank you for registering. You may now sign-in using the user name and password you've just entered."
        )
    })

    it('Hacer Login con Usuario Creado',function(){
        cy.get('[width="67"] > a').click()
        cy.get(':nth-child(1) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type("Italo")
        cy.get(':nth-child(2) > [style="font-family:Arial, Helvetica;font-size:13px;color:#000;padding:5px;"] > input').type("Password")
        cy.get(':nth-child(4) > td > input').click()
        cy.get('h3').contains('Login Successfully')
        cy.get('font > b').contains('Thank you for Loggin.')
    })


})