import Slide7 from "./Slide7.vue";

describe('Slide 7', () => {

    it('should mount', () => {
        // Given
        cy.intercept('/api/lines', {fixture: 'lines.json'}).as('getLines');

        // When
        cy.mount(Slide7);

        // Then
        cy.wait('@getLines');
        cy.get('h1').contains('J\'ai des calls API chef');
        cy.get('#content').contains('Comme vous pouvez le voir')
        cy.get('#content').contains('Le mocking des calls API')
        cy.get('#content').contains('Marche correctement')
        cy.get('#content').contains('Et de la même façon que des tests Cypress classiques')
    });
});