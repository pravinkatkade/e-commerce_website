let menu = document.querySelector('#menu-bar');
 let login1 = document.querySelector('.login1');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  login1.classList.toggle('active');

 }
 window.onscroll = () =>{
  menu.classList.remove('fa-times');
    login1.classList.remove('active');
  
    if(window.scrollY > 60){
  document.querySelector('#scroll-top').classList.add('active');
    }else{
      document.querySelector('#scroll-top').classList.remove('active');
    }
  
   }
  

var mobile = document.querySelector(".navnextbox-mobile");
var tel = document.querySelector(".navnextbox-television");
var audio = document.querySelector(".navnextbox-audio");
var homeapp = document.querySelector(".navnextbox-homeapp");
var computers = document.querySelector(".navnextbox-computers");
var cameras = document.querySelector(".navnextbox-cameras");
var kitchenapp = document.querySelector(".navnextbox-kitchenapp");
var personalcare = document.querySelector(".navnextbox-personalcare");
var accessories = document.querySelector(".navnextbox-accessories");


function showmobile(){
    mobile.style.scale=1;
}
function hidemobile(){
    mobile.style.scale=0;
}

function showtelevision(){
    tel.style.scale=1;
}
function hidetelevision(){
    tel.style.scale=0;
}
function showaudio(){
    audio.style.scale=1;
}
function hideaudio(){
    audio.style.scale=0;
}

function showhomeapp(){
    homeapp.style.scale=1;
}
function hidehomeapp(){
    homeapp.style.scale=0;
}

function showcomputers(){
    computers.style.scale=1;
}
function hidecomputers(){
    computers.style.scale=0;
}

function showcameras(){
    cameras.style.scale=1;
}
function hidecameras(){
    cameras.style.scale=0;
}

function showkitchenapp(){
    kitchenapp.style.scale=1;
}
function hidekitchenapp(){
    kitchenapp.style.scale=0;
}

function showpersonalcare(){
    personalcare.style.scale=1;
}
function hidepersonalcare(){
    personalcare.style.scale=0;
}

function showaccessories(){
    accessories.style.scale=1;
}
function hideaccessories(){
    accessories.style.scale=0;
}






