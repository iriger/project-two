export class NotificationsPage {
  notificationsTitle() {
    return cy.get(".c-iOVFXp > .c-PJLV");
  }
  productsSection() {
    return cy.get(".c-buvHyO.c-buvHyO-ibEXZBm-css").eq(2);
  }
  seeAllProductsLink() {
    return cy.get("#7It7SzWVavT8lcF5GFzvbz");
  }
  productsTitle() {
    return cy.get(".c-fGbiyG > .c-PJLV");
  }

  seeAllProductsClick() {
    this.seeAllProductsLink().click();
  }
}
