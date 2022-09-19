let banner = document.getElementById('home_banner')
    banner.animate([
        {opacity: 0, color: '#000'},
        {opacity: 1, color: '#08b'}
    ], {
        duration: 2000,
        iterations: 1
    })

let celery = document.getElementById('celeryid');
let celery_text = document.getElementById('celery_text');
let beds = document.getElementById('twentynine');

let bedheight = beds.clientHeight;
let bedwidth = beds.clientWidth;

let imag29 = document.getElementById('imag-29');
if(window.innerWidth < 580) {
    
    let iwidth = 370;
    let iheight = imag29.clientHeight;
   
    celery.style.height = (iwidth/7) + 'px';
    celery.style.top = (iheight/3) + 'px';
    celery.style.width = (iwidth/7) + 'px';
    celery.style.left = -(iwidth/1.9) +'px';

    

    } else {


celery.style.top = (bedheight/10) + 'px';

celery.style.left = -(bedwidth/100) +'px';

function wresize() {
    let bedheight = beds.clientHeight;
    let bedwidth = beds.clientWidth;


    celery.style.top = (bedheight/10) + 'px';

    celery.style.left = -(bedwidth/100) +'px';
}

window.onresize = wresize;


}

function revealCelery(){
    celery_text.style.display="block";
    celery_text.style.position="relative";
    celery_text.scrollIntoView({behavior: 'smooth'});
    celery_text.animate([
        {opacity: 0, color: '#000000'},
        {opacity: 1, color: '#000000'}
    ],
    {duration: 2000,
    iterations: 1})
}

celery.onclick = revealCelery, true;


