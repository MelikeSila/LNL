(function(credentials) {
    var exports = {};
  /* Data Feeds Function */
  exports.Virtual = function (params) {
    var url = "http://192.168.1.220:8080/ajaxHandler?page_id=14";
    return $.ajax({url: url, type: 'GET'});
  };
    
  exports.Scenes = function(params) {
    params[''] = credentials.txtEmail;
    params[''] = credentials.txtPassword;
    params[''] = credentials.p1;
    var url = "http://www.ayatar.com/ayanet_service.php?SERV=scenes"+ "&" + $.param(params);
    return $.ajax({url: url, type: 'GET'}); 
  };
    
  exports.onscenedevices = function(params) {
    params[''] = credentials.txtEmail;
    params[''] = credentials.txtPassword;
    params[''] = credentials.p1;
    var url = "http://www.ayatar.com/ayanet_service.php?SERV=onscenedevices"+ "&" + $.param(params);
    return $.ajax({url: url, type: 'GET'}); 
  };
    
  exports.sceneDevice = function(params) {
    params[''] = credentials.txtEmail;
    params[''] = credentials.txtPassword;
    params[''] = credentials.p1;
    var url = "http://www.ayatar.com/ayanet_service.php?SERV=sceneDevice"+ "&" + $.param(params);
    return $.ajax({url: url, type: 'GET'}); 
  };
    
  return exports;
})
