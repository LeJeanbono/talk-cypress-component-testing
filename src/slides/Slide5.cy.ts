import Slide5 from "./Slide5.vue";

describe('Slide 5', () => {

    it('should emit', () => {
        // Given
        cy.mount(Slide5, {props: {onEmit: cy.spy().as('onEmitSpy')}})
        cy.get('h1').contains('J\'emit, tu emits, nous emitons')
        cy.get('[name="emitNumber"]').type('100');

        // When
        cy.get('button')
            .contains('Emit 100')
            .click();

        // Then
        cy.get('@onEmitSpy').should('have.been.calledWithExactly', 100)
    });

    it('should emit and assert like vue test utils', () => {
        // Given
        cy.mount(Slide5, {props: {onEmit: cy.spy().as('onEmitSpy')}})
            .then(async ({wrapper}) => {
                expect(wrapper.find('h1').text()).eq('J\'emit, tu emits, nous emitons')
                await wrapper.find('[name="emitNumber"]').setValue(100);
                // When
                await wrapper.find('button').trigger('click');
                // Then
                expect(wrapper.emitted('emit')).to.deep.eq([[100]])
            })
    });
});