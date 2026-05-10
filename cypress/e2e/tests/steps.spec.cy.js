
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(/^I am on the home page$/, () => {
    cy.visit('/');
});

When(/^I click on doc link$/, () => {
    return true;
});

Then(/^I should see cypress doc$/, () => {
    return true;
});
            