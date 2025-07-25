describe('Central de Atendimento ao Cliente TAT', () => {
  it('verifica o título da aplicação', () => {
      cy.visit('./src/index.html') // visita o arquivo HTML local
      cy.title().should('eq', 'Central de Atendimento ao Cliente TAT') // verifica o título
  })
})
