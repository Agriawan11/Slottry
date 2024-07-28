const slider = document.getElementById('slider');
const atention = document.getElementById('atention');
const display = document.getElementById('display');

function keluar(){
    slider.style.display = 'none';
}

function muncul(){
    slider.style.display = 'flex';
}

function tampil (){
    if(slider.style.display == 'none'){
        muncul();
    } else{
        keluar();
    }
}

function putar (){
    let random = Math.floor(Math.random() * 3)+1;
    let warna = ['red','green','gold','black'];
    display.style.backgroundColor = warna[random];

    function pemberitahuan(){
        if(random == 1){
            atention.style.display='absolute';
            atention.innerText ='selamat kamu menang '
        } else if(random == 2){
            atention.style.display='relative';
            atention.innerText ='selamat kamu menang 10000 '    
        } else if(random == 4){
            atention.style.display='flex';
            atention.innerText ='sayang sekali kamu kalaaah'
        } else{
            atention.style.display='flex';
            atention.innerText ='gatau lagi dehh tangan kamu bau'
        
        }
        
    }

    pemberitahuan();
}


