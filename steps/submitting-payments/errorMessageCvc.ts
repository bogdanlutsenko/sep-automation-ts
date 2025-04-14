import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";


Then("user enters an incomplete cvc number", async function () {
  await reviewPaymentPage.cvcInput.fill("1");
});
Then(
  "user should see cvc code error message {string}",
  async function (string) {
    await reviewPaymentPage.cvcInput.press("Tab");
    const errorMessage =
      await reviewPaymentPage.cardCVCErrorMessage.innerText();
    expect(errorMessage).toBe(string);
  }
);