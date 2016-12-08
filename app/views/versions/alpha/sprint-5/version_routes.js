var qs = require('qs');
var url = require('url');
var _ = require('lodash');
var sitemap = require(__dirname + '/version_nav');

module.exports = function(router, config) {
  
  router.all(config.routes.step, function(req,res, next){
    
    var requestedPage = req.params.step,
    postData = req.body || {};
    
    // create a deep object of the setting the current prototype's nav data
    _.set(res.locals, 'prototype.current.sitemap', sitemap);

    switch(requestedPage) {
      
      // change requested page name to the page that was requested
      case 'conduct-interview-1': 
        
        // do some logic stuff here and then typically return a render or redirect
      
        if(postData['interview'] == 'office') {
          res.redirect('conduct-interview-1a');
        }
        if(postData['ni'] == 'office') {
          res.redirect('PG515593');
        }
        if(postData['dob-day'] == '25') {
          res.redirect('conduct-interview-1a');
        }
        if(postData['dob-month'] == '3') {
          res.redirect('conduct-interview-1a');
        }
        if(postData['dob-year'] == '1974') {
          res.redirect('conduct-interview-1a');
        }
        
      break;


      case 'conduct-interview-fail': 
      
        if(postData['paid-into'] == 'HSBC') {
          res.redirect('conduct-interview-pass');
        }
        
      break;

      case 'conduct-interview-pass': 
      
        if(postData['radio'] == 'none') {
          res.redirect('conduct-interview-fail');
        }
        
      break;


      case 'case-view': 
      
        if(postData['radio'] == 'refer-dm') {
          res.redirect('decision-form-a');
        }
         if(postData['radio'] == 'close') {
          res.redirect('reject');
        }
         if(postData['radio'] == 'book') {
          res.redirect('book-interview');
        }
         if(postData['radio'] == 're-route') {
          res.redirect('reroute');
        }
         if(postData['radio'] == 'case-view') {
          res.redirect('case-view');
        }
       
        
      break;




      
    }
    
    next();
  
  });

  return router;
}
