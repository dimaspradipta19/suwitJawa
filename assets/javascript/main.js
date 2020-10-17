function getPilihanKomputer() {
    const comp = Math.random();
    if ( comp < 0.34) return 'gajah';
    if ( comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
    
}

function hasil(comp, player) {

    if ( player == comp) return 'Seri !';
    if ( player == 'gajah') return ( comp == 'orang' ) ? 'Menang ! ' : ' Kalah ! ';
    if ( player == 'orang') return ( comp == 'gajah' ) ? 'Kalah ! ' : ' Menang ! ';
    if ( player == 'semut') return ( comp == 'orang' ) ? 'Kalah ! ' : ' Menang ! ';
}

const pGajah =  document.querySelector('.gajah');

pGajah.addEventListener('click', function(){

    const pilihanComputer = getPilihanKomputer();
    const pilihanPlayer = pGajah.className;
    const akhir = hasil(pilihanComputer, pilihanPlayer);



    const imageKom = document.querySelector('.img-komputer');

    imageKom.setAttribute('src', 'assets/images/'  +pilihanComputer+ '.jpg');



    const info = document.querySelector('.info');

    info.innerHTML = akhir;
});

const pOrang =  document.querySelector('.orang');

pOrang.addEventListener('click', function(){

    const pilihanComputer = getPilihanKomputer();
    const pilihanPlayer = pOrang.className;
    const akhir = hasil(pilihanComputer, pilihanPlayer);



    const imageKom = document.querySelector('.img-komputer');

    imageKom.setAttribute('src', 'assets/images/'  +pilihanComputer+ '.jpg');



    const info = document.querySelector('.info');

    info.innerHTML = akhir;
});

const pSemut =  document.querySelector('.semut');

pSemut.addEventListener('click', function(){

    const pilihanComputer = getPilihanKomputer();
    const pilihanPlayer = pSemut.className;
    const akhir = hasil(pilihanComputer, pilihanPlayer);



    const imageKom = document.querySelector('.img-komputer');

    imageKom.setAttribute('src', 'assets/images/'  +pilihanComputer+ '.jpg');



    const info = document.querySelector('.info');

    info.innerHTML = akhir;
});

