

describe('Transações', () => {

  // Hook para executar antes de cada teste
  beforeEach(() => { 
    cy.visit("https://devfinance-agilizei.netlify.app/")

  });


  it('Cadastrar uma entrada', () => {
    cy.visit("https://devfinance-agilizei.netlify.app/")

    criarTransacao('Freela', 250)
  

    cy.get('tbody tr td.description').should('have.text', 'Freela')
  });

  it('Cadastrar uma saída', () => {

    criarTransacao('Cinema', '-45')

  //Asserção para validar se existe o texto
    cy.get('tbody tr td.description').should('have.text', 'Cinema') 

  });

  it('Excluir uma transação', () => {

    criarTransacao('Freela', '100')
    criarTransacao('Mesada', '60')
    criarTransacao('Job', '90')

    cy.contains('.description', 'Freela')
      .parent() //Encontrar um elemento dentro do contexto pai
      .find('img') //Elemento encontrado
      .click() //Exclui a transação

      //cy.contains('.description', 'Freela')
      //.siblings() //Encontrar um elemento dentro do contexto irmão
      //.children('img') //Elemento encontrado dentro do contexto filho
      //.click() //Exclui a transação


      cy.get('tbody tr').should('have.length', 2) //Asserção para validar se existe a quantidade de linhas


  });

});

function criarTransacao(descricao, valor){
  cy.contains('Nova Transação').click()
  cy.get('#description').type(descricao)
  cy.get('#amount').type(valor)
  cy.get('#date').type('2024-10-04')
  cy.contains('button', 'Salvar').click()

}