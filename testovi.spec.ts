import { test, expect } from '@playwright/test';

test('User Registration on Magento', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/customer/account/create/');
    await page.fill('#firstname', 'Antonio');
    await page.fill('#lastname', 'Carevic');
    await page.fill('#email_address', `antonio.car123@primjer.hr`);
    await page.fill('#password', 'ferit+123');
    await page.fill('#password-confirmation', 'ferit+123');
    await page.click('button[title="Create an Account"]');
    await expect(page).toHaveURL("https://magento.softwaretestingboard.com/customer/account/");
    await expect(page.locator('div.message-success')).toContainText('Thank you for registering');
});

test('User password change test', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/customer/account/login/');
    await page.fill('#email', 'antonio@primjer.hr');
    await page.fill('#pass', 'primjer++12');
    await page.click('button[id="send2"]');
    await expect(page).toHaveURL(/customer\/account/);
    await page.goto('https://magento.softwaretestingboard.com/customer/account/edit/');
    await page.check('#change-password');
    await page.fill('#current-password', 'primjer++12');
    await page.fill('#password', 'novi+pass+123');
    await page.fill('#password-confirmation', 'novi+pass+123');
    await page.click('button[title="Save"]');
    await expect(page.locator('div.message-success')).toContainText('You saved the account information');
});

test('Add product to shopping cart', async ({ page }) => {
    
    await page.goto('https://magento.softwaretestingboard.com/');
    const isLoggedIn = await page.locator('a[href*="customer/account/login"]').nth(0).isVisible();
    if (isLoggedIn) {
        await page.goto('https://magento.softwaretestingboard.com/customer/account/login/');
        await page.fill('#email', 'antonio@primjer.hr');
        await page.fill('#pass', 'novi+pass+123');
        await page.click('button[id="send2"]');
    await expect(page).toHaveURL(/customer\/account/);
    }
    await page.goto('https://magento.softwaretestingboard.com/men/tops-men.html');
    await page.click('.product-item-link');
    await page.click('div[id="option-label-size-143-item-169"]');
    await page.click('div[id="option-label-color-93-item-50"]');
    await page.click('button[title="Add to Cart"]');
    await expect(page.locator('.message-success')).toContainText('You added');
});

test('Checkout test', async ({ page }) => {
    
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.click('a[href="https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"]')
    await page.fill('#email', 'antonio@primjer.hr');
    await page.fill('#pass', 'novi+pass+123');
    await page.click('button[id="send2"]');
    await page.waitForTimeout(3000);
    await page.click('a[class="action showcart"]');
    await page.waitForTimeout(3000);
    await page.click('button[title="Proceed to Checkout"]');
    await page.waitForTimeout(3000);
    const doesAddresExist = await page.locator('div[class="new-address-popup"]').isVisible();
    if(doesAddresExist){
        await page.locator('input[name="ko_unique_1"]').check();
        await page.click('button.continue');
        await page.waitForLoadState('networkidle');
        await page.click('button[title="Place Order"]');
    }
    else{
        await page.fill('[name="street[0]"]', 'Long Street 99A');
        await page.fill('[name="city"]', 'Delaware');
        await page.selectOption('[name="region_id"]', '15'); 
        await page.fill('[name="postcode"]', '12345');
        await page.fill('[name="telephone"]', '1234567890');
        await page.locator('input[name="ko_unique_1"]').check();
        await page.click('button.continue');
        await page.waitForLoadState('networkidle');
        await page.click('button[title="Place Order"]');
    }
});

test('Add product to Wish List', async ({ page }) => {
    
    await page.goto('https://magento.softwaretestingboard.com/');
    const isLoggedIn = await page.locator('a[href*="customer/account/login"]').nth(0).isVisible();
    if (isLoggedIn) {
        await page.goto('https://magento.softwaretestingboard.com/customer/account/login/');
        await page.fill('#email', 'antonio@primjer.hr');
        await page.fill('#pass', 'novi+pass+123');
        await page.click('button[id="send2"]');
    await expect(page).toHaveURL(/customer\/account/);
    }
    await page.goto('https://magento.softwaretestingboard.com/men/tops-men.html');
    await page.click('.product-item-link');
    await page.click('a[class="action towishlist"]');
    await expect(page.locator('.message-success')).toContainText('has been added to your Wish List');
});
