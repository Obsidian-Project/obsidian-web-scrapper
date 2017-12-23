const chai = require('chai');
const expect = chai.expect;
const Scrapper = require('../utils/scrapper');


describe("Scrapper", () => {   
    

    // it('should return plant equipment links of equipments', (done) => {
    //     let scrapper = new Scrapper();       
    //     scrapper.getPlantingEquipmentLinks().then(function (res) {           
    //         expect(res.length).to.equal(39);            
    //         done();
    //     });
    // });
    
    // it('should return tractor links of equipments', (done) => {
    //     let scrapper = new Scrapper();
    //     scrapper.getTractorsLinks().then(function (res) {         
    //         expect(res.length).to.equal(24);            
    //         done();
    //     });
    // });
    // it('should return equipment detail from a hardcoded link', (done) => {
    //     let scrapper = new Scrapper();
    //     let urlTest = "https://www.deere.com/en/tractors/4wd-track-tractors/9470rt-tractor/";
    //     scrapper.getEquipmentDetail(urlTest).then(function (res) {
    //         expect(res).to.include.all.keys('category', 'model', 'details', 'images');            
    //         done();
    //     });
    // });

    // it('should return all tractors details', (done) => {
    //     let scrapper = new Scrapper();
    //     scrapper.getTractorDetails().then(function (res) {   
    //         expect(res.length).to.equal(24);
    //         done();
    //     });
    // });

    // it('should return all planting equipment details', (done) => {        
    //     let scrapper = new Scrapper();      
    //     scrapper.getPlantingEquipmentDetails().then(function (res) {     
    //         expect(res.length).to.equal(39);
    //         done();
    //     });
    // });

    it('should return all data details', (done) => {        
        let scrapper = new Scrapper();      
        scrapper.getAllData().then(function (res) {     
            expect(res.length).to.equal(39+24);
            done();
        });
    });
});

