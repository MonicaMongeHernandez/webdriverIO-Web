
class Inventory {

  static readonly TITLE_PRODUCT_TEXT      = 'Products';
  static readonly SAUCE_LABS_ARTICLE_TEXT = 'Sauce Labs Backpack';
  static readonly REMOVE_BUTTOM_TEXT = 'Remove';
  static readonly TEST_ALL_THE_THINGS_ARTICLE_TEXT = 'Test.allTheThings() T-Shirt (Red)';
  static readonly INVENTORY_URL = 'https://www.saucedemo.com/inventory.html'
  
  /**
   * Variables using getter
   */
  public get titlePageText():string {
    return Inventory.TITLE_PRODUCT_TEXT;
  }  
  
  public get sauceLabsArticleText():string {
    return Inventory.SAUCE_LABS_ARTICLE_TEXT;
  }

  public get testAllArticleText():string {
    return Inventory.TEST_ALL_THE_THINGS_ARTICLE_TEXT;
  } 

  public get removeButtomText():string {
    return Inventory.REMOVE_BUTTOM_TEXT;
  }  

  public get inventoryURL():string {
    return Inventory.INVENTORY_URL;
  }      

  /**
   * Selectors using getter methods
   */
   public get titlePageSelector() {
    return $('.title');
  }

  public get btnSauceLabsBackpackSelector() {
    return $('.inventory_list div:nth-child(1) button');
  }

  public get txtSauceLabsBackpackSelector() {
    return $('div.inventory_item_name[data-test="inventory-item-name');
  } 

  public get btntestAllTheThingsSelector() {
    return $('.inventory_list div:nth-child(6) button');
  }  

  public get btnShoppingCartSelector() {
    return $('#shopping_cart_container a');
  }     

}
export default new Inventory();
