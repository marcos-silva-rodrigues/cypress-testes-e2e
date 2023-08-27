describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Deve renderizar corretamente o texto da seção de vantagens ', () => {
    cy.get('h2').contains('Vantagens do nosso banco:');
  });

  it('Deve renderizar o h1 com texto correto', () => {
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  });

  it('Deve ter 4 vantagens', () => {
    cy.contains('Vantagens do nosso banco:');
    cy.get('[data-cy="vantagen"]').should('to.have.length', 4);
    cy.contains('Conta e cartão gratuitos');
    cy.contains('Saques sem custo');
    cy.contains('Programa de pontos');
    cy.contains('Seguro Dispositivos');
  })
})