function ligar() {
        document.querySelector('#lampada').src = 'img/lampada_ligada.gif'

        document.getElementById('desligar').style.backgroundColor ='#42b932'

        document.getElementById('ligar').style.backgroundColor = 'grey'
    }

    function desligar() {
        document.querySelector('#lampada').src = "img/lampada_desligada.gif"

        document.querySelector('#ligar').style.backgroundColor = '#42b932'

        document.querySelector('#desligar').style.backgroundColor = 'grey'
    }