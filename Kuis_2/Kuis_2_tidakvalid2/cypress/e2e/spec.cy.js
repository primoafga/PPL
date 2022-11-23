describe('empty spec', () => {
  it('passes', () => {
    //halaman website
    cy.visit('https://obefib.arriansoft.com')

    //proses memasukkan data tidak valid
    cy.get(':nth-child(5) > a > .info-box > .info-box-content > .info-box-number').click()
    cy.get(':nth-child(2) > .form-control').get("select").select("SASCIN").invoke("val").should("eq", "SASCIN")
    cy.get(':nth-child(3) > .form-control').type("2022019310092001")
    cy.get(':nth-child(4) > .form-control').type("sascinjiayou9")
    cy.get('.btn').click()
    cy.get(':nth-child(5) > [href="# "]').click()
    cy.get('.menu-is-opening > .nav > :nth-child(1) > .nav-link').click()
    cy.get(':nth-child(1) > [width="8%"] > .AspekBtn').click()
    cy.get('div.col-sm-3 > .input-group > .form-control').type("satu")
    cy.get('#AspekForm > .modal-footer > [type="submit"]').click()
  })
})