import Slide3 from "./Slide3.vue";

describe('Slide 3', () => {

    it('should mount', () => {
        // Given

        // When
        cy.mount(Slide3);

        // Then
        cy.get('h1').contains('Here come...');
    });
});