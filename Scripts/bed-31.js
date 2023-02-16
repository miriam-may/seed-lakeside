let banner = document.getElementById('home_banner')
    banner.animate([
        {opacity: 0, color: '#000'},
        {opacity: 1, color: 'rgb(187, 168, 0)'}
    ], {
        duration: 2000,
        iterations: 1
    })


let spring_onion = document.getElementById('spring_onion');
let spring_onion_text = document.getElementById('spring_onion_text');
let silverbeet = document.getElementById('silverbeet');
let silverbeet_text = document.getElementById('silverbeet_text');
let beetroot = document.getElementById('beetroot');
let beetroot_text = document.getElementById('beetroot_text');

let beds = document.getElementById('thirtyone')


function revealBuild(){
        if(silverbeet_text.style.display = "block"){
            silverbeet_text.style.display = "none";
        };
        if(beetroot_text.style.display='block'){
            beetroot_text.style.display='none'
        };
       
        spring_onion_text.style.display="block";
        spring_onion_text.style.position="relative";
        spring_onion_text.scrollIntoView({behavior: 'smooth'});

        spring_onion_text.animate([
            {opacity: 0, color:'#000000'},
            {opacity: 1, color: '#000000'}
        ],{
            duration: 2000,
            iterations: 1
        });
      

}

function revealMain(){
    if(spring_onion_text.style.display = "block"){
        spring_onion_text.style.display = "none";
    };
    if(beetroot_text.style.display='block'){
        beetroot_text.style.display='none'
    };
  
    silverbeet_text.style.display="block";
    silverbeet_text.style.position="relative";
    silverbeet_text.scrollIntoView({behavior: 'smooth'});

    silverbeet_text.animate([
        {opacity: 0, color:'#000000'},
        {opacity: 1, color: '#000000'}
    ],{
        duration: 2000,
        iterations: 1
    });

}

function revealFront(){
    if(spring_onion_text.style.display = "block"){
        spring_onion_text.style.display = "none";
    };
    if(silverbeet_text.style.display = "block"){
        silverbeet_text.style.display = "none";
    };
  
    beetroot_text.style.display="block";
    beetroot_text.style.position="relative";
    beetroot_text.scrollIntoView({behavior: 'smooth'});
    beetroot_text.animate([
        {opacity: 0, color:'#000000'},
        {opacity: 1, color: '#000000'}
    ],{
        duration: 2000,
        iterations: 1
    });



}



spring_onion.onclick = revealBuild, true;
silverbeet.onclick =  revealMain, true;
beetroot.onclick = revealFront, true;
