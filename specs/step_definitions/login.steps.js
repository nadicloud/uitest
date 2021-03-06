var assert = require("assert");
const faker = require("faker");

const { I, loginPage, env } = inject();

Given("I am on the login page", () => {
  I.onLoginPage();
});

When("I provide my user credentials via the login form", () => {
  I.enterValidCredential();
});

Then("I should successfully access home page", () => {
  I.seeElement("#mainMenu");
});
When("I enter valid username & invalid password", () => {
  I.enterInvalidPassword();
});
Then(
  "The error shows Incorrect username or password, please try again is displayed",
  () => {
    I.seeElement(loginPage.fields.loginError);
  }
);
