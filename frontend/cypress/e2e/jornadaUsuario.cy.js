describe("Jornada de usuário", () => {
    it('Deve permitir que a pessoa usuária acesse a aplicação, realize uma transação e faça um logout', () => {
        cy.visit("/");

        cy.getByData('botao-login').click();
        cy.getByData('email-input').type("neilton@alura.com");
        cy.getByData('senha-input').type("123456");
        cy.getByData('botao-enviar').click();

        cy.location('pathname').should('eq', '/home');
        cy.getByData('select-opcoes').select('Transferência');
        cy.getByData('form-input').type('80');
        cy.getByData('realiza-transacao').click();

        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80');

        cy.getByData('botao-sair').click();
        cy.location('pathname').should('eq', '/');
    });

    it('Deve permitir que a pessoa usuária crie uma conta e acesse com email e senha a pagina principal', () => {
        cy.visit("/");

        cy.getByData('botao-cadastro').click();
        cy.getByData('email-input').type("fulano3@alura.com");
        cy.getByData('senha-input').type("123456");
        cy.getByData('nome-input').type("Fulano Silva");
        cy.getByData('botao-enviar').click();

        cy.getByData('botao-login').click();
        cy.getByData('email-input').type("fulano2@alura.com");
        cy.getByData('senha-input').type("123456");
        cy.getByData('botao-enviar').click();

        cy.location('pathname').should('eq', '/home');
    });

    it('Deve permitir que a pessoa usuária faça o seu cadastro, realize login na aplicação, realize uma transação e faça um logout', () => {
        cy.visit('/');

        cy.getByData('botao-cadastro').click();
        cy.getByData('nome-input').type('Gui Lima');
        cy.getByData('email-input').type('gui@email.com');
        cy.getByData('senha-input').type('456789');
        cy.getByData('botao-enviar').click();

        cy.getByData('mensagem-sucesso')
            .should('exist')
            .and('have.text', 'Usuário cadastrado com sucesso!');
        cy.location('pathname').should('eq', '/');

        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('gui@email.com');
        cy.getByData('senha-input').type('456789');
        cy.getByData('botao-enviar').click();

        cy.location('pathname').should('eq', '/home');
    });
});