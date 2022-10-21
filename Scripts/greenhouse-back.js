let banner = document.getElementById('home_banner')
    banner.animate([
        {opacity: 0, color: '#000'},
        {opacity: 1, color: '#08b'}
    ], {
        duration: 2000,
        iterations: 1
    })

let basil = document.getElementById('basil');
let basil_text = document.getElementById('basil-text');
let zucchini = document.getElementById('zucchini');
let zucchini_text = document.getElementById('zucchini-text');
let beds = document.getElementById('back');

let bedheight = beds.clientHeight;
let bedwidth = beds.clientWidth;

let imagleft = document.getElementById('imag-left');
if(window.innerWidth < 580) 
{
    
    let iwidth = 370;
    let iheight = imagleft.clientHeight;
   
    basil.style.height = (iwidth/7) + 'px';
    basil.style.top = (iheight/2.3) + 'px';
    basil.style.width = (iwidth/7) + 'px';
    basil.style.left = -(iwidth/1.2) +'px';

    zucchini.style.height = (iwidth/7) + 'px';
    zucchini.style.top = (iheight/2.25) + 'px';
    zucchini.style.width = (iwidth/7) + 'px';
    zucchini.style.left = -(iwidth/1.8) +'px';

    

    } else {


basil.style.top = (bedheight/2.3) + 'px';
basil.style.left = -(bedwidth/11) +'px';

zucchini.style.top = (bedheight/2.3) + 'px';
zucchini.style.left = (bedwidth/15) +'px';

function wresize() 
{
    let bedheight = beds.clientHeight;
    let bedwidth = beds.clientWidth;


    basil.style.top = (bedheight/1.5) + 'px';
    basil.style.left = -(bedwidth/11) +'px';

    zucchini.style.top = (bedheight/1.2) + 'px';
    zucchini.style.left = -(bedwidth/6) +'px';
}

window.onresize = wresize;


}

function revealbasil()
{
    if (zucchini_text.style.display='block')
    {
        zucchini_text.style.display='none'
    }

    basil_text.style.display="block";
    basil_text.style.position="relative";
    basil_text.scrollIntoView({behavior: 'smooth'});
    basil_text.animate([
        {opacity: 0, color: '#000000'},
        {opacity: 1, color: '#000000'}
    ],
    {duration: 2000,
    iterations: 1})
}

function revealzucchini()
{
    if (basil_text.style.display='block')
    {
        basil_text.style.display='none'
    }
    zucchini_text.style.display="block";
    zucchini_text.style.position="relative";
    zucchini_text.scrollIntoView({behavior: 'smooth'});
    zucchini_text.animate([
        {opacity: 0, color: '#000000'},
        {opacity: 1, color: '#000000'}
    ],
    {duration: 2000,
    iterations: 1})
}

basil.onclick = revealbasil, true;
zucchini.onclick = revealzucchini, true;