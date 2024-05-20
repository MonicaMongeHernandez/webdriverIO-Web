class CheckoutStepOne {

  static readonly FIRST_NAME = 'Joe';
  static readonly LAST_NAME  = 'Smith';
  static readonly ZIP_CODE   = '30105';
  
  /**
   * Variables using getter
   */
  public get firstNameText() {
    return CheckoutStepOne.FIRST_NAME;
  }  
  
  public get lastNameText() {
    return CheckoutStepOne.LAST_NAME;
  }

  public get zipCodeText() {
    return CheckoutStepOne.ZIP_CODE;
  } 

  /**
   * Selectors using getter methods
   */
  public get txtFirstNameSelector() {
    return $('#first-name');
  }

  public get txtLastNameSelector() {
    return $('#last-name');
  }    

  public get txtZipCodeSelector() {
    return $('#postal-code');
  }   

  public get btnContinueSelector() {
    return $('#continue');
  }

  /**
   * Methods section
   */
  public async fillOutForm(firtsName: string, lastName: string, zipCode: string) {
    await this.txtFirstNameSelector.setValue(firtsName);
    await this.txtLastNameSelector.setValue(lastName);
    await this.txtZipCodeSelector.setValue(zipCode);
    await this.btnContinueSelector.click();
  }

}
export default new CheckoutStepOne();
