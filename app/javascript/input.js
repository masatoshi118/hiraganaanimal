window.onload = function() {

  var erase_button = document.getElementById('erase_btn')
  erase_button.onclick = function() {
    document.getElementById('result').value = this.value
  }

  var buttons = document.getElementById('chars').getElementsByClassName('hiragana_btn')
  for (var i = 0, n = buttons.length; i < n; i++) {
    buttons[i].onclick = function() {
      document.getElementById('result').value += this.value
    }
  }

  var btn = document.getElementById('btn')

  var modal1 = document.getElementById('modal1')
  var modal2 = document.getElementById('modal2')


  btn.addEventListener('click', function() {

    var input_message = document.getElementById('result').value
    var animal_name_js = document.getElementById('answer').value
    var back_btn = document.getElementById('back')

    if (input_message == animal_name_js) {
      modal1.style.display = 'block'

      window.addEventListener('click', function(e) {
        if (e.target == modal1) {
          modal1.style.display = 'none'
        }
      })
    }else{
      modal2.style.display = 'block'

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

   var hint_message = function() {
    var number_of_words = document.getElementById('length').value
    var hint = document.getElementById('hint')

    hint.innerText = `ヒント：${number_of_words}もじだよ！`
    hint.style.color = '#F88FB3'
 }

  window.setTimeout(hint_message, 10000)

}