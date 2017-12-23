const chai = require('chai');
const expect = chai.expect;
const Scrapper = require('../utils/scrapper');


describe("Scrapper", () => {   

    it('should return links of equipments', (done) => {
        let scrapper = new Scrapper();
        scrapper.getEquipmentLinks().then(function (res) {
            expect(res.length).to.greaterThan(1);
            expect(res.length).to.equal(24);            
            done();
        });
    });
    
    // it('should return equipment detail from a link', (done) => {
    //     let scrapper = new Scrapper();
    //     scrapper.getDetail().then(function (res) {
    //         expect(res.length).to.greaterThan(1);
    //         //TODO: Specify the asserts
    //         done();
    //     });
    // });
});

