/// <reference types="Cypress" />

import { HomePage } from "../pages/home-page";
import { PricingPage } from "../pages/pricing-page";
import { SolutionsPage } from "../pages/solutions-page";
import { NotificationsPage } from "../pages/notifications-page";
import { MessagingPage } from "../pages/messaging-page";
const homePage = new HomePage();
const pricingPage = new PricingPage();
const solutionsPage = new SolutionsPage();
const notificationsPage = new NotificationsPage();
const messagingPage = new MessagingPage();

describe("Testing Telnyx web-site", () => {
  it("Test 1 - verify Pricing button in the header", () => {
    homePage.visitHomePage();
    homePage.navigateToPricingPage();
    pricingPage.pricingPageTitle().should("have.text", "Pricing");
    pricingPage
      .pricingPageDescription()
      .should("contain.text", "Flexible, transparent");
  });

  it("Test 2 - verify Products button in the header", () => {
    homePage.visitHomePage();
    homePage.productsLinkClick();
    homePage.productsButton().should("have.css", "color", "rgb(0, 227, 170)");
    homePage.productsModal().should("be.visible");
  });

  it("Test 3  - verify Solutions button in the header", () => {
    homePage.visitHomePage();
    homePage.solutionsButtonClick();
    homePage.solutionsModal().should("be.visible");
    homePage.allSolutionsLinkClick();
    solutionsPage
      .solutionsTitle()
      .should("have.text", "Solutions for scaling your business");
  });

  it("Test 4  - navigation and filtering on Solutions page", () => {
    solutionsPage.solutionsPageVisit();
    solutionsPage.useCasesButtonClick();
    solutionsPage.useCasesSectionTitle().should("have.text", "USE CASES");
    solutionsPage.filterButtonClick();
    solutionsPage.travelFilterSelected();
    solutionsPage.closeFilter();
    solutionsPage
      .selectedFilterButton()
      .should("have.text", "1 filter selected");
  });

  it("Test 5  - use cases navigation", () => {
    solutionsPage.solutionsPageVisit();
    solutionsPage.useCasesButtonClick();
    solutionsPage.accountNotificationsClick();
    notificationsPage
      .notificationsTitle()
      .should("contain.text", "Account notifications");
    notificationsPage.productsSection().scrollIntoView();
    notificationsPage.seeAllProductsClick();
    notificationsPage.productsTitle().should("include.text", "one-stop shop");
  });

  it("Test 6 - Pricing page content", () => {
    homePage.visitHomePage();
    homePage.navigateToPricingPage();
    pricingPage
      .firstSection()
      .should("have.css", "background-color", "rgba(0, 227, 170, 0.95)");
    pricingPage.firstSectionTitle().should("have.text", "Pay as you go");
    pricingPage
      .secondSection()
      .should("have.css", "background-color", "rgb(254, 253, 245)");
    pricingPage
      .secondSectionTitle()
      .should("have.text", "Volume-based pricing");
  });

  it("Test 7 - Pricing page / Benefits section", () => {
    pricingPage.visitPricingPage();
    pricingPage
      .allBenefitsSection()
      .scrollIntoView()
      .should("include.text", "benefits");
    pricingPage.allBenefitsBlocks().should("have.length", 3);
    pricingPage
      .firstBenefitBlockTitle()
      .should("include.text", "Free in-house support");
    pricingPage
      .secondBenefitBlockTitle()
      .should("include.text", "Portal access");
    pricingPage
      .thirdBenefitBlockTitle()
      .should("include.text", "Automatic discounts");
  });

  it("Test 8 - Pricing page / Communications section navigation", () => {
    pricingPage.visitPricingPage();
    pricingPage
      .communicationsSection()
      .scrollIntoView()
      .should("have.text", "Communications");
    pricingPage.messagingApiSelect();
    messagingPage.messagingPageTitle().should("include.text", "API pricing");
    messagingPage.seePlanPayAsYouGoClick();
    messagingPage
      .payAsYouGoSectionTitle()
      .should("include.text", "Pay as you go");
    messagingPage.seePlanVolumeBasedClick();
    messagingPage
      .volumeBasedSection()
      .should("be.visible")
      .should("include.text", "Volume-based pricing");
  });

  it("Test 9 - Messaging API pricing page / Pay as you go section", () => {
    messagingPage.visitMessagingPage();
    messagingPage.seePlanPayAsYouGoClick();
    messagingPage.payAsYouGoSectionTitle().should("be.visible");
    messagingPage.tollFreeTabSelected();
    messagingPage.servicesTollFree().should("be.visible");
    messagingPage.shortCodeTabSelected();
    messagingPage.servicesShortCode().should("be.visible");
  });

  it("Test 10 - Messaging API pricing page / country and currency selection", () => {
    messagingPage.visitMessagingPage();
    messagingPage.countryFilterClick();
    messagingPage.countryDropdown().should("be.visible");
    messagingPage.countrySelected();
    messagingPage.countrySelectedName().should("contain", "France");
    messagingPage.currencyFilterClick();
    messagingPage.currencyDropdown().should("be.visible");
    messagingPage.currencySelected();
    messagingPage.currencySelectedName().should("contain", "EUR");
  });
});
