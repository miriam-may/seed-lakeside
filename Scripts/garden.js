let beds = document.getElementById('all_the_beds');
let bed31 = document.getElementById('bed31');
let bed29 = document.getElementById('bed29');
let bed26 = document.getElementById('bed26');

let bedheight = beds.clientHeight;
let bedwidth = beds.clientWidth;
x = 15
y = 11.5

//approx ratio of 15(w) to 11.5(h)
x_a = bedwidth/x; //the amount of x's in width
y_a = bedheight/y; //the amount of y's in height


bed31.style.height = (bedheight/10) + 'px';
bed31.style.top = (y_a *(4.5)) + 'px';
bed31.style.width = (bedwidth/20) + 'px';
bed31.style.left = -(x_a *(.02)) +'%';

bed29.style.height = (bedheight/10) + 'px';
bed29.style.top = (y_a *(5.2)) + 'px';
bed29.style.width = (bedwidth/20) + 'px';
bed29.style.left = (x_a *(2.1)) +'px';

bed26.style.height = (bedheight/10) + 'px';
bed26.style.top = (y_a *(5.2)) + 'px';
bed26.style.width = (bedwidth/20) + 'px';
bed26.style.left = -(x_a *(2.1)) +'px';


