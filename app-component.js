var myapp = angular.module('myapp', []);

myapp.component('app', {
    templateUrl: 'app-component.html',
    controller: 'MyAppCtrl'        
});

myapp.controller('MyAppCtrl', function(){
    this.title = 'App Title';
    this.catSlideshowCompleted = false;
    this.dogSlideshowCompleted = false;
    this.showAlert = function() {
        alert('Alert Function');
    };
    this.showConsole = function() {
        console.log('Console Function');
    };
    this.dogsList = [
        'https://media.newyorker.com/photos/59e62efaa3920b73fc39302c/master/w_727,c_limit/Tolentino-A-Poe-and-a-Neuroscientist-Consider-How-Dogs-Think.jpg',
        'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Beagle-1.jpg',
        'https://static.boredpanda.com/blog/wp-content/uploads/2016/01/bear-dogs-310__605.jpg'
    ];
    this.catsList = [
        'https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
        'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
        'https://www.rd.com/wp-content/uploads/2016/02/06-train-cat-shake-hands.jpg'
    ];
    this.catSlideShowCompleted = function() {
        this.catSlideshowCompleted = true;
    };
    this.dogSlideShowCompleted = function() {
        this.dogSlideshowCompleted = true;
    }
});
