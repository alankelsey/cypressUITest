import { validateLinksOnPage } from './utils.cy'

describe('Verify Home Page', () => {
  beforeEach(function () {
    cy.viewport(1920, 1080)
    cy.visit('/')
  })

  it('Validate Nav Bar link Text', () => {
    //Check UITAP Nave link
    cy.get('body > nav > a').should('have.attr', 'href', '/')
    
    //Check Home Nave Link
    cy.get('#navbarSupportedContent > ul > li.nav-item.active > a').should('have.attr', 'href', '/home')

    //Check resources Nav Link
    cy.get('#navbarSupportedContent > ul > li:nth-child(2) > a').should('have.attr', 'href', '/resources') 
  })


  it('Validate Main Container', () => {
    cy.get('#title').contains('UI Test Automation')
    cy.get('#description > div > div > div:nth-child(2) > img').should('have.attr', 'src', '/static/cube.png')
    cy.get('#citation').contains('Quality is not an act, it is a habit.')
    cy.get('#description > div > div > div:nth-child(1) > div > span')
      .contains('The purpose of this website is to provide a platform for sharpening UI test automation skills. Use it to practice with your test automation tool. Use it to learn test automation techniques.')
    
    cy.get('#description > div > div > div:nth-child(2) > p > small > a:nth-child(1)').contains('')
    cy.get('#description > div > div > div:nth-child(2) > p > small > a:nth-child(1)')
  })

  it.only('Check for Broken links', () => {
    validateLinksOnPage()
  }) 
})