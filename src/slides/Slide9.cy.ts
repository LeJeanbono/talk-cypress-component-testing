import Slide9 from "./Slide9.vue";

describe('Slide 9', () => {

    it('should mount', () => {
        // Given

        // When
        cy.mount(Slide9);

        // Then
        cy.get('h1').contains('Easy Peasy ?');
        cy.matchImageSnapshot();
    });
});