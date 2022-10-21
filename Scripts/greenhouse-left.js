let banner = document.getElementById('home_banner')
    banner.animate([
        {opacity: 0, color: '#000'},
        {opacity: 1, color: '#08b'}
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

let imagleft = document.getElementById('imag-left');
if(window.innerWidth < 580) 
{
    
    let iwidth = 370;
    let iheight = imagleft.clientHeight;
   
    parsley.style.height = (iwidth/7) + 'px';
    parsley.style.top = (iheight/1.5) + 'px';
    parsley.style.width = (iwidth/7) + 'px';
    parsley.style.left = -(iwidth/1.2) +'px';

    rocket.style.height = (iwidth/7) + 'px';
    rocket.style.top = (iheight/1.25) + 'px';
    rocket.style.width = (iwidth/7) + 'px';
    rocket.style.left = -(iwidth/2.9) +'px';

    

    } else {


parsley.style.top = (bedheight/1.5) + 'px';
parsley.style.left = -(bedwidth/11) +'px';

rocket.style.top = (bedheight/1.2) + 'px';
rocket.style.left = (bedwidth/6) +'px';

function wresize() 
{
    let bedheight = beds.clientHeight;
    let bedwidth = beds.clientWidth;


    parsley.style.top = (bedheight/1.5) + 'px';
    parsley.style.left = -(bedwidth/11) +'px';

    rocket.style.top = (bedheight/1.2) + 'px';
    rocket.style.left = -(bedwidth/6) +'px';
}

window.onresize = wresize;


}

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