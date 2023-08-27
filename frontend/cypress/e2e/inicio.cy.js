describe('template spec', () => {
  it('Deve renderizar corretamente o texto da seção de vantagens ', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h2').contains('Vantagens do nosso banco:');
  });

  it('Deve ter 4 vantagens', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Vantagens do nosso banco:');
    cy.get('[data-cy="vantagen"]').should('to.have.length', 4);
    cy.contains('Conta e cartão gratuitos');
    cy.contains('Saques sem custo');
    cy.contains('Programa de pontos');
    cy.contains('Seguro Dispositivos');
  })
})