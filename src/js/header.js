window.onload = function () {

  
      let a = document.getElementsByClassName('choose')[0];
      let b = document.getElementsByClassName('choose')[1];

      a.onclick = function (){ 
        a.classList.add('header-choose__checked');  
        b.classList.remove('header-choose__checked');            
      } 
    
      b.onclick = function (){ 
        b.classList.add('header-choose__checked'); 
        a.classList.remove('header-choose__checked');            
      } 
  }

