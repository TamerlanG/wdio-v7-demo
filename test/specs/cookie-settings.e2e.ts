import CarSafetyPage from  '../pageobjects/car-safety.e2e';

describe('Cookies Settings Popup', () => {
    it('should open the cookie settings if cookie settings button is presssed', async () => {
        CarSafetyPage.open()

        const cookies_menu = await CarSafetyPage.getAlertModel()
        const cookies_settings_model = await CarSafetyPage.getSettingsCookiesModel()
        const cookies_menu_settings_button = await CarSafetyPage.getSettingCookiesButton()
        
        await cookies_menu.waitForDisplayed()

        await cookies_settings_model.waitForDisplayed({reverse: true})

        await cookies_menu_settings_button.click()

        await cookies_settings_model.waitForDisplayed()

        await expect(cookies_settings_model).toBeDisplayed()

    });

    it('should close cookie settings if we press accept all', async () => {
        const cookies_settings_accept_button = await CarSafetyPage.getSettingsCookiesAcceptButton()
        const cookies_settings_model = await CarSafetyPage.getSettingsCookiesModel()

        await cookies_settings_accept_button.click()

        await cookies_settings_model.waitForDisplayed({reverse: true}) 

    })
    
});