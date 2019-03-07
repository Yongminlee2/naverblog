
var url = [ 'http://blog.naver.com/dydals56789',
            'https://blog.naver.com/dydals56789/221478480949',
            'https://blog.naver.com/dydals56789/221462441566',
            'https://blog.naver.com/dydals56789/221452672104',
            'https://blog.naver.com/dydals56789/221450584432',
          ];

function abcd(data){  
    for(var i=1; i<data.length;i++){
        var new_popup1 = function() {
            console.log('들어옴');
            return window.open(data[i], 'newWindow2');
        };
        var popup1close = function() {
            console.log('들어옴2');
            new_popup1().close();
        };
        setTimeout(function() {new_popup1()} , 1000*(i+1));
        // setTimeout(function() {popup1close()} , 3000*(i+1));
    }
}

abcd(url);





// function abcd(){
    
//     var new_popup1 = window.open('http://blog.naver.com/dydals56789', 'newWindow');
//     var popup1close = new_popup1.close();
//     var new_popup2 = window.open('https://blog.naver.com/dydals56789/221478480949', 'newWindow');
//     var popup2close = new_popup2.close();
//     var new_popup3 = window.open('https://blog.naver.com/dydals56789/221462441566', 'newWindow');
//     var popup3close = new_popup3.close();
//     var new_popup4 = window.open('https://blog.naver.com/dydals56789/221452672104');
//     var popup4close = new_popup4.close();
//     var new_popup5 = window.open('https://blog.naver.com/dydals56789/221450584432', 'newWindow');
//     var popup5close = new_popup5.close();


//     setTimeout(function() {new_popup1}, 3000);

// }
// function new_popup1() = window.open('http://blog.naver.com/dydals56789', 'newWindow');
// var popup1close = new_popup1.close();

// setTimeout(function() {new_popup1 , 3000});
// setTimeout(function() {popup1close, 3000});