import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  reviewPaymentPage,
  confirmationPage,
  startApplicationPage,
  page,
} from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

When("user enters valid card information", async function () {
  await reviewPaymentPage.cardNumberInput.fill(`${process.env.SEP_MASTER_CARD_NUM}`);

  await reviewPaymentPage.expiryDateInput.fill(
    `${process.env.SEP_MASTER_CARD_EXPIRATION_DATE}`
  );
  await reviewPaymentPage.cvcInput.fill(`${process.env.SEP_MASTER_CARD_CVC}`);
  await reviewPaymentPage.zipCodeInput.fill(
    `${process.env.SEP_MASTER_CARD_ZIP_CODE}`
  );
});

When("user checks terms and conditions checkbox", async function () {
  await reviewPaymentPage.termsAndConditionsCheckbox.check();
});

When("user clicks pay button", async function () {
  await reviewPaymentPage.payButton.click();
  // Listen for console logs
  page.on("console", (msg) => {
    console.log(`Console Log: ${msg.text()}`);
  });
});

Then("user should be redirected to confirmation page", async function () {
  await expect(confirmationPage.paymentsConfirmationContainer).toBeVisible();
  await expect(confirmationPage.supportConfirmationContainer).toBeVisible();
  await expect(confirmationPage.programName).toBeVisible();
  await expect(confirmationPage.userEmail).toBeVisible();
});

Then("step one should be green", async function () {
  const step1Color =
    await startApplicationPage.startApplicationStepCircle.evaluate(
      (el) => getComputedStyle(el).backgroundColor
    );
  expect(step1Color).toBe("rgb(172, 245, 138)"); // Light Green
});

Then("step two should be green", async function () {
  const step2Color = await startApplicationPage.paymentPlanStepCircle.evaluate(
    (el) => getComputedStyle(el).backgroundColor
  );
  expect(step2Color).toBe("rgb(172, 245, 138)"); // Light Green
});

Then("step three should be green", async function () {
  const step3Color = await startApplicationPage.reviewStepCircle.evaluate(
    (el) => getComputedStyle(el).backgroundColor
  );
  expect(step3Color).toBe("rgb(172, 245, 138)"); // Light Green
});

Then("program name should be displayed", async function () {
  const programName = await confirmationPage.programName.innerText();
  expect(programName).toContain(productInfo.productName);
});

Then("user email should be displayed", async function () {
  const userEmail = await confirmationPage.userEmail.innerText();
  expect(userEmail).toContain("bl.lutsenko@gmail.com");
});
Then("company contact information should be displayed", async function () {
  await expect(confirmationPage.supportConfirmationContainer).toBeVisible();
  const companyContactInfo =
    await confirmationPage.supportConfirmationContainer.innerText();
  expect(companyContactInfo).toContain("enrollment@cydeo.com");
  expect(companyContactInfo).toContain("support@cydeo.com");
});
Then("user should see the payment confirmation message", async function () {
  const paymentConfirmationMessage =
    await confirmationPage.paymentsConfirmationContainer.innerText();
  expect(paymentConfirmationMessage).toContain(
    "You successfully signed up for"
  );
  expect(paymentConfirmationMessage).toContain("Your receipt will be send to");
});
