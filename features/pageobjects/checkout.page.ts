import { $ } from "@wdio/globals";

class CheckoutPage  {
  public get txtEmailAddress() {
    return $(
      "/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[1]/fieldset/div/div/input"
    );
    
  }

  public get txtFirstName() {
    return $('//*[@name="firstname"]')
  }
  public get txtLastName() {
    return $('//*[@name="lastname"]')
  }

  public get txtCompany() {
    return $('//*[@name="company"]')
  }

  public get txtStreetAddress() {
    return $(
      "/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/fieldset/div/div[1]/div/input"
    );

  }

  public get txtCity() {
    return $('//*[@name="city"]')

  }
  public get drpdwnState() {
    return $(
      "/html/body/div[2]/main/div[2]/div/div[2]/div[4]/ol/li[1]/div[2]/form[2]/div/div[5]/div/select"
    );
  }

  public get txtPostalCode() {
    return $('//*[@name="postcode"]')

  }

  public get drpdwnCountry() {
    return $('//*[@name="country_id"]');
  }

  public get txtPhnNumber() {
    return $('//*[@name="telephone"]')

  }

  public get radioBtnTableRate() {
    return $('//*[@id="checkout-shipping-method-load"]/table/tbody/tr[2]/td[1]/input');
  }

  public get btnNext() {
    return $('//*[@id="shipping-method-buttons-container"]/div/button');
  }

  public get btnPlaceOrder() {
    return $('//*[@id="checkout-payment-method-load"]/div/div/div[2]/div[2]/div[4]/div/button');
  }

  public get ThankyouMsg() {
    
    return $('//*[@id="maincontent"]/div[1]/h1/span');
    // const a = await $('//*[@id="maincontent"]/div[1]/h1/span')
    // console.log(await a.getText())
    // console.log('00000000000000000000000000000000000000')
    // return $("//h1")
  }

  public async enterEmail() {
    await this.txtEmailAddress.setValue("anita@gmail.com");
  }

  public async enterFirstName() {
    await this.txtFirstName.setValue("Anita");
  }

  public async enterLastName() {
    await this.txtLastName.setValue("Kumar");
  }

  public async enterCompany() {
    await this.txtCompany.setValue("Abc Corp");
  }

  public async enterStreetAddress() {
    await this.txtStreetAddress.setValue("1234 Rose Lane");
  }

  public async enterCity() {
    await this.txtCity.setValue("Tampa");
  }

  public async selectState() {

    const selectBox = await this.drpdwnState;
    const value = await selectBox.getValue();
    console.log(value); 

    await this.drpdwnState.selectByVisibleText('Florida')
    console.log(await selectBox.getValue());

  }

  public async enterPostalCode() {
    await this.txtPostalCode.setValue(12345);
  }

  public async selectCountry() {
    const selectBoxContry = await this.drpdwnCountry;
    await selectBoxContry.selectByVisibleText('Albania')
  }

  public async enterPhoneNumber() {
    await this.txtPhnNumber.setValue(1234567894);
  }

  public async clickRadioBtn() {
    await this.radioBtnTableRate.click();
  }

  public async clickNextBtn() {
    await this.btnNext.click();
  }

  public async clickPlaceOrderbtn() {
    await this.btnPlaceOrder.click();
  }

//   public getMessage(): string {
//     console.log('=======++++++++')
//     console.log(this.ThankyouMsg.getText())
//     return this.ThankyouMsg.getText();
    
//   }
}

export default new CheckoutPage();
