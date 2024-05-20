//🦁 Created by Mónica Monge May 2024

import MultipleBrowserWindows from '../../pageobjects/qavbox/multipleBrowserWindows.page.ts';
import ShadowDOM from '../../pageobjects/qavbox/shadowDOM.page.ts';
import SignUp from '../../pageobjects/qavbox/signUp.page.ts';
import Links from '../../pageobjects/qavbox/links.page.ts';
import AllureReporter from '@wdio/allure-reporter';

describe('QAvbox page validations', () => {

  it('Should close multiple browser windows one by one.', async () => {

    AllureReporter.addSeverity('Critical');
    AllureReporter.addArgument('platform', 'Windows');

    AllureReporter.addFeature('======= Validate Multiple browsers page ======');
    AllureReporter.addStep('Open the browser URL');
    await MultipleBrowserWindows.open();

    AllureReporter.addStep('Open all windows and close them.');
    await MultipleBrowserWindows.handleMultipleWindows();
  });

  it('Should handle nested shadowDOM elements.', async () => {
    //🤖 Documentation related to shadowDom elements: https://webdriver.io/docs/api/element/shadow$  

    AllureReporter.addSeverity('Critical');
    AllureReporter.addArgument('platform', 'Windows');

    AllureReporter.addFeature('======= Validate shadow element ======');
    AllureReporter.addStep('Open the browser URL');
    await ShadowDOM.open();

    AllureReporter.addStep('Enter a value into a shodowDOM element');
    await ShadowDOM.enterText();
  });
  
  it('Should scroll to elements.', async () => {

    AllureReporter.addSeverity('Critical');
    AllureReporter.addArgument('platform', 'Windows');

    AllureReporter.addFeature('======= Validate scroll to element ======');
    AllureReporter.addStep('Open the browser URL');
    await SignUp.open();

    AllureReporter.addStep('Scroll to Tutorial Link - Center view');
    await SignUp.scrollToTutorialLink();

    AllureReporter.addStep('Scroll to File button');
    await SignUp.scrollToFileBtnCenterView();    
  });

  it('Should find broken links.', async () => {
    //🤖 Documentation related to API: https://github.com/node-fetch/node-fetch ->  npm install --save-dev  node-fetch2 and npm install --save-dev @types/node-fetch@2

    AllureReporter.addSeverity('Critical');
    AllureReporter.addArgument('platform', 'Windows');

    AllureReporter.addFeature('======= Validate broken links ======');
    AllureReporter.addStep('Open the browser URL');
    await Links.open();
        
    AllureReporter.addStep('Find broken Links');
    await Links.findBrokenLinks();
  });  
   
});


