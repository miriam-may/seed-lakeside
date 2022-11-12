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