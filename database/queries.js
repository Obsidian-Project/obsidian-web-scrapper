const Equipments = require('../models/equipment');

module.exports = {

    cleanDatabase: function () {
        return new Promise((resolve, reject) => {
            Equipments.remove(function (error) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(true);
            });
        });
    },

    saveToDatabase: function (itemsToSave) {
        return new Promise((resolve, reject) => {
            Equipments.create(itemsToSave, function (error, docs) {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(docs);
            });
        });
    }
}