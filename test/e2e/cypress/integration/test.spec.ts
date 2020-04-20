/* eslint-disable spaced-comment */
/// <reference types="Cypress" />
/* eslint-enable spaced-comment */

context('Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Initial display', () => {
    cy.get('[data-testid="count"]')
      .eq(0)
      .should('have.text', '0')
    cy.get('[data-testid="count"]')
      .eq(1)
      .should('have.text', '0')
    cy.get('[data-testid="count"]')
      .eq(2)
      .should('have.text', '0')

    cy.get('#app').screenshot('initial-display')
  })

  it('Click `add-count`, update `count`', () => {
    cy.get('[data-testid="add-count"]')
      .eq(0)
      .click()

    cy.get('[data-testid="count"]')
      .eq(0)
      .should('have.text', '1')
    cy.get('[data-testid="count"]')
      .eq(1)
      .should('have.text', '0')
    cy.get('[data-testid="count"]')
      .eq(2)
      .should('have.text', '0')

    cy.get('#app').screenshot('add-count')
  })

  it('Click `add-count` for axios, update `count` for axios', () => {
    cy.get('[data-testid="add-count"]')
      .eq(1)
      .click()

    cy.get('[data-testid="count"]')
      .eq(0)
      .should('have.text', '0')
    cy.get('[data-testid="count"]')
      .eq(1)
      .should('have.text', '2')
    cy.get('[data-testid="count"]')
      .eq(2)
      .should('have.text', '0')

    cy.get('#app').screenshot('add-axios-count')
  })

  it('Click `add-count` for async/await, update `count` for async/await', () => {
    cy.get('[data-testid="add-count"]')
      .eq(2)
      .click()

    cy.get('[data-testid="count"]')
      .eq(0)
      .should('have.text', '0')
    cy.get('[data-testid="count"]')
      .eq(1)
      .should('have.text', '0')
    cy.get('[data-testid="count"]')
      .eq(2)
      .should('have.text', '3')

    cy.get('#app').screenshot('add-async-await-count')
  })
})
