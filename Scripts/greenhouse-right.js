let banner = document.getElementById('home_banner')
    banner.animate([
        {opacity: 0, color: '#000'},
        {opacity: 1, color: '#08b'}
    ], {
        duration: 2000,
        iterations: 1
    })

let capsicum = document.getElementById('capsicum');
let capsicum_text = document.getElementById('capsicum-text');

let beds = document.getElementById('right');

let bedheight = beds.clientHeight;
let bedwidth = beds.clientWidth;

let imagleft = document.getElementById('imag-left');
if(window.innerWidth < 580) 
{
    
    let iwidth = 370;
    let iheight = imagleft.clientHeight;
   
    capsicum.style.height = (iwidth/7) + 'px';
    capsicum.style.top = (iheight/1.7) + 'px';
    capsicum.style.width = (iwidth/7) + 'px';
    capsicum.style.left = -(iwidth/1.2) +'px';

     

    } else {


capsicum.style.top = (bedheight/1.7) + 'px';
capsicum.style.left = -(bedwidth/11) +'px';


function wresize() 
{
    let bedheight = beds.clientHeight;
    let bedwidth = beds.clientWidth;


    capsicum.style.top = (bedheight/1.5) + 'px';
    capsicum.style.left = -(bedwidth/11) +'px';

    
}

window.onresize = wresize;

}

function revealcapsicum()
{

    capsicum_text.style.display="block";
    capsicum_text.style.position="relative";
    capsicum_text.scrollIntoView({behavior: 'smooth'});
    capsicum_text.animate([
        {opacity: 0, color: '#000000'},
        {opacity: 1, color: '#000000'}
    ],
    {duration: 2000,
    iterations: 1})
}


capsicum.onclick = revealcapsicum, true;