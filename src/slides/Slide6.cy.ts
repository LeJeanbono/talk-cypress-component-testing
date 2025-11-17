import Slide6 from './Slide6.vue'
import Slide from "../components/Slide.vue";

describe('Slide 6', () => {

    it('Named Slot', () => {
        // Given

        // When
        cy.mount(Slide, {
            slots: {
                title: 'Mon titre',
                content: 'Mon contenu'
            },
        })

        // Then
        cy.get('h1').contains('Mon titre')
        cy.get('#content').contains('Mon contenu')
    })

    it('Slot', () => {
        // Given

        // When
        cy.mount(Slide6, {
            slots: {
                default: () => 'Je suis un slot !',
            },
        })

        // Then
        cy.get('h1').contains('Slot Time !')
        cy.get('#content').contains('Je suis un slot !')
    })

})