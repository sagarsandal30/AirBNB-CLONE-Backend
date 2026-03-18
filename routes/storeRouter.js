//core module
const path=require('path');
//external module
const express=require('express');


const{postFavourite,getFavourite,getHome,getBooking,  getHomes,getIndex, getHomeDetails}=require('../Controllers/storeController')

// const{postFavourite,getFavourite}=require('../Controllers/FavouriteController')


const storeRouter=express.Router();

storeRouter.get('/',getIndex);
storeRouter.get("/homes",getHomes)
storeRouter.get("/booking",getBooking);
storeRouter.get("/favourite",getFavourite);
storeRouter.post("/favourite",postFavourite);
storeRouter.get("/homes/:homeId",getHomeDetails);


module.exports=storeRouter;