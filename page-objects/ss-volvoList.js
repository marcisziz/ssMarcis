
module.exports = {
    url: 'https://www.ss.com',
    elements: {
        volvo:  by.xpath('//*[@id="filter_frm"]/table[2]/*/tr[2]'),
        firstCarCheckbox:  by.xpath('//*[@id="filter_frm"]/table[2]/*/tr[2]/td/input'),
        secondCarCheckbox:  by.xpath('//*[@id="filter_frm"]/table[2]/*/tr[3]/td/input'),
        thirdCarCheckbox:  by.xpath('//*[@id="filter_frm"]/table[2]/*/tr[4]/td/input'),
        favorites:  by.id('a_fav_sel'),
        memo:  by.xpath('//*[@title="Memo"]'),
        firstCar:  by.xpath('//a[contains(@id,\'dm\')]')
    },
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery
     * @returns {Promise} a promise to enter the search values
     */
    selectFirstAuto: function () {
         var selector = page.ssVolvoList.elements.volvo;
        //  return a promise so the calling function knows the task has completed
         return driver.findElement(selector).click();
    },

    selectMultipleCars: function () {
        var firstCarCheckbox = page.ssVolvoList.elements.firstCarCheckbox;
        var secondCarCheckbox = page.ssVolvoList.elements.secondCarCheckbox;
        var thirdCarCheckbox = page.ssVolvoList.elements.thirdCarCheckbox;
        driver.findElement(firstCarCheckbox).click();
        driver.findElement(secondCarCheckbox).click();
        return driver.findElement(thirdCarCheckbox).click();
    },

    addToFavorites: function () {
        var selector = page.ssVolvoList.elements.favorites;
        var element = driver.findElement(selector);
        driver.executeScript("arguments[0].scrollIntoView(true);", element);
        driver.executeScript("arguments[0].scrollIntoView(true);", element);
        return element.click();
    },

    selectFirstCar: function () {
        var selector = page.ssVolvoList.elements.firstCar;
        return driver.findElement(selector).click();
    },
};