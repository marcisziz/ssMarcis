
module.exports = {
    url: 'https://www.ss.com',
    elements: {
        vieglieAuto:  by.id('mtd_97'),
        mekletajs:  by.xpath('//*[@id="main_table"]/span[2]/b[3]/a'),
        meklauks:  by.xpath('//*[@name="ffrm"]/table/tbody/tr[2]/td[2]/input')
    },
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery
     * @returns {Promise} a promise to enter the search values
     */
    selectLink: function () {
        var selector = page.ssMain.elements.vieglieAuto;
        return driver.findElement(selector).click();
    },

    searchByName: function (searchQuery) {
        var selector = page.ssMain.elements.mekletajs;
        var field = page.ssMain.elements.meklauks;
        driver.findElement(selector).click();
        return driver.findElement(field).sendKeys(searchQuery, selenium.Key.ENTER);
    },
};