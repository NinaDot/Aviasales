window.onload = function () {

for(var i = 0; i < document.getElementsByClassName('choose').length; i++) {

    let a = document.getElementsByClassName('choose')[i];
    a.onclick = function (){
        a.classList.toggle('header-choose');
        a.classList.toggle('header-choose__checked');
    }
  }
}