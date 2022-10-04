//AUTOMATIZAÇÃO 

describe ('Automatização', () => {

  beforeEach (() => {
  cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home');})

  it ('Teste 1 Links', () => {
  cy.contains ('a','Busca de elementos').click();
  cy.contains ('a' , 'Links').click();
  cy.contains ('a','Ok 200 - Sucess').click();
  cy.get('.red-text')
  .should('have.text','Success!!');
  cy.get('.btn').click();
  cy.contains ('a','Erro 404 - Page not found').click();
  cy.get('.red-text')
  .should('have.text','Page Not Found!!');
  cy.get('.btn').click();
  cy.contains ('a','Erro 400 - Bad Request').click();
  cy.get('.red-text')
  .should('have.text','Bad Request!!');
  cy.get('.btn').click();
  cy.contains ('a','Erro 500 - Internal Server Error').click();
  cy.get('.red-text')
  .should('have.text','Internal Server Error!!');
  cy.get('.btn').click();})
      

  it ('Teste 2 Botões', () => {
  cy.contains ('a','Busca de elementos').click();  
  cy.contains ('a' , 'Botões').click();
  cy.get(':nth-child(2) > h5')
  .should('have.text','Mensagens de Sucesso!');
  cy.get('#teste').click();
  cy.get('.btn-floating').click();
  cy.get('.row > .waves-teal').click();
  cy.get(':nth-child(6) > :nth-child(1) > .row > .btn').click();
  cy.get('.center > .btn').click();})

  it ('Teste 3 Textos', () => {
  cy.contains ('a','Busca de elementos').click();
  cy.contains ('a','Textos').click();
  cy.contains ('a' , 'Voltar').click();})

  it ('Teste 4 Tabela', () => {
  cy.contains ('a','Busca de elementos').click();
  cy.contains ('a','Tabela').click();
  cy.contains ('td','Arroz').should('be.visible');
  cy.contains ('td','Feijão').should('be.visible');
  cy.contains ('td','Macarrão').should('be.visible');
  cy.contains ('td','Batata').should('be.visible');
  cy.contains ('td','Leite').should('be.visible');
  cy.contains ('td','Alface').should('be.visible');
  cy.contains ('td','Carne').should('be.visible');
  cy.contains ('td','Leite Moça').should('be.visible');
  cy.contains ('a' , 'Voltar').click();})

  it ('Teste 5 Mudanca de foco/Alert', () => {
  cy.contains ('a','Mudança de foco').click();
  cy.contains ('a','Alert').click();
  cy.contains ('button','Clique para JS Alert').click();
  cy.contains ('h4','Result').should('be.visible');
  cy.contains ('p','Você clicou no alerta com sucesso!!').should('be.visible');
  cy.contains ('button','Clique para JS Confirm').click();
  cy.contains ('p','Você clicou: Ok').should('be.visible');
  cy.contains ('a' , 'Voltar').click();})
  
  it ('Teste 6 Mudanca de foco/Iframe', () => {
  cy.contains ('a','Mudança de foco').click();
  cy.contains ('a','Iframe').click();})

  it ('Teste 7 Widgets Accordion', () => {
  cy.contains ('a','Busca de elementos').click();  
  cy.contains ('a' , 'Widgets').click();
  cy.contains ('a' , 'Accordion').click();
  cy.contains ('div','filter_drama').click();
  cy.contains ('div','Primeiro Texto').should('be.visible');
  cy.contains ('div','place').click();
  cy.contains ('div','Segundo Texto').should('be.visible');
  cy.contains ('div','whatshot').click();
  cy.contains ('div','Terceiro Texto').should('be.visible');
  cy.contains ('a' , 'Voltar').click();})

  it ('Teste 8 Widgets Autocomplete', () => {
  cy.contains ('a','Busca de elementos').click();  
  cy.contains ('a' , 'Widgets').click();
  cy.contains ('a' , 'Autocomplete').click();
  cy.get ('input[id="autocomplete-input"]').type('A').wait(1000)
  .should ('have.value','A')
  .clear()
  .should ('have.value','');
  cy.get ('input[id="autocomplete-input"]').type('B').wait(1000)
  .should ('have.value','B')
  .clear()
  .should ('have.value','');
  cy.get ('input[id="autocomplete-input"]').type('C').wait(1000)
  .should ('have.value','C')
  .clear()
  .should ('have.value','');
  cy.get ('input[id="autocomplete-input"]').type('D').wait(1000)
  cy.contains ('a' , 'Voltar').click();})

  it ('Teste 9 Cadastro', () => {
  cy.contains ('a','Formulário').click();
  cy.contains ('a','Criar Usuários').click();
  cy.get('input[id="user_name"]').type ('Zezão');
  cy.get('input[id="user_lastname"]').type ('Do povo');
  cy.get('input[id="user_email"]').type ('zezãodopovo@gmail.com');
  cy.get('input[id="user_address"]').type ('Rio de Janeiro');
  cy.get('input[id="user_university"]').type ('Da Vida');
  cy.get('input[id="user_profile"]').type ('Líder de comunidade');
  cy.get('input[id="user_gender"]').type ('hetero');
  cy.get('input[id="user_age"]').type ('50');
  cy.contains ('input','Criar').click();
  cy.contains ('a' , 'Voltar').click();
  cy.contains ('a','Último').click().wait(1000)
  cy.contains ('td','Zezão',).should('be.visible');
  cy.contains ('td','Do povo',).should('be.visible');
  cy.contains ('td','zezãodopovo@gmail.com',).should('be.visible');
  cy.contains ('td','Rio de Janeiro',).should('be.visible');
  cy.contains ('td','Da Vida',).should('be.visible');
  cy.contains ('td','Líder de comunidade',).should('be.visible');
  cy.contains ('td','hetero',).should('be.visible');
  cy.contains ('td','50',).should('be.visible');})
  
  it ('Teste 10 Mudanca de foco/Janela/Modal', () => {
  cy.contains ('a','Mudança de foco').click();
  cy.contains ('a','Janela').click();
  cy.contains ('a','Clique aqui').click();
  cy.contains ('a','Mudança de foco').click();
  cy.contains ('a','Modal').click();
  cy.contains ('a','Voltar').click();})})