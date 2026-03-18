const db = require("../utils/databaseUtil");

module.exports = class Home {
    constructor(homeName, price, location, rating, homeImage, description) {
        this.homeName = homeName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.homeImage = homeImage;
        this.description = description;
      
    }

    save() {
    

        return db.execute(
            'INSERT INTO homes (homeName, price, location, rating, homeImage, description) VALUES (?, ?, ?, ?, ?, ?)',
            [this.homeName, this.price, this.location, this.rating, this.homeImage, this.description]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM homes');
    }

    static findById(homeId) {
       
    }
}