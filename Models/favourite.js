const fs=require('fs')
const path=require('path')
const Home=require('./homes');
const rootDir=require('../utils/pathUtil')

const filePath=path.join(rootDir,'Data','favourite.json');
        
const favourite=[];
class Favourite{


static addToFavourite(homeId,callback){
     Favourite.getFavourite( favourite =>{
          
          
             if(favourite.includes(homeId)){
                callback("Home is already marked favourite");
             }
             else{
   favourite.push(homeId);
             }
           // Asynchronous code.......................................
            fs.writeFile(filePath,
            JSON.stringify(favourite),callback) ;
         
            });

}

static getFavourite(callback){
fs.readFile(filePath,(error,data)=>{  
    callback(!error?JSON.parse(data):[]);  
      
})
}









}
module.exports=Favourite;