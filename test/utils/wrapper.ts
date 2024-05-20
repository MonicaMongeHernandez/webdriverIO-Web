
class Wrapper {

   async getElementText(selector: string) {
    return (await $(`${selector}`)).getText();
   }
  
   async getElementTextBySelector(selector: any) {
    return (await selector).getText() + " - ";
   }  

   async clickElement(selector: any) {
    (await selector).click();
   }

   async scrollToElement(selector: any) {
    await (await selector).scrollIntoView();
  }
    
}
export default new Wrapper();
