  
 
    var press1 = false;
    var press2 = false;
    var val1 = 123123;
    var val2 = 48565;
    var previous_id = -1;
    var win = 0;
    var move = 0;
    var pl1 = 0;
    var pl2 = 0;
    var turn = 0;
  
    const array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15];
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    alert("Muzete zacit hrat");
  
    function zmen(clicked_id) {
      const m = document.getElementById(clicked_id);
      if (shuffledArray[clicked_id] == 1) {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/000000/FFF)';
      } else if(shuffledArray[clicked_id] == 2) {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/EB4516/FFF)';
      }else if(shuffledArray[clicked_id] == 3) {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/4B731E/FFF)';
      }else if(shuffledArray[clicked_id] == 4) {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/E7E318/FFF)';
      }else if(shuffledArray[clicked_id] == 5) {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/1DBD8C/FFF)';
      }else if(shuffledArray[clicked_id] == 6) {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/106B4F/FFF)';
      }else if(shuffledArray[clicked_id] == 7) {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/DC67FF/FFF)';
      }else if(shuffledArray[clicked_id] == 8) {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/550D6B/FFF)';
      }else if(shuffledArray[clicked_id] == 9) {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/FF0000/FFF)';
      }else if(shuffledArray[clicked_id] == 10) {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/BEDB92/FFF)';
      }else if(shuffledArray[clicked_id] == 11) {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/5A6B67/FFF)';
      }else if(shuffledArray[clicked_id] == 12) {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/03300C/FFF)';
      }else if(shuffledArray[clicked_id] == 13) {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/30031B/FFF)';
      }else if(shuffledArray[clicked_id] == 14) {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/C8CA44/FFF)';
      }else {
        m.style.backgroundImage = 'url(https://placehold.co/245x245/0C00FF/FFF)';
      }
      m.disabled = true;
      
      if (press1 == true) {
        press2 = true;
        val2 = shuffledArray[clicked_id];
      }
      if (press1 == false) {
        press1 = true;
        val1 = shuffledArray[clicked_id];
      }
      if (press1 == true && press2 == true) {
        if (val1 == val2) {
          win++;
          press1 = false;
          press2 = false;
          m.disabled = true;
          const k = document.getElementById(previous_id);
          k.disabled = true;
          move++;
          if(turn == 0){
            pl1++;
          }else{
            pl2++;
          }
          if(win == 15){
            if(pl1> pl2){
            alert("Hrac 1 vyhral v "+ move + " tazich s " + pl1+ " body");
            }else if(pl2>pl1){
              alert("Hrac 2 vyhral v "+ move + " tazich s " + pl2+ " body");
            }else{
              alert("Remiza v "+ move + " tazich s " + pl2+ " body");
            }
          }
          document.getElementById('pl_1').innerHTML = "Body hrace 1 : " + pl1;
          document.getElementById('pl_2').innerHTML = "Body hrace 2 : " + pl2;
        } else {
          move++;
          if(turn == 0){
            turn = 1;
            document.getElementById('y').innerHTML = "Hrac 2 je na tahu";
          }else{
            turn = 0;
            document.getElementById('y').innerHTML = "Hrac 1 je na tahu";
          }
          const k = document.getElementById(previous_id);
          setTimeout(() => {
            m.style.backgroundImage = 'url(img/backimg.png)';
            k.style.backgroundImage = 'url(img/backimg.png)';
            m.disabled = false;
            k.disabled = false;
          }, 1500
          );
        }
        val1 = 45645;
          val2 = 456451;
        press1 = false;
        press2 = false;
      }
      previous_id = clicked_id;
    }