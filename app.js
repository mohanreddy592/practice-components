var myapp = angular.module('myapp', []);

myapp.component('app', {
    templateUrl: 'app-component.html',
    controller: 'MyAppCtrl'        
});

myapp.controller('MyAppCtrl', function(){
    this.title = 'App Title';
    this.showAlert = function() {
        alert('Alert Function');
    },
    this.showConsole = function() {
        console.log('Console Function');
    }
});

myapp.component('myButton', {
    templateUrl: 'button-component.html',
    controller: 'MyButtonCtrl',
    bindings: {
        buttonName: '@',
        onBtnClick: '&'
    }
});

myapp.controller('MyButtonCtrl', function(){
    this.title = 'Button Title';
    this.name = 'Dynamic Button Name';
    this.onClick = function() {
        console.log("calling onClick");
        this.onBtnClick();
    }
});