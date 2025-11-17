import Slide8 from "./Slide8.vue";

describe('Slide 8', () => {

    beforeEach(() => {

    })

    it('should mount', () => {
        // Given
        cy.injectAxe()

        // When
        cy.mount(Slide8);

        // Then
        cy.get('h1').contains('Soyons accessibles !');
        cy.checkA11y()
    });
});