
module.exports = {
    url: 'https://www.ss.com',
    elements: {
        firstElement:  by.xpath('//*[@id="filter_frm"]/table/*/tr[2]'),
        memoLink:  by.xpath('//*[@id="mnu_fav_id"]')
    },
    selectFirstMemo: function () {
         var firstE = page.ssMemoList.elements.firstElement;
        //  return a promise so the calling function knows the task has completed
         return driver.findElement(firstE).click();
    },

};