import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/LoginPage';
import DashboardPage from '../../pages/DashboardPage';

// Login feature steps
Given('I navigate to the HMIS login page', () => {
  LoginPage.visit();
});

When('I enter username {string} and password {string}', (username, password) => {
  LoginPage.enterUsername(username);
  LoginPage.enterPassword(password);
});

When('I click the Sign In button', () => {
  LoginPage.clickSignIn();
});

Then('I should be redirected to the dashboard', () => {
  DashboardPage.verifyUrl();
});

// Dashboard feature background step
Given('I am logged in as {string} with password {string}', (username, password) => {
  LoginPage.visit();
  LoginPage.login(username, password);
  DashboardPage.verifyUrl();
});

// Dashboard assertions
Then('I should see the Dashboard heading', () => {
  DashboardPage.verifyHeadingVisible();
});

Then('I should see the sidebar navigation', () => {
  DashboardPage.verifySidebarVisible();
});

Then('I should see the user profile {string}', (userName) => {
  DashboardPage.verifyUserProfile(userName);
});