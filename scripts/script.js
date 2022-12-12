document.addEventListener('keydown', function change() {
  if (event.code == 'KeyA') {
    var cat1 = document.getElementById('cat1');
    cat1.src = "images/cat1.2.png";
    document.getElementById("aButton").style.backgroundColor = "#ccc";
    var audio1 = new Audio('audio/note1.mp3');
audio1.play();
  }
  else if (event.code == 'KeyS') {
    var cat2 = document.getElementById('cat2');
    cat2.src = "images/cat2.2.png";
    document.getElementById("sButton").style.backgroundColor = "#ccc";
    var audio2 = new Audio('audio/note2.mp3');
audio2.play();
  }
  else if (event.code == 'KeyD') {
    var cat3 = document.getElementById('cat3');
    cat3.src = "images/cat3.2.png";
    document.getElementById("dButton").style.backgroundColor = "#ccc";
    var audio3 = new Audio('audio/note3.mp3');
audio3.play();
  }
  else if (event.code == 'KeyF') {
    var cat4 = document.getElementById('cat4');
    cat4.src = "images/cat4.2.png";
    document.getElementById("fButton").style.backgroundColor = "#ccc";
    var audio4 = new Audio('audio/note4.mp3');
audio4.play();
  }
  else if (event.code == 'KeyG') {
    var cat5 = document.getElementById('cat5');
    cat5.src = "images/cat5.2.png";
    document.getElementById("gButton").style.backgroundColor = "#ccc";
    var audio5 = new Audio('audio/note5.mp3');
audio5.play();
  }
  else if (event.code == 'KeyH') {
    var cat6 = document.getElementById('cat6');
    cat6.src = "images/cat6.2.png";
    document.getElementById("hButton").style.backgroundColor = "#ccc";
    var audio6 = new Audio('audio/note6.mp3');
audio6.play();
  }
  else if (event.code == 'KeyZ') {
    var cat7 = document.getElementById('cat7');
    cat7.src = "images/cat7.2.png";
    document.getElementById("zButton").style.backgroundColor = "#ccc";
    var audio7 = new Audio('audio/note7.mp3');
    audio7.play();
  }
  else if (event.code == 'KeyX') {
    var cat8 = document.getElementById('cat8');
    cat8.src = "images/cat8.2.png";
    document.getElementById("xButton").style.backgroundColor = "#ccc";
    var audio8 = new Audio('audio/note8.mp3');
audio8.play();
  }
  else if (event.code == 'KeyC') {
    var cat9 = document.getElementById('cat9');
    cat9.src = "images/cat9.2.png";
    document.getElementById("cButton").style.backgroundColor = "#ccc";
    var audio9 = new Audio('audio/note9.mp3');
audio9.play();
  }
  else if (event.code == 'KeyV') {
    var cat10 = document.getElementById('cat10');
    cat10.src = "images/cat10.2.png";
    document.getElementById("vButton").style.backgroundColor = "#ccc";
    var audio10 = new Audio('audio/note10.mp3');
audio10.play();
  }
  else if (event.code == 'KeyB') {
    var cat11 = document.getElementById('cat11');
    cat11.src = "images/cat11.2.png";
    document.getElementById("bButton").style.backgroundColor = "#ccc";
    var audio11 = new Audio('audio/note11.mp3');
audio11.play();
  }
});
document.addEventListener('keyup', function changeBack() {
  if (event.code == 'KeyA') {
    var upcat1 = document.getElementById('cat1');
    upcat1.src = "images/catblink1.gif";
    document.getElementById("aButton").style.backgroundColor = "#fff";
  }
  else if (event.code == 'KeyS') {
    var upcat2 = document.getElementById('cat2');
    upcat2.src = "images/catblink2.gif";
    document.getElementById("sButton").style.backgroundColor = "#fff";
  }
  else if (event.code == 'KeyD') {
    var upcat3 = document.getElementById('cat3');
    upcat3.src = "images/catblink3.gif";
    document.getElementById("dButton").style.backgroundColor = "#fff";
  }
  else if (event.code == 'KeyF') {
    var upcat4 = document.getElementById('cat4');
    upcat4.src = "images/catblink4.gif";
    document.getElementById("fButton").style.backgroundColor = "#fff";
  }
  else if (event.code == 'KeyG') {
    var upcat5 = document.getElementById('cat5');
    upcat5.src = "images/catblink5.gif";
    document.getElementById("gButton").style.backgroundColor = "#fff";
  }
  else if (event.code == 'KeyH') {
    var upcat6 = document.getElementById('cat6');
    upcat6.src = "images/catblink6.gif";
    document.getElementById("hButton").style.backgroundColor = "#fff";
  }
  else if (event.code == 'KeyZ') {
    var upcat7 = document.getElementById('cat7');
    upcat7.src = "images/catblink7.gif";
    document.getElementById("zButton").style.backgroundColor = "#fff";
  }
  else if (event.code == 'KeyX') {
    var upcat8 = document.getElementById('cat8');
    upcat8.src = "images/catblink8.gif";
    document.getElementById("xButton").style.backgroundColor = "#fff";
  }
  else if (event.code == 'KeyC') {
    var upcat9 = document.getElementById('cat9');
    upcat9.src = "images/catblink9.gif";
    document.getElementById("cButton").style.backgroundColor = "#fff";
  }
  else if (event.code == 'KeyV') {
    var upcat10 = document.getElementById('cat10');
    upcat10.src = "images/catblink10.gif";
    document.getElementById("vButton").style.backgroundColor = "#fff";
  }
  else if (event.code == 'KeyB') {
    var upcat11 = document.getElementById('cat11');
    upcat11.src = "images/catblink11.gif";
    document.getElementById("bButton").style.backgroundColor = "#fff";
  }
  });

