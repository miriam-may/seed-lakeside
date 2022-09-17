let celery = document.getElementById('celeryid');
let celery_text = document.getElementById('celery_text');

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

let beds = document.getElementById('twentynine');

let bedheight = beds.clientHeight;
let bedwidth = beds.clientWidth;

celery.style.height = (bedheight/10) + 'px';
celery.style.top = (bedheight/2.5) + 'px';
celery.style.width = (bedwidth/20) + 'px';
celery.style.left = -(bedwidth/100) +'px';