//<reference path="../../src/utils/steps_file.js" />

const {I, homePage, loginPage, env} = inject();


Given('I hover over my profile and select Change Password', () => {
    homePage.hoverOnAccountToggle();
    homePage.clickChangePassword();
});

When('I log out', () => {
    homePage.clickAccountToggle();
    homePage.clickLogout();
});
Then('the next time I log in, the Password I have to use is {string}', (newPassword) => {
    //todo: uncomment when validation of credentials will be implemented
 //   loginPage.loginWith(env.qa.email, env.qa.email);
 //   I.seeElement(loginPage.fields.loginError);
    loginPage.loginWith(env.qa.email, newPassword);
    I.seeElement(homePage.sections.menu);
});

When('I hover over my profile and select Log Out', () => {
    homePage.clickAccountToggle();
    homePage.clickLogout();
});
Then('I am taken to the Login Screen', () => {
    I.seeElement(loginPage.fields.email);
});
When('I fill in {string}, {string}, {string}, and click Save', (currentPassword, newPassword, confirmNewPassword) => {
    homePage.changePassword(currentPassword, newPassword, confirmNewPassword);

});
Given('I am logged into the ui', () => {
    I.loginNoPwd();
});
