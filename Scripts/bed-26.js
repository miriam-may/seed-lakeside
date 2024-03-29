let banner = document.getElementById('home_banner')
    banner.animate([
        {opacity: 0, color: '#000'},
        {opacity: 1, color: 'rgb(187, 168, 0)'}
    ], {
        duration: 2000,
        iterations: 1
    })

let rainbow = document.getElementById('rainbow-chard');
let rainbow_text = document.getElementById('rainbow_text');
let lettuce = document.getElementById('lettuce');
let lettuce_text = document.getElementById('lettuce_text');
let beds = document.getElementById('twentysix')

function revealRainbow(){
    if(lettuce_text.style.display="block"){
        lettuce_text.style.display="none";
    }

    rainbow_text.style.display="block";
    rainbow_text.style.position="relative";
    rainbow_text.scrollIntoView({behavior: 'smooth'});
    rainbow_text.animate([
        {opacity: 0, color: '#000000'},
        {opacity: 1, color: '#000000'}
    ],
    {duration: 2000,
    iterations: 1})

}

function revealLettuce(){
    if(rainbow_text.style.display="block"){
        rainbow_text.style.display="none";
    }

    lettuce_text.style.display="block";
    lettuce_text.style.position="relative";
    lettuce_text.scrollIntoView({behavior: 'smooth'});
    lettuce_text.animate([
        {opacity: 0, color: '#000000'},
        {opacity: 1, color: '#000000'}
    ],
    {duration: 2000,
    iterations: 1})

}


rainbow.onclick = revealRainbow, true;
lettuce.onclick = revealLettuce, true;

