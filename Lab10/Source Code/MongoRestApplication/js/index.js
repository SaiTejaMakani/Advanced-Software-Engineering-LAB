/**
 * Created by user on 23/10/2016.
 */
var myapp = angular.module('demoMongo',[]);
myapp.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});
myapp.controller('MongoRestController',function($scope,$http,$location){
    $scope.insertData = function(){
        console.log($scope.formData.lname);
        console.log($scope.formData.fname);
        console.log($scope.formData.email);
        console.log($scope.formData.password);
        console.log($scope.formData.cpassword);
        var dataParams = {
            'fname' : $scope.fname,
            'lname' : $scope.lname,
            'email' : $scope.email,
            'pw' : $scope.pw
        };
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var req = $http.post('http://127.0.0.1:8081/register',$scope.formData);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
            alert("saiteja@gmail.com" + " " +"Registered Successfully.");
            window.location = "/Tutorial%2010%20-%20Node%20JS%20&%20Mongo%20DB/MongoRestApplication/Main.html";
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };

    $scope.updateData = function(){

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        window.location = "/Tutorial%2010%20-%20Node%20JS%20&%20Mongo%20DB/MongoRestApplication/update.html";
        var req = $http.post('http://127.0.0.1:8081/update',$scope.formData);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);

        });
        req.error(function(data, status, headers, config) {
            //alert( "failure message: " + JSON.stringify({data: data}));
        });
    };

    $scope.deleteData = function(){

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var req = $http.post('http://127.0.0.1:8081/delete',$scope.formData);
        alert("Deleted user: Saiteja@gmail.com");
        window.location = "/Tutorial%2010%20-%20Node%20JS%20&%20Mongo%20DB/MongoRestApplication/index.html";
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);

        });
        req.error(function(data, status, headers, config) {
            //alert( "failure message: " + JSON.stringify({data: data}));
        });
    };

    $scope.readData = function(){

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var req = $http.post('http://127.0.0.1:8081/read',$scope.formData);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
           // alert( "failure message: " + JSON.stringify({data: data}));
        });
    };

    $scope.updata = function(){

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        alert("updated data successfully.");
        window.location = "/Tutorial%2010%20-%20Node%20JS%20&%20Mongo%20DB/MongoRestApplication/index.html"
        var req = $http.post('http://127.0.0.1:8081/read',$scope.formData);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
           // alert( "failure message: " + JSON.stringify({data: data}));
        });
    };
});