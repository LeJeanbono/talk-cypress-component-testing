import Slide1 from "./Slide1.vue";

describe('Slide 1', () => {

    it('should mount', () => {
        // Given

        // When
        cy.mount(Slide1);

        // Then
        cy.get('h1').contains('Cypress au coeur de vos composants front : testez mieux, codez plus vite !');
        cy.get('#me').contains('Jean-Michel Leclercq')
    });
});