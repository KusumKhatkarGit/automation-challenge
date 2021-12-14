const section1 = require('../objects/section-1')
const { Section1 } = require('../objects/section-1')

describe('Problem 1', () => {

  it('assert table is not visible',() => {
    cy.visit('/section-1')
    cy.contains('#alaya-table').should('not.exist')
   })
  
  it('assert table is visible on button click ',() => {
    
    cy.get('#table-toggle-button').click()
    cy.get('#alaya-table').should('be.visible')
  })

  it('assert number of rows are 10',() => {
    cy.get('#alaya-table').find('tr').should('have.length', 11)
  })
});
