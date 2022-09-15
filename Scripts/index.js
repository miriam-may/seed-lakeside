window.onload = function(){
    let banner = document.getElementById('home_banner')
    banner.animate([
        {opacity: 0, color: '#000'},
        {opacity: 1, color: '#08b'}
    ], {
        duration: 1500,
        iterations: 1
    })
}

let firstP = document.getElementById('t1')
let secondP = document.getElementById('t2')
var fired=0

function scrollFunction(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 && fired < 1){
        firstP.animate([
            {opacity: 0, color:'#000000'},
            {opacity: 1, color: '#000000'}
        ],{
        duration: 1700,
        iterations: 1
        })

        firstP.style.display="block"

        fired=1
    
    }
if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 200 && fired < 3){
        secondP.animate([
            {opacity: 0, color:'#000000'},
            {opacity: 1, color: '#000000'}
        ],{
        duration: 1700,
        iterations: 1
        })

        secondP.style.display="block"

        fired+=2
}
}

window.onscroll = function(){ scrollFunction(); }

let building = document.getElementById('building');
let buildingtext = document.getElementById('building_text');
let maintenence = document.getElementById('maintenence');
let maintext = document.getElementById('main_text');
let frontend = document.getElementById('front_end');
let fronttext = document.getElementById('front_text');
let backend = document.getElementById('back_end');
let backtext = document.getElementById('back_text');

function revealBuild(){
        if(maintext.style.display = "block"){
            maintext.style.display = "none";
        };
        if(fronttext.style.display='block'){
            fronttext.style.display='none'
        };
        if(backtext.style.display='block'){
            backtext.style.display='none'
        };
        buildingtext.style.display="block";
        buildingtext.style.position="relative";
        buildingtext.scrollIntoView({behavior: 'smooth'});

        buildingtext.animate([
            {opacity: 0, color:'#000000'},
            {opacity: 1, color: '#000000'}
        ],{
            duration: 2000,
            iterations: 1
        });
}

function revealMain(){
    if(buildingtext.style.display = "block"){
        buildingtext.style.display = "none";
    };
    if(fronttext.style.display='block'){
        fronttext.style.display='none'
    };
    if(backtext.style.display='block'){
        backtext.style.display='none'
    };
    maintext.style.display="block";
    maintext.style.position="relative";
    maintext.scrollIntoView({behavior: 'smooth'});

    maintext.animate([
        {opacity: 0, color:'#000000'},
        {opacity: 1, color: '#000000'}
    ],{
        duration: 2000,
        iterations: 1
    });
}

function revealFront(){
    if(buildingtext.style.display = "block"){
        buildingtext.style.display = "none";
    };
    if(maintext.style.display = "block"){
        maintext.style.display = "none";
    };
    if(backtext.style.display='block'){
        backtext.style.display='none'
    };
    fronttext.style.display="block";
    fronttext.style.position="relative";
    fronttext.scrollIntoView({behavior: 'smooth'});
    fronttext.animate([
        {opacity: 0, color:'#000000'},
        {opacity: 1, color: '#000000'}
    ],{
        duration: 2000,
        iterations: 1
    });
}

function revealBack(){
    if(buildingtext.style.display = "block"){
        buildingtext.style.display = "none";
    };
    if(maintext.style.display = "block"){
        maintext.style.display = "none";
    };
    if(fronttext.style.display='block'){
        fronttext.style.display='none'
    };
    backtext.style.display="block";
    backtext.style.position="relative";
    backtext.scrollIntoView({behavior: 'smooth'});
    backtext.animate([
        {opacity: 0, color:'#000000'},
        {opacity: 1, color: '#000000'}
    ],
       {duration: 2000,
       iterations: 1}
   );
}

building.onclick = revealBuild, true;
maintenence.onclick =  revealMain, true;
frontend.onclick = revealFront, true;
backend.onclick = revealBack, true;
        