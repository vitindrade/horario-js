
function carregar(){
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora}hrs.`
    if (hora>=0 && hora<=12){

        img.src = `manha.png`
        document.body.style.background = `#8eb6db`

    }else if(hora>=13 && hora<=18){

        img.src = `tarde.png`
        document.body.style.background = `#f39247`

    }else{

        img.src = `noite.png`
        document.body.style.background = `#182930`
    }
}