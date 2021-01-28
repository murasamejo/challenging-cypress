describe('My First Test', () => {
  xit('Does not do much!'), () => {
    expect(true).to.equal(false)
  }
})

describe('Yahoo! JAPAN Home Page', () => {
  it('successfully loads', () => {
    cy.visit('https://www.yahoo.co.jp/')
  })
})
