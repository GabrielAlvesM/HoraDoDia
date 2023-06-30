
function load(){
    var msg = document.getElementById('msg');
    var img = document.querySelector('img')
    var data = new Date();
    var hour = data.getHours();
    msg.innerHTML = `Agora são ${hour} horas!`

    if(hour >= 0 && hour < 12){
        img.src ='img/morning.png'
        document.body.style.background = '#e2cd9f';
    }else if(hour >= 12 && hour < 18){
        img.src = 'img/afternoon.png';
        document.body.style.background= '#b9846f';
    }
    else{
        img.src = 'img/everning.png';
        document.body.style.background = '#515154';
    }
}