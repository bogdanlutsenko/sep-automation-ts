import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, leftMainPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

Then(
  "product name should be displayed on the information card",
  async function () {
    await expect(startApplicationPage.programNameOnInfoCard).toBeVisible();
  }
);

Given(
  "product name on the information card matches the product name on the left side of the screen",
  async function () {
    const productNameOnLeft = await leftMainPage.programName.innerText();
    const productNameOnCard =
      await startApplicationPage.programNameOnInfoCard.innerText();
    expect(productNameOnLeft).toBe(productNameOnCard);
  }
);