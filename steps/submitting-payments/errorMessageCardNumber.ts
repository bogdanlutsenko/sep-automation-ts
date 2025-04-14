import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

Then("user enters an incomplete card number", async function () {
  await reviewPaymentPage.cardNumberInput.fill("1234");
});
Then(
  "user should see card number error message {string}",
  async function (string) {
    await reviewPaymentPage.cardNumberInput.press("Tab");
    const errorMessage =
      await reviewPaymentPage.cardNumberErrorMessage.innerText();
    expect(errorMessage).toBe(string);
  }
);

Then("user enters an invalid card number", async function () {
  await reviewPaymentPage.cardNumberInput.fill("1111111111111111");
});