var express = require('express');
var router = express.Router(); 
var AdminController    =  require('../controllers/admin/AdminController');   
var UsersController    =  require('../controllers/admin/UsersController');   

/** Routes for admin  */     
//router.get('/login', AdminController.login);     
router.post('/admin/login', AdminController.login);     
router.get('/admin/login', AdminController.login);     
router.get('/admin/Dashboard', requiredAuthentication, AdminController.dashboard);  
router.get('/admin/logout', AdminController.logout);         

/** Routes for users module  */ 
router.get('/admin/Users/list',requiredAuthentication,  UsersController.list);     
router.get('/admin/Users/edit/:id', requiredAuthentication, UsersController.edit);     
router.post('/admin/Users/edit/:id',requiredAuthentication,  UsersController.edit); 
router.post('/admin/Users/add',requiredAuthentication, UsersController.add); 
router.get('/admin/Users/add', requiredAuthentication, UsersController.add); 
router.get('/admin/Users/delete/:id', requiredAuthentication, UsersController.deleteRecord);


module.exports = router;        
 

function requiredAuthentication(req, res, next) { 
    if(req.session){
        LoginUser = req.session.LoginUser; 
        if(LoginUser){    
            next();   
        }else{
            res.redirect(nodeAdminUrl+'/login');       
        } 
    }else{
        res.redirect(nodeAdminUrl+'/login');       
    }
}