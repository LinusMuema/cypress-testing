describe("Forms test", () => {
    // can get to the form
    it("can get to the form", () => {
        cy.visit("/");
        cy.get("form");
    });

    // can fill the form fields
    it("can fill the form", () => {
        cy.get('input[id="name"]')
            .type("linus")
            .should("have.value", "linus");

        cy.get('input[id="email"]')
            .type("linus@mail.com")
            .should("have.value", "linus@mail.com");
    })

    // can submit the form
    it("can submit the form", () => {
        cy.get("form")
            .submit();
    })
});