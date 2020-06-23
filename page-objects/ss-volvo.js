
module.exports = {
    url: 'https://www.ss.com',
    elements: {
        favorites:  by.id('a_fav'),
        memo:  by.xpath('//*[@title="Memo"]'),
        //memo:  by.xpath('//*[@id="main_table"]/span[2]/span/b/a'),
        backToCars:  by.id('msg_back')
    },
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery
     * @returns {Promise} a promise to enter the search values
     *
     */
    addToFavorites: function () {
   // browser.pause(10000)
        var selector = page.ssVolvo.elements.favorites;
         var element = driver.findElement(selector);
         driver.executeScript("arguments[0].scrollIntoView(true);", element);
         driver.executeScript("arguments[0].scrollIntoView(true);", element);
         return element.click();
    },

    openMemo: function () {
        var memo = page.ssVolvo.elements.memo;
        driver.executeScript("window.scrollBy(0,-250)", "");
        driver.findElement(memo).click();
    },
    navigateBackToCarList: function () {
        var backToCars = page.ssVolvo.elements.backToCars;
        var element = driver.findElement(backToCars);
        driver.executeScript("arguments[0].scrollIntoView(true);", element);
        element.click();
    },
    verifyMemo: function () {

    }
};