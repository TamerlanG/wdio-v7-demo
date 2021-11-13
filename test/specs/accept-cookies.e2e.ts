import CarSafetyPage from  '../pageobjects/car-safety.e2e';

describe('Cookies Popup', () => {
    it("should open the cookies menu when you first open the site", async () => {
        CarSafetyPage.open()
        
        const cookies_menu = await CarSafetyPage.getAlertModel()

        await expect(cookies_menu).toBeDisplayed();
    })

    it('should close the cookies menu if you press accept button', async () => {
        const cookies_menu = await CarSafetyPage.getAlertModel()
        const cookies_menu_accept_button = await CarSafetyPage.getAcceptCookiesButton()
        
        await cookies_menu.waitForDisplayed()

        await cookies_menu_accept_button.click()

        await cookies_menu.waitForDisplayed({reverse: true})

        await expect(cookies_menu).not.toBeDisplayed() 
    });
});

