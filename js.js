let start =document.getElementById('start');
let moon =document.getElementById('moon');
let mountains3 =document.getElementById('mountains3');
let mountains4 =document.getElementById('mountains4');
let river5  =document.getElementById('river5');
let boat6  =document.getElementById('boat');
let mr7 =document.querySelector('.mr7');

window.onscroll =function(){
let value = scrollY;
start.style.left =value +'px';
moon.style.top =value *4 +'px';
mountains3.style.top =value *1.5 +'px';
mountains4.style.top =value *1.2 +'px';
river5.style.top =value  +'px';
boat.style.top =value  +'px';
boat.style.left =value *3 +'px';
mr7.style.fontSize =value  +'px';
if(scrollY >= 146.25){
mr7.style.fontSize = 146.25  +'px';
mr7.style.position ='fixed';
if(scrollY >= 453.75){
mr7.style.position ='fixed';
mr7.style.display ='none';

}else{
mr7.style.display ='biock';

}
if(scrollY  >= 127){
    document.querySelector('.min').style.background = 'linear-gradient(#276062, #10001f)'
}else{
    document.querySelector('.min').style.background = 'linear-gradient(#200016  , #10001f )'

}

}
}






