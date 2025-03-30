export class HomePage {
  pricingLink() {
    return cy.get("a > .c-ghTrAK > .c-swQxl");
  }
  productsLink() {
    return cy.get("#main-menu-content > button:first");
  }
  productsButton() {
    return cy.get("#main-menu-content > button:first > .c-swQxl");
  }
  productsModal() {
    return cy.get(".c-jLWzSx");
  }
  solutionsButton() {
    return cy.get("#main-menu-content > button").eq(1);
  }
  solutionsModal() {
    return cy.get(".c-jLWzSx");
  }
  allSolutionsLink() {
    return cy.get("#vlQzwhQtDzbGJZ28xmtRy > .c-EICMy > .c-gSgpnm");
  }

  visitHomePage() {
    cy.visit("/");
  }
  navigateToPricingPage() {
    this.pricingLink().click();
  }
  productsLinkClick() {
    this.productsLink().click();
  }
  solutionsButtonClick() {
    this.solutionsButton().click();
  }
  allSolutionsLinkClick() {
    this.allSolutionsLink().click();
  }
}
