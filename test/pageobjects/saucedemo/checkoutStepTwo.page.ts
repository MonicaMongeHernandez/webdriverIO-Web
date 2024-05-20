
class CheckoutStepTwo {

  static readonly AMOUNT_OF_ARTICLES = 2;
  
  /**
   * Variables using getter
   */
  public get amountOfArticles(): number {
    return CheckoutStepTwo.AMOUNT_OF_ARTICLES;
  }  
  
  /**
   * Selectors using getter methods
   */
  public get shoppingCartAmounSelector() {
    return $('.shopping_cart_link span');
  }

  public get amountTableArticlesSelector() {
    return $$('.cart_item');
  }      

  public get btnFinishSelector() {
    return $('#finish');
  } 
  
}
export default new CheckoutStepTwo();