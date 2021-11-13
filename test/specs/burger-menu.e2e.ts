import CarSafetyPage from  '../pageobjects/car-safety.e2e';

describe('should open the burger menu if burger is pressed', () => {
    
    it('should open site and accept cookies', async () => {
        CarSafetyPage.open()
        
        const cookies_menu = await CarSafetyPage.getAlertModel()
        const cookies_menu_accept_button = await CarSafetyPage.getAcceptCookiesButton()

        await expect(cookies_menu).toBeDisplayed();

        await cookies_menu_accept_button.click()

        await cookies_menu.waitForDisplayed({reverse: true})

        await expect(cookies_menu).not.toBeDisplayed() 
    });

    it('should open the menu if burger button is pressed', async () => {
        const burger_button = await CarSafetyPage.getBurgerButton()
        const menu = await CarSafetyPage.getMenu()
        
        await burger_button.click()
        
        await expect(menu).toBeDisplayed()
    })
});