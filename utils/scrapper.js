const cheerio = require('cheerio');
const request = require('request');
const mongoose = require('mongoose');

const JOHN_DEERE_URL = "https://www.deere.com/en/tractors/4wd-track-tractors/";
const JOHN_DEERE_BASE_URL = "https://www.deere.com";
class Scrapper{
    getEquipmentLinks() {
        return new Promise((resolve, reject) => {
            let equipmentLinks = [];            
            request(JOHN_DEERE_URL, (error, response, html) => {
                if (error)
                    reject(error);
                if (response.statusCode == 200) {                    
                    let $ = cheerio.load(html);
                    let items = $(".container .table-comp table tbody tr th.first a").each(function(item){ 
                        let link = $(this).attr("href");
                        let fullLink = `${JOHN_DEERE_BASE_URL}${link}`; 
                        console.log(fullLink);
                        equipmentLinks.push(fullLink);
                    });
                    resolve(equipmentLinks);
                }
            });
        });
    }
}

module.exports = Scrapper;

//