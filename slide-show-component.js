
myapp.component('slideShow', {
    templateUrl: 'slide-show-component.html',
    controller: 'SlideShowCtrl',
    bindings: {
        showTitle: '@',
        imageUrls: '<',
        onCompleted: '&'
    }
});

myapp.controller('SlideShowCtrl', function(){
    this.index = 0;
    this.nextImage = function() {
        if(this.index === this.imageUrls.length-1) {
            //this.index = 0;
            this.onCompleted();
        } else {
           this.index = this.index + 1;   
       }
    };
    this.prevImage = function() {
        if(this.index === 0) {
           //this.index =this.imageUrls.length-1
           //this.onCompleted();
        } else {
           this.index = this.index - 1;  
        }
    };
});