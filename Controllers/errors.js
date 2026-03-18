exports.pageNotFound=(req,res,next)=>{
    res.status(404).render("404",({PageTitle:"404 Error",CurrentPage:"ErrorPage"}));
}