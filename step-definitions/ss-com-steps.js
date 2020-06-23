const expect = require('chai').expect;
module.exports = function () {
        this.When(/^I add one ad to favorites$/, () =>{
            return helpers.loadPage('https://ss.com')
                .then( () => {
                    page.ssMain.selectLink();
                    page.ssCars.selectVolvo();
                    page.ssVolvoList.selectFirstAuto();
                    return page.ssVolvo.addToFavorites();
                })
        })
        this.Then(/^I should select ad added to memo section$/, function () {
            page.ssVolvo.openMemo();
            page.ssMemoList.selectFirstMemo();
        });
    this.When(/^I add multiple ads to favorites$/, () =>{
        return helpers.loadPage('https://ss.com')
            .then( () => {
                page.ssMain.selectLink();
                page.ssCars.selectVolvo();
                page.ssVolvoList.selectMultipleCars();
                return page.ssVolvoList.addToFavorites();
            })
    })
   this.Then(/^I should verify that ads are added to memo$/, function () {
    });


    this.When(/^I add ad to favorites using search$/, () =>{
        return helpers.loadPage('https://ss.com')
            .then( () => {
                page.ssMain.searchByName('Volvo');
                page.ssVolvoList.selectFirstCar();
                return page.ssVolvo.addToFavorites();
            })
    })
    this.Then(/^I should verify that ad is added to memo$/, function () {
        page.ssVolvo.openMemo();
        page.ssMemoList.selectFirstMemo();
    });
    this.When(/^I add one ad to favorites twice$/, () =>{
        return helpers.loadPage('https://ss.com',10000)
            .then( () => {
            page.ssMain.searchByName('Volvo');
            page.ssVolvoList.selectFirstCar();
            page.ssVolvo.addToFavorites();
            page.ssVolvo.navigateBackToCarList();
            page.ssVolvoList.selectFirstCar();
            page.ssVolvo.addToFavorites();
            })
    })
    this.Then(/^there should be only one ad in Memo section$/, function () {
        page.ssVolvo.openMemo();
        page.ssMemoList.selectFirstMemo();
    });
};
