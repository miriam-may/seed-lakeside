window.onload = function(){
    let banner = document.getElementById('home_banner')
    banner.animate([
        {opacity: 0, color: '#000'},
        {opacity: 1, color: '#08b'}
    ], {
        duration: 2000,
        iterations: 1
    })
let firstP = document.getElementById('t1')
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

let bedheight = beds.clientHeight;
let bedwidth = beds.clientWidth;

x = 15
y = 11.5

//approx ratio of 15(w) to 11.5(h)
x_a = bedwidth/x; //the amount of x's in width
y_a = bedheight/y; //the amount of y's in height


building.style.height = (bedheight/10) + 'px';
building.style.top = (y_a * (3.7)) + 'px';
building.style.width = (bedwidth/20) + 'px';
building.style.left = -(bedwidth/9.3) +'px';

maintenence.style.height = (bedheight/10) + 'px';
maintenence.style.top = (bedheight/2.2) + 'px';
maintenence.style.width = (bedwidth/20) + 'px';
maintenence.style.left = (bedwidth/30) +'px';

frontend.style.height = (bedheight/10) + 'px';
frontend.style.top = (bedheight/4.8) + 'px';
frontend.style.width = (bedwidth/20) + 'px';
frontend.style.left = (bedwidth/10.9) +'px';





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

