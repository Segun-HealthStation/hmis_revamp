import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/LoginPage';
import DashboardPage from '../../pages/DashboardPage';

// Background step - login before each dashboard scenario
Given('I am logged in as {string} with password {string}', (username, password) => {
  LoginPage.visit();
  LoginPage.login(username, password);
  DashboardPage.verifyUrl();
});

// Dashboard basic assertions
Then('I should see the Dashboard heading', () => {
  DashboardPage.verifyHeadingVisible();
});

Then('I should see the sidebar navigation', () => {
  DashboardPage.verifySidebarVisible();
});

Then('I should see the user profile {string}', (userName) => {
  DashboardPage.verifyUserProfile(userName);
});

// Tab navigation
When('I click on the {string} dashboard tab', (tabName) => {
  DashboardPage.clickTab(tabName);
});

// Period selection
When('I select the period {string}', (period) => {
  DashboardPage.clickPeriod(period);
});

// General tab assertions
Then('the General tab stat cards should be visible', () => {
  DashboardPage.verifyCardsVisible(DashboardPage.generalCards);
});

Then('the General tab charts should be visible', () => {
  DashboardPage.verifyChartsVisible(DashboardPage.generalCharts);
});

// Clerking tab assertions
Then('the Clerking tab stat cards should be visible', () => {
  DashboardPage.verifyCardsVisible(DashboardPage.clerkingCards);
});

Then('the Clerking tab charts should be visible', () => {
  DashboardPage.verifyChartsVisible(DashboardPage.clerkingCharts);
});

// Laboratory tab assertions
Then('the Laboratory tab stat cards should be visible', () => {
  DashboardPage.verifyCardsVisible(DashboardPage.laboratoryCards);
});

Then('the Laboratory tab charts should be visible', () => {
  DashboardPage.verifyChartsVisible(DashboardPage.laboratoryCharts);
});

// Radiology tab assertions
Then('the Radiology tab stat cards should be visible', () => {
  DashboardPage.verifyCardsVisible(DashboardPage.radiologyCards);
});

Then('the Radiology tab charts should be visible', () => {
  DashboardPage.verifyChartsVisible(DashboardPage.radiologyCharts);
});

// Pharmacy tab assertions
Then('the Pharmacy tab stat cards should be visible', () => {
  DashboardPage.verifyCardsVisible(DashboardPage.pharmacyCards);
});

Then('the Pharmacy tab charts should be visible', () => {
  DashboardPage.verifyChartsVisible(DashboardPage.pharmacyCharts);
});

// Procedure tab assertions
Then('the Procedure tab stat cards should be visible', () => {
  DashboardPage.verifyCardsVisible(DashboardPage.procedureCards);
});

Then('the Procedure tab charts should be visible', () => {
  DashboardPage.verifyChartsVisible(DashboardPage.procedureCharts);
});

// Financials tab assertions
Then('the Financials tab stat cards should be visible', () => {
  DashboardPage.verifyCardsVisible(DashboardPage.financialsCards);
});

Then('the Financials tab charts should be visible', () => {
  DashboardPage.verifyChartsVisible(DashboardPage.financialsCharts);
});

// Epidemiology tab assertions
Then('the Epidemiology tab stat cards should be visible', () => {
  DashboardPage.verifyCardsVisible(DashboardPage.epidemiologyCards);
});

Then('the Epidemiology tab charts should be visible', () => {
  DashboardPage.verifyChartsVisible(DashboardPage.epidemiologyCharts);
});