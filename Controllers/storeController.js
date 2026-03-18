const Favourite = require('../Models/favourite');
const Home=require('../Models/homes');

exports.getIndex=(req,res,next)=>{
    Home.fetchAll().then(([registeredHomes])=>{
    res.render("store/index",{ registeredHomes:registeredHomes ,PageTitle:'Airbnb Home',CurrentPage:"homePage"});
});
};

exports.getHomes=(req,res,next)=>{
 Home.fetchAll().then(([registeredHomes])=>{
    res.render("store/home-list",{ registeredHomes:registeredHomes ,PageTitle:'Home List Page',CurrentPage:"homeListPage"});
});
}

exports.getBooking=(req,res,next)=>{
      
    console.log(req.url,req.method);
    res.render("store/booking",{  PageTitle:'Booking Page',CurrentPage:"bookingPage"});

}

exports.getHomeDetails=(req,res,next)=>{
   const homeId=req.params.homeId;
    console.log("At home page",homeId);
    Home.findById(homeId,home=>{
        if(!home){
            res.redirect("/homes");
        }
        else{
     console.log("Home Details found",home);
        res.render("store/home-details",{ homes:home,PageTitle:"Home Details",CurrentPage:"Home"})
        }
    })
}
exports.getFavourite=(req,res,next)=>{
    Favourite.getFavourite(favourite=>{
    Home.fetchAll(registeredHomes=>{
        const favouriteHome= registeredHomes.filter(home=>favourite.includes(home.id));
    res.render("store/favourite",
           {favouriteHome:favouriteHome ,
            PageTitle:"Favourite Page",
            CurrentPage:"favouritePage"});
    })   
    })
   
   };

   exports.postFavourite=(req,res,next)=>{

    console.log("Came to Favourite Page",req.body);
   Favourite.addToFavourite(req.body.id,error=>{
    if(error){
        console.log("Error while marking favourite");
    }
    else{
       res.redirect("/favourite");
    }
   })
   
   
}