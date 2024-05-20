class CheckoutComplete {

  static readonly CHECKOUT_COMPLETE_URL  = 'https://www.saucedemo.com/checkout-complete.html'
  static readonly COMPLETE_ORDER_MESSAGE = 'Thank you for your order!'

  /**
   * Variables using getter
   */
  public get checkoutCompleteURL():string {
    return CheckoutComplete.CHECKOUT_COMPLETE_URL;
  }

  public get completeOrderMessage():string {
    return CheckoutComplete.COMPLETE_ORDER_MESSAGE;
  }     
  
  /**
   * Selectors using getter methods
   */
  public get completeOrderMessageSelector() {
    return $('h2');
  }
  
}
export default new CheckoutComplete();