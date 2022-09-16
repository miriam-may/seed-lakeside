let beds = document.getElementById('all_the_beds');
let bed31 = document.getElementById('bed31');
let bed29 = document.getElementById('bed29');
let bed26 = document.getElementById('bed26');

let bedheight = beds.clientHeight;
let bedwidth = beds.clientWidth;
//let bedpositiontop = beds.offsetTop;
//let bedpositionleft = beds.offsetLeft;

bed31.style.height = (bedheight/10) + 'px';
bed31.style.top = (bedheight/2.5) + 'px';
bed31.style.width = (bedwidth/20) + 'px';
bed31.style.left = -(bedwidth/1000) +'%';

bed29.style.height = (bedheight/10) + 'px';
bed29.style.top = (bedheight/2.2) + 'px';
bed29.style.width = (bedwidth/20) + 'px';
bed29.style.left = (bedwidth/7) +'px';

bed26.style.height = (bedheight/10) + 'px';
bed26.style.top = (bedheight/2.2) + 'px';
bed26.style.width = (bedwidth/20) + 'px';
bed26.style.left = -(bedwidth/5.9) +'px';