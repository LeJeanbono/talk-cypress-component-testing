import Slide10 from "./Slide10.vue";

describe('Slide 10', () => {

    it('should mount', () => {
        // Given

        // When
        cy.mount(Slide10);

        // Then
        cy.get('h1').contains('Ca marche que avec VueJS ?');
    });
});