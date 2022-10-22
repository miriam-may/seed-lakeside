let banner = document.getElementById('home_banner')
    banner.animate([
        {opacity: 0, color: '#000'},
        {opacity: 1, color: '#08b'}
    ], {
        duration: 2000,
        iterations: 1
    })

let greenhouse = document.getElementById('greenhouse')
let back = document.getElementById('greenhouseback')
let right = document.getElementById('greenhouseright')
let left = document.getElementById('greenhouseleft')
let imagleft = document.getElementById('green-imag')

if(window.innerWidth < 580) 
{
    
    let iwidth = 580;
    let iheight = imagleft.clientHeight;
   
    back.style.height = (iwidth/20) + 'px';
    back.style.top = (iheight/2.2) + 'px';
    back.style.width = (iwidth/2) + 'px';
    back.style.left = -(iwidth/2.8) +'px';

    right.style.height = (iwidth/20) + 'px';
    right.style.top = (iheight/2.3) + 'px';
    right.style.width = (iwidth/2) + 'px';
    right.style.left = -(iwidth/4.2) +'px';

    left.style.height = (iwidth/20) + 'px';
    left.style.top = (iheight/2) + 'px';
    left.style.width = (iwidth/2) + 'px';
    left.style.left = -(iwidth/1.6) +'px';



    } else {

        let bedheight = greenhouse.clientHeight;
let bedwidth = greenhouse.clientWidth;
x = 10
y = 16

//approx ratio of 15(w) to 11.5(h)
x_a = bedwidth/x; //the amount of x's in width
y_a = bedheight/y; //the amount of y's in height


back.style.height = (bedheight/10) + 'px';
back.style.top = (y_a *(6.5)) + 'px';
back.style.width = (bedwidth/20) + 'px';
back.style.left = (x_a *(.02)) +'%';

right.style.height = (bedheight/10) + 'px';
right.style.top = (y_a *(7.2)) + 'px';
right.style.width = (bedwidth/20) + 'px';
right.style.left = (x_a *(0.9)) +'px';

left.style.height = (bedheight/10) + 'px';
left.style.top = (y_a *(7.4)) + 'px';
left.style.width = (bedwidth/20) + 'px';
left.style.left = -(x_a *(1.3)) +'px';

function wresize(){
    let bedheight = greenhouse.clientHeight;
    let bedwidth = greenhouse.clientWidth;
    x = 10
    y = 16
    
    //approx ratio of 15(w) to 11.5(h)
    x_a = bedwidth/x; //the amount of x's in width
    y_a = bedheight/y; //the amount of y's in height
    
    back.style.height = (bedheight/10) + 'px';
    back.style.top = (y_a *(4.5)) + 'px';
    back.style.width = (bedwidth/20) + 'px';
    back.style.left = -(x_a *(.02)) +'%';

    right.style.height = (bedheight/10) + 'px';
    right.style.top = (y_a *(5.2)) + 'px';
    right.style.width = (bedwidth/20) + 'px';
    right.style.left = (x_a *(2.1)) +'px';

    left.style.height = (bedheight/10) + 'px';
    left.style.top = (y_a *(5.2)) + 'px';
    left.style.width = (bedwidth/20) + 'px';
    left.style.left = -(x_a *(2.1)) +'px';

}

window.onresize = wresize;
    }

