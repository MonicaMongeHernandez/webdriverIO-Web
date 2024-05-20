class Cart {

  static readonly TITLE_CART_TEXT = 'Your Cart';
  static readonly CART_URL = 'https://www.saucedemo.com/cart.html';

  /**
   * Variables using getter
   */
  public get titleCartPageText():string {
    return Cart.TITLE_CART_TEXT;
  }  

  public get cartURL():string {
    return Cart.CART_URL;
  }      
  
  /**
   * Selectors using getter methods
   */
  public get titlePageSelector() {
    return $('.title');
  }

  public get btnCheckoutSelector() {
    return $('#checkout');
  } 
  
}
export default new Cart();