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


