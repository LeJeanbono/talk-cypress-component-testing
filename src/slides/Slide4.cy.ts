import Slide4 from "./Slide4.vue";

describe('Slide 4', () => {

    it('should mount', () => {
        // Given

        // When
        cy.mount(Slide4, {
            props: {
                contenu: 'Commençons par la base, testons le point d\'entré de notre composant'
            }
        });

        // Then
        cy.get('h1').contains('Simple, Basique');
        cy.get('#content').contains('Commençons par la base, testons le point d\'entré de notre composant')
    });
});