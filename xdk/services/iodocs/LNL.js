(function(credentials) {
    var exports = {};
        /* Data Feeds Function */
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
     
    exports.modelparameters = function(params) {
        params[''] = credentials.txtEmail;
        params[''] = credentials.txtPassword;
        params[''] = credentials.p1;
        var url = "http://www.ayatar.com/ayanet_service.php?SERV=modelparameters"+ "&" + $.param(params);
        return $.ajax({url: url, type: 'GET'}); 
    };
    
    exports.datatimestamp = function(params) {
        params[''] = credentials.txtEmail;
        params[''] = credentials.txtPassword;
        params[''] = credentials.p1;
        var url = "http://www.ayatar.com/ayanet_service.php?SERV=data/timestamp"+ "&" + $.param(params);
        return $.ajax({url: url, type: 'GET'}); 
    };
    
  return exports;
})
