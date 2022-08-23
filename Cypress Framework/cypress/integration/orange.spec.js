/// <reference types="Cypress" />

    
describe ('Pruebas de validacion pagina de inicio', function (){
   
    it('Validacion encabezado superior', function (){
      cy.visit("https://opensource-demo.orangehrmlive.com/")
    })

    it ('Validacion de logo superior', function (){
      cy.get('#divLogo > img').should('be.visible') 
    })

  it ('Validacion campo username existe', function (){
    cy.get('#txtUsername').should('be.visible')
  })
  it ('Validacion del texto del footer', function (){
    cy.get('#footer').contains('OrangeHRM 4.10.1')
  })
  it ('Validacion del boton login es visible', function (){
    cy.get('#btnLogin').should('be.visible')
  })
       
})

    
describe ('Pruebas de validacion funcion adicionar usuario', function (){
   
  it('Prueba E2E para adicionar un usuario', function (){
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()

      //Pendiente resto de pasos

  })

     
})