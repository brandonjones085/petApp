module.exports = {
    ensureAuthenticated: function(req,res,next){
        if(req.isAuthenticated()){
            return next(); 
        }
        res.redirect('/')
    }, 
    ensure: function(req,res,next){
        if(req.isAuthenticated()){
            res.redirect('/main')
        }
        else{
            return next(); 
        }
    }, 

}