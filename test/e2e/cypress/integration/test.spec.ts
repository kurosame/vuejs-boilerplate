/// <reference types="Cypress" />

context('Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Initial display', () => {
    cy.get('[data-test="count"]').should('have.text', '0')
    cy.get('[data-test="axios-count"]').should('have.text', '0')
    cy.get('[data-test="async-await-count"]').should('have.text', '0')

    cy.get('#app').screenshot('initial-display')
  })

  it('Click the add-count, update the count', () => {
    cy.get('[data-test="add-count"]').click()

    cy.get('[data-test="count"]').should('have.text', '1')
    cy.get('[data-test="axios-count"]').should('have.text', '0')
    cy.get('[data-test="async-await-count"]').should('have.text', '0')

    cy.get('#app').screenshot('add-count')
  })

  it('Click the add-axios-count, update the axiosCount', () => {
    cy.get('[data-test="add-axios-count"]').click()

    cy.get('[data-test="count"]').should('have.text', '0')
    cy.get('[data-test="axios-count"]').should('have.text', '2')
    cy.get('[data-test="async-await-count"]').should('have.text', '0')

    cy.get('#app').screenshot('add-axios-count')
  })

  it('Click the add-async-await-count, update the asyncAwaitCount', () => {
    cy.get('[data-test="add-async-await-count"]').click()

    cy.get('[data-test="count"]').should('have.text', '0')
    cy.get('[data-test="axios-count"]').should('have.text', '0')
    cy.get('[data-test="async-await-count"]').should('have.text', '3')

    cy.get('#app').screenshot('add-async-await-count')
  })
})
