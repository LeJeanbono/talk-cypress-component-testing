import Slide2 from "./Slide2.vue";

describe('Slide 2', () => {

    it('should mount', () => {
        // Given

        // When
        cy.mount(Slide2);

        // Then
        cy.get('h1').contains('Vous avez dit Component Testing ?');
    });
});