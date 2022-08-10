
beforeEach(() => {
    cy.visit ('http://demo.testfire.net/login.jsp');
})
it ('Teste pagina Altoro Mutual ', () => {


    cy.get('h1')
    .should ('have.text' , 'Online Banking Login');
    cy.get('input#uid').type ('Usuario 1');
    cy.get('input#passw').type ('123456');
    cy.get(':nth-child(3) > :nth-child(2) > input').click();

    cy.get('input#uid').type ('Usuario 2');
    cy.get('input#passw').type ('78910');
    cy.get(':nth-child(3) > :nth-child(2) > input').click();

    cy.get('input#uid').type ('jsmith');
    cy.get('input#passw').type ('Demo1234');
    cy.get(':nth-child(3) > :nth-child(2) > input').click();
    // Apartir daqui novo teste

   






    
})
