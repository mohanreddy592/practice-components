
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