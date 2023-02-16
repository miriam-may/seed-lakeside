let banner = document.getElementById('home_banner')
    banner.animate([
        {opacity: 0, color: '#000'},
        {opacity: 1, color: 'rgb(187, 168, 0)'}
    ], {
        duration: 2000,
        iterations: 1
    })

let capsicum = document.getElementById('capsicum');
let capsicum_text = document.getElementById('capsicum-text');

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