const chai = require('chai');
const expect = chai.expect;
const Scrapper = require('../utils/scrapper');


describe("Scrapper", () => {   

    it('should return 1', () => {
        let scrapper = new Scrapper();
        let result = scrapper.getNumber();
        expect(result).to.equal(1);
    });
   
    // it('should return links from main page', (done) => {
    //     let scrapper = new Scrapper();
    //     scrapper.getLinks().then(function (res) {
    //         expect(res.length).to.greaterThan(1);
    //         //TODO: Specify the asserts
    //         done();
    //     });
    // });
    
    // it('should return equipment detail from a link', (done) => {
    //     let scrapper = new Scrapper();
    //     scrapper.getDetail().then(function (res) {
    //         expect(res.length).to.greaterThan(1);
    //         //TODO: Specify the asserts
    //         done();
    //     });
    // });
});

