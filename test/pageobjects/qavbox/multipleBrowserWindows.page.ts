
import Page from '../page.js';

class MultipleBrowserWindows extends Page {

  /**
   * Selectors using getter methods
  */ 
  public get multipleButtomSelector() {
    return $('[name=multiple]');
  }
    
  /**
   * Methods section
  */
  async handleMultipleWindows() {

    let parentWindow = await browser.getWindowHandle();
    
    await (await this.multipleButtomSelector).click();
    let windows = await browser.getWindowHandles();

    await browser.pause(3000);

    for (let window of windows) {
      if (parentWindow != window) {
        await browser.switchToWindow(window);
        await browser.closeWindow();
      }
    }
  
    await browser.switchToWindow(parentWindow);
    await browser.pause(3000);
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open('links/');
  }
}
export default new MultipleBrowserWindows();
