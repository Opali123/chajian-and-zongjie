function HelloAngular($scope) {
    $scope.greeting = {
        text: 'Hello'
    };
    $scope.text1 =function() {
        alert('text1');
    }
}
function arr($scope){
    $scope.name=['刘福松','苏望','世鹏']
}
function suoyin($scope){
    $scope.index = 10
    $scope.on = function(){
        $scope.index++
    }
    $scope.bot = function(){
        $scope.index--
    }
}
function names($scope){
    $scope.firstname = '12';
    $scope.lastname= '34';
    $scope.fullname= function(){
        return $scope.firstname+$scope.lastname;
    }
}
function jsq($scope){
    $scope.price = '12';
    $scope.num= '34';
    $scope.zj= function(){
        return $scope.price*$scope.num;
    }
}
function customersCtrl($scope,$http){
    $scope.sss = function(){
        $http.post('http://ekang.ren/index.php/wish/index').success(function(response){
            $scope.data = response.data
            console.log($scope.data)
        });
    }
}