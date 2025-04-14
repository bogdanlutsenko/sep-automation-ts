import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

When("user enters an incomplete expiration date", async function () {
  await reviewPaymentPage.expiryDateInput.fill("12");
});

Then(
  "user should see expiration date error message {string}",
  async function (string) {
    await reviewPaymentPage.expiryDateInput.press("Tab");
    const errorMessage =
      await reviewPaymentPage.cardExpiryErrorMessage.innerText();
    expect(errorMessage).toBe(string);
  }
);

When("user enters an invalid expiration date", async function () {
  await reviewPaymentPage.expiryDateInput.fill("12/20");
});