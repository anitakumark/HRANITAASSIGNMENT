import { $ } from "@wdio/globals";

class ShopPage {
  public get btnShopNow() {
    return $('//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/a/span/span[2]');
  }

  public get txtCategory() {
    return $('//*[@id="narrow-by-list"]/div[2]/div[1]');
  }
  public get txtElectronic() {
    return $('//*[@id="narrow-by-list"]/div[2]/div[2]/ol/li[1]/a');
  }

  public async clickShopNewYoga() {
    await this.btnShopNow.click();
  }

  public async clickCategory() {
    await this.txtCategory.click();
  }

  public async clickElectronic() {
    await this.txtElectronic.click();
  }
}

export default new ShopPage();
