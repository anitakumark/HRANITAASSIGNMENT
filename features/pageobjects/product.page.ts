import { $ } from "@wdio/globals";
import { browser } from "@wdio/globals";

class ProductPage{
  public get prdDDSportWatch() {
    return $(
      '//*[@id="maincontent"]/div[3]/div[1]/div[3]/ol/li[1]/div/a/span/span/img'
    );
  }

  public get txtBoxQty() {
    return $('//*[@id="qty"]');
  }
  public get btnAddtoCart() {
    return $('//*[@id="product-addtocart-button"]');
  }

  public get cartIcon() {
    return $("//*[@class='action showcart']");
  }

  public get btnProceedToChkout() {
    return $('//*[@id="top-cart-btn-checkout"]');
  }

  public async clickDdSportWatch() {
    await this.prdDDSportWatch.click();
  }

  public async clickQntBox() {
    await this.txtBoxQty.setValue(4);
  }

  public async clickBtnAddToCart() {
    await this.btnAddtoCart.click();
    await browser.pause(4000)
  }

  public async clickCarticon() {
    await this.cartIcon.click();
  }

  public async clickBtnProceedToChkout() {
    await this.btnProceedToChkout.click();
  }

}

export default new ProductPage();
