import Slide11 from "./Slide11.vue";

describe('Slide 11', () => {

    it('should mount', () => {
        // Given

        // When
        cy.mount(Slide11);

        // Then
        cy.get('h1').contains('🙏');
    });
});