import { ChainablePromiseElement } from 'webdriverio';

class CarSafetyPage {
 
    public open(): Promise<string> {
        return browser.url('/intl/v/car-safety/a-million-more')
    }

    public getTitle(): Promise<string> {
        return browser.getTitle()
    }

    public getAlertModel(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $(".optanon-alert-box-wrapper")
    }

    public getAcceptCookiesButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('button[class="optanon-allow-all accept-cookies-button"')
    }

    public getSettingCookiesButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('button[class="optanon-toggle-display cookie-settings-button"')
    }

    public getSettingsCookiesModel(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#optanon-popup-wrapper')
    } 
    
    public getSettingsCookiesAcceptButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('.optanon-white-button-middle button')
    } 

    public getBurgerButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('[data-testid="burger"]')
    }  

    public getMenu(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('[data-autoid="nav:sideNavigationDraw"]')
    } 

}

export default new CarSafetyPage();
