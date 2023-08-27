Cypress.Commands.add('getByData', (seletor) => {
    return cy.get(`[data-test=${seletor}]`);
})

Cypress.Commands.add('findAndContains', (seletor, text) => {
    return cy.get(seletor).contains(text);
})