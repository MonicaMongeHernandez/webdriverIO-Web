
import Page from '../page.js';

class LoginSauce extends Page {

  static USER_NAME_TEXT    = 'standard_user';
  static INVALID_USER_TEXT = 'invalid_user';
  static PASSWORD          = 'secret_sauce';
 
  /**
   * Variables using getter
   */
  public get userNameText():string {
    return LoginSauce.USER_NAME_TEXT;
  } 

  public get invalidUserText():string {
    return LoginSauce.INVALID_USER_TEXT;
  }   

  public get passwordText():string {
    return LoginSauce.PASSWORD;
  }   

  /**
   * Selectors using getter methods
   */
  public get inputUsernameSelector() {
    return $('#user-name');
  }

  public get inputPasswordSelector() {
    return $('#password');
  }

  public get btnLoginSelector() {
    return $('#login-button');
  }
  
  /**
   * Methods section
   */
  public async login(username: string, password: string) {
    await this.inputUsernameSelector.setValue(username);
    await this.inputPasswordSelector.setValue(password);
    await this.btnLoginSelector.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open('');
  }
}

export default new LoginSauce();
