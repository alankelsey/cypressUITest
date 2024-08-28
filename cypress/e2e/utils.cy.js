

export function validateLinksOnPage() {
    cy.get('a').each(link => {
        if (link.prop('href'))
          cy.request({
            url: link.prop('href'),
            failOnStatusCode: false
        })
        
      cy.log(link.prop('href'))
    })
}