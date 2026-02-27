describe('Home Page.jsx', () => {

    beforeEach(()=>{
        // visists application url
        cy.visit('/')
    })

    it('should have a banner', () => {
        //get == querySelector('input') 1st inst <input />
        cy.get('#bannerContainer').should('be.visible')
    })

    it("should render Pokemon Card corresponding to the user search", ()=>{
        // interaction with the user form
        cy.get("input[name=pokemon-name]").type("Bulbasaur")
        cy.get("button[type=submit]").click()
        
        // outcomes of submission of the form
        cy.get("#cardHolder").children().should('have.length', 1)
        // cy.get("input").should("be.visible")
    })

    it("should render MULTIPLE Pokemon Card corresponding to the user search", ()=>{
        // interaction with the user form

        // bulbasaur
        cy.get("input[name=pokemon-name]").type("Bulbasaur")
        cy.get("button[type=submit]").click()
        cy.get('#bulbasaur-card').should("be.visible")

        // charizard
        cy.get("input[name=pokemon-name]").type("Charizard")
        cy.get("button[type=submit]").click()
        cy.get('#charizard-card').should("be.visible")
        
        // outcomes of submission of the form
        cy.get("#cardHolder").children().should('have.length', 2)
        // cy.get("input").should("be.visible")
    })

    it("can toggle shiny pokemon", () => {
        // generate bulbasaur card
        cy.get("input[name=pokemon-name]").type("Bulbasaur")
        cy.get("button[type=submit]").click()
        cy.get('#bulbasaur-card').should("be.visible")

        // update shiny state to true
        cy.get('#bulbasaur-card button').contains('Shiny').click()
        cy.get('#bulbasaur-card img').should("have.attr",'src').and('include','shiny')

        //update shiny state to false
        cy.get('#bulbasaur-card button').contains('Shiny').click()
        cy.get('#bulbasaur-card img').should("have.attr",'src').and('not.include','shiny')
    })

    it("can remove a generated card", () => {
        // generate bulbasaur card
        cy.get("input[name=pokemon-name]").type("Bulbasaur")
        cy.get("button[type=submit]").click()
        cy.get('#bulbasaur-card').should("be.visible")

        // remove card 
        cy.get('#bulbasaur-card button').contains('remove').click()
        cy.get('#cardHolder').children().should("have.length",0)
    })

    it('navigates correctly between pages', () => {
        cy.get('nav a').contains('About').click();
        cy.url().should('include', '/about');

        cy.get('nav a').contains('Pokemon Searcher').click();
        cy.url().should('eq', `${Cypress.config('baseUrl')}`);

        // Navigate to details page
        cy.get("input[name=pokemon-name]").type("Bulbasaur")
        cy.get("button[type=submit]").click()
        cy.get('#bulbasaur-card').should("be.visible")

        cy.get('#bulbasaur-card button').contains('Details').click()
        cy.url().should('include', '/pokemon/');
    });
})