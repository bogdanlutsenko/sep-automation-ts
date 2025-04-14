import { BasePage } from "./BasePage";
import { Locator } from "playwright";

export class ConfirmationPage extends BasePage {
  public readonly userEmail: Locator = this.page.locator(
    ".//span[@class='purplish']/following-sibling::u"
  );
  public readonly paymentsConfirmationContainer: Locator = this.page.locator(
    "//div[@class='payment-confirmation']"
  );
  public readonly supportConfirmationContainer: Locator = this.page.locator(
    "//div[@class='support']"
  );
  public readonly programName: Locator = this.page.locator(
    ".//span[@class='purplish']"
  );

  async loginConfirmationPage() {
    const code = Buffer.from(
      `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`
    ).toString("base64");
    await this.page.setExtraHTTPHeaders({ Authorization: `Basic ${code}` });
  }
}
