
module.exports = {
    url: 'https://www.ss.com',
    elements: {
        volvo:  by.id('ahc_167')
    },
    /**
     * enters a search term into Google's search box and presses enter
     * @param {string} searchQuery
     * @returns {Promise} a promise to enter the search values
     */
    selectVolvo: function () {
         var selector = page.ssCars.elements.volvo;
        //  return a promise so the calling function knows the task has completed
         return driver.findElement(selector).click();
    }
};