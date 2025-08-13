describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
        cy.visit('./src/index.html') // visita o arquivo HTML local
      })

  it('verifica o título da aplicação', () => {
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT') // verifica o título
  })

  it.only('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Gabriel')
    cy.get('#lastName').type('Marques')
    cy.get('#email').type('teste@teste.com')
    cy.get('#open-text-area').type('Obrigado')
    cy.get('.button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })
})
