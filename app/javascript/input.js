window.onload = function() {

  // ーーーーーーーーサウンド関連ーーーーーーーーーーー
  var sound_state = sessionStorage.getItem('mute_state')
  var mute_sound = document.getElementById('mute_sound')
  var enable_sound = document.getElementById('enable_sound')
  var bgm = document.getElementById('bgm')

  // ミュートを解除するファンクション
  function muteOnOff(state){
    Array.prototype.slice.call(document.querySelectorAll('audio')).forEach(function(audio) {
      audio.muted = state
    })
  }

  // サファリ用・クリックでBGM再生
  window.addEventListener('click', function() {
    bgm.play()
  })

  // sessionを用いた，サウンドのミュート状態の判定と処理
  if(sound_state == 1) {
    muteOnOff(false)
    mute_sound.classList.toggle('sound_button_color')
  } else {
    muteOnOff(true)
    enable_sound.classList.toggle('sound_button_color')
  }

  // サウンドボタンの色・クリックイベント切り替え
  function colorOnOff(){
    mute_sound.classList.toggle('sound_button_color')
    enable_sound.classList.toggle('sound_button_color')
  }

  // サウンドボタン　クリック時の挙動
  mute_sound.onclick = function() {
    muteOnOff(true)
    sessionStorage.setItem('mute_state', 0)
    colorOnOff()
  }

  enable_sound.onclick = function() {
    muteOnOff(false)
    bgm.play()
    sessionStorage.setItem('mute_state', 1)
    colorOnOff()
  }


  // ーーーーーーーーー削除ボタン関連ーーーーーーーーーーー

  var erase_button = document.getElementById('erase_btn')
  erase_button.onclick = function() {
    document.getElementById('result').value = this.value
  }


  // ーーーーーーーーー入力ボタン関連ーーーーーーーーーーー

  var buttons = document.getElementById('chars').getElementsByClassName('hiragana_btn')
  for (var i = 0, n = buttons.length; i < n; i++) {
    buttons[i].onclick = function() {
    document.getElementById('result').value += this.value
    this.querySelector('audio').play()
    }
  }

  // ーーーーーーーーー回答の判定・モーダルーーーーーーーーーーー

  var btn = document.getElementById('btn')
  var modal1 = document.getElementById('modal1')
  var modal2 = document.getElementById('modal2')


  btn.addEventListener('click', function() {

    var input_message = document.getElementById('result').value
    var animal_name_js = document.getElementById('answer').value
    var back_btn = document.getElementById('back')
    var correct = document.getElementById('correct')
    var mistake = document.getElementById('mistake')

    if (input_message == animal_name_js) {
      modal1.style.display = 'block'
      correct.play()

      window.addEventListener('click', function(e) {
        if (e.target == modal1) {
          modal1.style.display = 'none'
        }
      })
    }else{
      modal2.style.display = 'block'
      mistake.play()

      back_btn.addEventListener('click', function() {
        modal2.style.display = 'none'
      })

      window.addEventListener('click', function(e) {
        if (e.target == modal2) {
          modal2.style.display = 'none'
        }
      })
    }
  })

   // ーーーーーーーーーヒントの表示ーーーーーーーーーーー

   var hint_message = function() {
    var number_of_words = document.getElementById('length').value
    var hint = document.getElementById('hint')

    hint.innerText = `ヒント：${number_of_words}もじだよ！`
    hint.style.color = '#F88FB3'
 }

  window.setTimeout(hint_message, 10000)

}