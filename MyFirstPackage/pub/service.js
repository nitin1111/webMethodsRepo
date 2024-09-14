app.service('myserv', function() {
          this.getServiceList = function () {
    return [];
}
this.getISEndpoint = function() { 
 return 'http://IBM-PW0AS882:5555/';
}
this.getAPIList = function() { 
 return [];
}
this.getCreatedTime = function() { 
 return "14-09-2024 18:45:51 IST";
}
this.getPackageInfo = function(){
 return{"packageName":"MyFirstPackage","createdDate":"14-09-2024 18:31:03 IST","version":"1.0"};
}
});
