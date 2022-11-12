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


