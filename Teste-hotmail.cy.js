describe ('Login e registro de Gmail ' , () => {

    beforeEach(() => {
        cy.visit ('https://www.portalpos.com.br/pitagoras/pos-graduacao/');
    })

    it ('Adquirir o Gmail', () => {
     //cy.contains ('button' , 'Entrar com email e senha').click();
     cy.get('.MZh__n-welcomeMessage > .ajax-content-loader > .welcome').click();
     //cy.contains ('button' , 'Entrar com email e senha').click();
     cy.get('#loginWithUserAndPasswordBtn > span').click();


      
       //cy.get('.action-wrapper > .action > .internal > span').click(); 
        //cy.contains ('button' , 'Register').click();
        //cy.contains ('ap-vmessage' , 'Email is required!').should ('be.visible');
        //cy.contains ('button' , 'Register').click();
        //cy.contains ('ap-vmessage' , 'Full name is required!').should ('be.visible');
        //cy.contains ('ap-vmessage' , 'User name is required!').should ('be.visible');
        //cy.contains ('ap-vmessage' , 'Password is required!').should ('be.visible');
        //cy.get(':nth-child(1) > .form-control').type ('AugustoFinotti');
        //cy.contains ('ap-vmessage' , 'Password is required!').should ('be.visible');
      

     



      

         
    })
})