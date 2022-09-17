let rainbow = document.getElementById('rainbow-chard');
let rainbow_text = document.getElementById('rainbow_text');
let lettuce = document.getElementById('lettuce');
let lettuce_text = document.getElementById('lettuce_text');
let beds = document.getElementById('twentysix')

let bedheight = beds.clientHeight;
let bedwidth = beds.clientWidth;

rainbow.style.height = (bedheight/10) + 'px';
rainbow.style.top = (bedheight/2.5) + 'px';
rainbow.style.width = (bedwidth/20) + 'px';
rainbow.style.left = -(bedwidth/1000) +'px';

lettuce.style.height = (bedheight/10) + 'px';
lettuce.style.top = (bedheight/2.2) + 'px';
lettuce.style.width = (bedwidth/20) + 'px';
lettuce.style.left = (bedwidth/7) +'px';

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

