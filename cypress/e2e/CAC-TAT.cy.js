describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
        cy.visit('./src/index.html') // visita o arquivo HTML local
      })

  it('verifica o título da aplicação', () => {
      cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT') // verifica o título
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Gabriel')
    cy.get('#lastName').type('Marques')
    cy.get('#email').type('teste@teste.com')
    cy.get('#open-text-area').type('Obrigado')
    cy.get('.button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('preenche os campos obrigatórios e envia o formulário - Exercicio extra 1', () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)
    cy.get('#firstName').type('Gabriel')
    cy.get('#lastName').type('Marques')
    cy.get('#email').type('teste@teste.com')
    cy.get('#open-text-area').type(longText), { delay: 0 }
    cy.get('.button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida - Exercicio extra 2', () => {
    cy.get('#firstName').type('Gabriel')
    cy.get('#lastName').type('Marques')
    cy.get('#email').type('teste@teste,com')
    cy.get('#open-text-area').type('Teste')
    cy.get('.button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it.only('campo telefone continua vazio quando preenchido por um valor não-númerico - Exercicio extra 3', () => {
    cy.get('#phone').type('abcde').should('have.value', '')
  })
})
