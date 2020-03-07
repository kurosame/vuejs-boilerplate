/* eslint-disable spaced-comment */
/// <reference types="Cypress" />
/* eslint-enable spaced-comment */

context('Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Initial display', () => {
    cy.get('[data-test="count"]')
      .eq(0)
      .should('have.text', '0')
    cy.get('[data-test="count"]')
      .eq(1)
      .should('have.text', '0')
    cy.get('[data-test="count"]')
      .eq(2)
      .should('have.text', '0')

    cy.get('#app').screenshot('initial-display')
  })

  it('Click the add-count, update the count', () => {
    cy.get('[data-test="add-count"]')
      .eq(0)
      .click()

    cy.get('[data-test="count"]')
      .eq(0)
      .should('have.text', '1')
    cy.get('[data-test="count"]')
      .eq(1)
      .should('have.text', '0')
    cy.get('[data-test="count"]')
      .eq(2)
      .should('have.text', '0')

    cy.get('#app').screenshot('add-count')
  })

  it('Click the add-count for axios, update the count for axios', () => {
    cy.get('[data-test="add-count"]')
      .eq(1)
      .click()

    cy.get('[data-test="count"]')
      .eq(0)
      .should('have.text', '0')
    cy.get('[data-test="count"]')
      .eq(1)
      .should('have.text', '2')
    cy.get('[data-test="count"]')
      .eq(2)
      .should('have.text', '0')

    cy.get('#app').screenshot('add-axios-count')
  })

  it('Click the add-count for async/await, update the count for async/await', () => {
    cy.get('[data-test="add-count"]')
      .eq(2)
      .click()

    cy.get('[data-test="count"]')
      .eq(0)
      .should('have.text', '0')
    cy.get('[data-test="count"]')
      .eq(1)
      .should('have.text', '0')
    cy.get('[data-test="count"]')
      .eq(2)
      .should('have.text', '3')

    cy.get('#app').screenshot('add-async-await-count')
  })
})
