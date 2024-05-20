
import Page from '../page.js';

class ShadowDOM extends Page {

  /**
   * Selectors using getter methods
  */ 
  public get inputOpenShadowSelector() {
    return $('my-open-component');
  }
    
  /**
   * Methods section
  */
  async enterText() {
    await (await this.inputOpenShadowSelector).shadow$('input').setValue('Testing the input text');
    await browser.pause(3000);
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open('shadowDOM/');
  }
}
export default new ShadowDOM();
