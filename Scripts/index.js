window.onload = function(){
    let banner = document.getElementById('home_banner')
    banner.animate([
        {opacity: 0, color: '#000'},
        {opacity: 1, color: '#08b'}
    ], {
        duration: 2000,
        iterations: 1
    })
let firstP = document.getElementById('text1')
let secondP = document.getElementById('t2')

firstP.animate([
    {opacity: 0, color:'#000000'},
    {opacity: 1, color: '#000000'}
],{
duration: 1700,
iterations: 1
})

firstP.style.display="block"

secondP.animate([
    {opacity: 0, color:'#000000'},
    {opacity: 1, color: '#000000'}
],{
duration: 2000,
iterations: 1
})

secondP.style.display="block"


}

let building = document.getElementById('building');
let buildingtext = document.getElementById('building_text');
let maintenence = document.getElementById('maintenence');
let maintext = document.getElementById('main_text');
let frontend = document.getElementById('front_end');
let fronttext = document.getElementById('front_text');

let beds = document.getElementById('thirtyone')


function revealBuild(){
        if(maintext.style.display = "block"){
            maintext.style.display = "none";
        };
        if(fronttext.style.display='block'){
            fronttext.style.display='none'
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



building.onclick = revealBuild, true;
maintenence.onclick =  revealMain, true;
frontend.onclick = revealFront, true;

