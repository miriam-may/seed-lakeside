let banner = document.getElementById('home_banner')
    banner.animate([
        {opacity: 0, color: '#000'},
        {opacity: 1, color: 'rgb(187, 168, 0)'}
    ], {
        duration: 2000,
        iterations: 1
    })

let parsley = document.getElementById('parsley');
let parsley_text = document.getElementById('parsley-text');
let rocket = document.getElementById('rocket');
let rocket_text = document.getElementById('rocket-text');
let beds = document.getElementById('left');

let bedheight = beds.clientHeight;
let bedwidth = beds.clientWidth;


function revealparsley()
{
    if (rocket_text.style.display='block')
    {
        rocket_text.style.display='none'
    }

    parsley_text.style.display="block";
    parsley_text.style.position="relative";
    parsley_text.scrollIntoView({behavior: 'smooth'});
    parsley_text.animate([
        {opacity: 0, color: '#000000'},
        {opacity: 1, color: '#000000'}
    ],
    {duration: 2000,
    iterations: 1})
}

function revealrocket()
{
    if (parsley_text.style.display='block')
    {
        parsley_text.style.display='none'
    }
    rocket_text.style.display="block";
    rocket_text.style.position="relative";
    rocket_text.scrollIntoView({behavior: 'smooth'});
    rocket_text.animate([
        {opacity: 0, color: '#000000'},
        {opacity: 1, color: '#000000'}
    ],
    {duration: 2000,
    iterations: 1})
}

parsley.onclick = revealparsley, true;
rocket.onclick = revealrocket, true;