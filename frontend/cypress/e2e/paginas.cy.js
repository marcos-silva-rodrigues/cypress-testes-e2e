describe("testando multiplas paginas", () => {

    it("deve conseguir acessar a página de cartões", { browser: 'edge' }, () => {
        cy.visit('/');
        cy.getByData('botao-login').click();
        cy.getByData('email-input').type("fulano@email.com");
        cy.getByData('senha-input').type("123456");
        cy.getByData('botao-enviar').click();

        cy.location('pathname').should('eq', '/home');

        cy.getByData('app-home').find('a').eq(1).click();
        cy.location('pathname').should('eq', '/home/cartoes');
        cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões');
    });
});