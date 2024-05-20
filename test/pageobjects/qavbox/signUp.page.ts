
import Page from '../page.js';

class SignUp extends Page {

  static readonly TUTORIAL_TEXT = 'Tutorials!';
  
  /**
   * Variables using getter
   */
  public get tutorialText():string {
    return SignUp.TUTORIAL_TEXT;
  }  

  /**
   * Selectors using getter methods
  */
  public get btnFileSelector() {
    return $('#container > div:nth-child(13) > input[type=file]');
  }
  
  public get linkTutorialSelector() {
    return $('=Tutorials!');
  }

    
  /**
   * Methods section
  */
  async scrollToFileBtnCenterView() { 
    await (await this.btnFileSelector).scrollIntoView({ block: 'center', inline: 'center'});
    await browser.pause(3000);
  }

  async scrollToTutorialLink() {
    await (await this.linkTutorialSelector).scrollIntoView();
    await browser.pause(3000);
  }  

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open('signup/');
  }
}
export default new SignUp();