let clickCat1= document.getElementById('cat1')
  clickCat1.onmousedown = function change(){
    if(event.button == 0){
      cat1.src = "images/cat1.2.png";
      document.getElementById("aButton").style.backgroundColor = "#ccc";
      var audio1 = new Audio('audio/note1.mp3');
  audio1.play();}}
    clickCat1.onmouseup = function changeBack(){
      if(event.button == 0){
        var upcat1 = document.getElementById('cat1');
        upcat1.src = "images/catblink1.gif";
        document.getElementById("aButton").style.backgroundColor = "#fff";
      } }

  let clickCat2= document.getElementById('cat2')
    clickCat2.onmousedown = function change(){
      if(event.button == 0){
        cat2.src = "images/cat2.2.png";
        document.getElementById("sButton").style.backgroundColor = "#ccc";
        var audio2 = new Audio('audio/note2.mp3');
    audio2.play();
      }}
      clickCat2.onmouseup = function changeBack(){
        if(event.button == 0){
          var upcat2 = document.getElementById('cat2');
          upcat2.src = "images/catblink2.gif";
          document.getElementById("sButton").style.backgroundColor = "#fff";
        } }

    let clickCat3= document.getElementById('cat3')
      clickCat3.onmousedown = function change(){
        if(event.button == 0){
          cat3.src = "images/cat3.2.png";
          document.getElementById("dButton").style.backgroundColor = "#ccc";
          var audio3 = new Audio('audio/note3.mp3');
      audio3.play();
        }}
        clickCat3.onmouseup = function changeBack(){
          if(event.button == 0){
            var upcat3 = document.getElementById('cat3');
            upcat3.src = "images/catblink3.gif";
            document.getElementById("dButton").style.backgroundColor = "#fff";
          } }

      let clickCat4= document.getElementById('cat4')
        clickCat4.onmousedown = function change(){
          if(event.button == 0){
            cat4.src = "images/cat4.2.png";
            document.getElementById("fButton").style.backgroundColor = "#ccc";
            var audio4 = new Audio('audio/note4.mp3');
        audio4.play();
          }}
          clickCat4.onmouseup = function changeBack(){
            if(event.button == 0){
              var upcat4 = document.getElementById('cat4');
              upcat4.src = "images/catblink4.gif";
              document.getElementById("fButton").style.backgroundColor = "#fff";
            } }

        let clickCat5= document.getElementById('cat5')
          clickCat5.onmousedown = function change(){
            if(event.button == 0){
              cat5.src = "images/cat5.2.png";
              document.getElementById("gButton").style.backgroundColor = "#ccc";
              var audio5 = new Audio('audio/note5.mp3');
          audio5.play();
            }}
            clickCat5.onmouseup = function changeBack(){
              if(event.button == 0){
                var upcat5 = document.getElementById('cat5');
                upcat5.src = "images/catblink5.gif";
                document.getElementById("gButton").style.backgroundColor = "#fff";
              } }

          let clickCat6= document.getElementById('cat6')
            clickCat6.onmousedown = function change(){
              if(event.button == 0){
                cat6.src = "images/cat6.2.png";
                document.getElementById("hButton").style.backgroundColor = "#ccc";
                var audio6 = new Audio('audio/note6.mp3');
            audio6.play();
              }  }
              clickCat6.onmouseup = function changeBack(){
                if(event.button == 0){
                  var upcat6 = document.getElementById('cat6');
                  upcat6.src = "images/catblink6.gif";
                  document.getElementById("hButton").style.backgroundColor = "#fff";
                } }
            let clickCat7= document.getElementById('cat7')
              clickCat7.onmousedown = function change(){
                if(event.button == 0){
                  cat7.src = "images/cat7.2.png";
                  document.getElementById("zButton").style.backgroundColor = "#ccc";
                  var audio7 = new Audio('audio/note7.mp3');
              audio7.play();
                }}
                clickCat7.onmouseup = function changeBack(){
                  if(event.button == 0){
                    var upcat7 = document.getElementById('cat7');
                    upcat7.src = "images/catblink7.gif";
                    document.getElementById("zButton").style.backgroundColor = "#fff";
                  } }
              let clickCat8= document.getElementById('cat8')
                clickCat8.onmousedown = function change(){
                  if(event.button == 0){
                    cat8.src = "images/cat8.2.png";
                    document.getElementById("xButton").style.backgroundColor = "#ccc";
                    var audio8 = new Audio('audio/note8.mp3');
                audio8.play();
                  }}
                  clickCat8.onmouseup = function changeBack(){
                    if(event.button == 0){
                      var upcat8 = document.getElementById('cat8');
                      upcat8.src = "images/catblink8.gif";
                      document.getElementById("xButton").style.backgroundColor = "#fff";
                    } }
                let clickCat9= document.getElementById('cat9')
                  clickCat9.onmousedown = function change(){
                    if(event.button == 0){
                      cat9.src = "images/cat9.2.png";
                      document.getElementById("cButton").style.backgroundColor = "#ccc";
                      var audio9 = new Audio('audio/note9.mp3');
                  audio9.play();
                    }}
                    clickCat9.onmouseup = function changeBack(){
                      if(event.button == 0){
                        var upcat9 = document.getElementById('cat9');
                        upcat9.src = "images/catblink9.gif";
                        document.getElementById("cButton").style.backgroundColor = "#fff";
                      } }
                  let clickCat10= document.getElementById('cat10')
                    clickCat10.onmousedown = function change(){
                      if(event.button == 0){
                        cat10.src = "images/cat10.2.png";
                        document.getElementById("vButton").style.backgroundColor = "#ccc";
                        var audio10 = new Audio('audio/note10.mp3');
                    audio10.play();
                      }}
                      clickCat10.onmouseup = function changeBack(){
                        if(event.button == 0){
                          var upcat10 = document.getElementById('cat10');
                          upcat10.src = "images/catblink10.gif";
                          document.getElementById("vButton").style.backgroundColor = "#fff";
                        } }
                    let clickCat11= document.getElementById('cat11')
                      clickCat11.onmousedown = function change(){
                        if(event.button == 0){
                          cat11.src = "images/cat11.2.png";
                          document.getElementById("bButton").style.backgroundColor = "#ccc";
                          var audio11 = new Audio('audio/note11.mp3');
                      audio11.play();
                    }}
                    clickCat11.onmouseup = function changeBack(){
                      if(event.button == 0){
                        var upcat11 = document.getElementById('cat11');
                        upcat11.src = "images/catblink11.gif";
                        document.getElementById("bButton").style.backgroundColor = "#fff";
                      } }

                      let touchCat1= document.getElementById('cat1')
                        touchCat1.ontouchstart = function change(){
                            cat1.src = "images/cat1.2.png";
                            document.getElementById("aButton").style.backgroundColor = "#ccc";
                            var audio1 = new Audio('audio/note1.mp3');
                        audio1.play();
                      }}
                      touchCat1.ontouchend = function changeBack(){
                          var upcat1 = document.getElementById('cat1');
                          upcat11.src = "images/catblink1.gif";
                          document.getElementById("aButton").style.backgroundColor = "#fff";
                        } }
