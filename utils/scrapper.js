const cheerio = require('cheerio');
const request = require('request');
const mongoose = require('mongoose');

const JOHN_DEERE_TRACTORS_URL = "https://www.deere.com/en/tractors/4wd-track-tractors/";
const JOHN_DEERE_BASE_URL = "https://www.deere.com";
const JOHN_DEERE_PLANT_EQUIPMENT_BASE_URL =  "https://www.deere.com/en/planting-equipment/";

class Scrapper{   
    getEquipmentLinks(url) {
        return new Promise((resolve, reject) => {
            let equipmentLinks = [];            
            request(url, (error, response, html) => {
                if (error)
                    reject(error);
                if (response.statusCode == 200) {                    
                    let $ = cheerio.load(html);
                    $(".container .table-comp table tbody tr th.first a").each(function(item){ 
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

    getEquipmentDetail(url){
        return new Promise((resolve, reject) => {
            let equipmentDetail = {};                        
            request(url, (error, response, html) => {
                if (error)
                    reject(error);
                if (response.statusCode == 200) {                    
                    let $ = cheerio.load(html);
                    
                    let model = $(".product-summary-comp .model").text();
                    let category = $(".product-summary-comp .category").text();
                    let details = [];
                    $(".product-summary-comp .details li").each(function(item){ 
                        let detailItem = $(this).text();
                        details.push(detailItem);
                    });
                    
                    let images = [];//3 (min-width: 992px), (min-width: 768px), (min-width: 320px)
                    $(".product-summary-comp .image source").each(function(item){ 
                        let imageItem = $(this).attr("srcset");
                        let fullImageItemUrl = `${JOHN_DEERE_BASE_URL}${imageItem}`; 
                        images.push(fullImageItemUrl);//form image
                    });
                    
                    equipmentDetail.model = model;
                    equipmentDetail.category = category;
                    equipmentDetail.details = details;
                    equipmentDetail.images = images;                    
                    console.log(equipmentDetail);                   
                    resolve(equipmentDetail);
                }
            });
        });
    }

    getPlantingEquipmentLinks(){        
        return new Promise((resolve, reject) => {
            return this.getEquipmentLinks(JOHN_DEERE_PLANT_EQUIPMENT_BASE_URL).then((links) => {
                resolve(links);
            })
        });
    }

    getTractorsLinks(){
        return new Promise((resolve, reject) => {
            return this.getEquipmentLinks(JOHN_DEERE_TRACTORS_URL).then((links) => {
                resolve(links);
            })
        });
    }
}

module.exports = Scrapper;

//