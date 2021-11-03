window.onload = function () {
      let a = document.getElementsByClassName('choose')[0];
      let b = document.getElementsByClassName('choose')[1];
      let c = document.getElementsByClassName('footer-button');
      a.onclick = function (){
        a.classList.add('header-choose__checked');
        b.classList.remove('header-choose__checked');
      }
      b.onclick = function (){
        b.classList.add('header-choose__checked');
        a.classList.remove('header-choose__checked');            
      }
      c.onclick = function (){
        for(var j = 0; j < document.getElementsByClassName('ticket-block').length; j++){
        let d = document.getElementsByClassName('ticket-block')[j];
        d.classList.remove('ticket-wrapper__none');
        d.classList.add('ticket-wrapper');
        console.log ('Привет');
      }
    }
  }

      