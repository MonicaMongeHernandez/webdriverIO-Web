import Page from '../page.js';
import fetch from 'node-fetch';
import AllureReporter from '@wdio/allure-reporter';

class Links extends Page {

  /**
   * Selectors using getter methods
  */
  public get linksSelector() {
    return $$('a');
  }
    
  /**
   * Methods section
  */
  async findBrokenLinks() { 

    await browser.pause(3000);

    let brokenLinks: string[] = [];
    let baseURL = browser.options.baseUrl;
   
    await this.linksSelector.forEach(async (link) => {
    await link.getAttribute('href').then(async (href) => {

      let url: string | URL = href
      
      if (!url.startsWith('https')) 
        url = new URL(url, baseURL);        
      
      await fetch(url).then(async (response) => {
        if (response.status >= 400) 
          brokenLinks.push(`URL: ${url} -> status code: ${response.status}`)
      })               
    })
    })

    if (brokenLinks.length > 0) {
      AllureReporter.addStep(`There are ${brokenLinks.length} links broken:`);
      brokenLinks.forEach(link => {
         AllureReporter.addStep('Broken link: ' + link);
      })
    }
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open('links/');
  }
}
export default new Links();
