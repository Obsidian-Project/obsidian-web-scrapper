const chai = require('chai');
const expect = chai.expect;
const Scrapper = require('../utils/scrapper');


describe("Scrapper", () => {   

    it('should return plant equipment links of equipments', (done) => {
        let scrapper = new Scrapper();
        scrapper.getPlantingEquipmentLinks().then(function (res) {           
            expect(res.length).to.equal(39);            
            done();
        });
    });
    
    it('should return tractor links of equipments', (done) => {
        let scrapper = new Scrapper();
        scrapper.getTractorsLinks().then(function (res) {         
            expect(res.length).to.equal(24);            
            done();
        });
    });
    it('should return equipment detail from a link', (done) => {
        let scrapper = new Scrapper();
        let urlTest = "https://www.deere.com/en/tractors/4wd-track-tractors/9470rt-tractor/";
        scrapper.getEquipmentDetail(urlTest).then(function (res) {
            expect(res).to.include.all.keys('category', 'model', 'details', 'images');            
            done();
        });
    });
});

