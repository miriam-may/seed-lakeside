window.onload = function(){
    let banner = document.getElementById('home_banner')
    banner.animate([
        {opacity: 0, color: '#000'},
        {opacity: 1, color: '#08b'}
    ], {
        duration: 2000,
        iterations: 1
    })
let paragraph_one = document.getElementById('text1')
let paragraph_two = document.getElementById('text2')

paragraph_one.animate([
    {opacity: 0, color:'#000000'},
    {opacity: 1, color: '#000000'}
],{
duration: 1700,
iterations: 1
})

paragraph_one.style.display="block"

paragraph_two.animate([
    {opacity: 0, color:'#000000'},
    {opacity: 1, color: '#000000'}
],{
duration: 2000,
iterations: 1
})

paragraph_two.style.display="block"


}


