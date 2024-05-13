var tanya = true;
while ( tanya ) {
// menangkap pilihan player
    var p = prompt('pilih: gajah, semut, orang:')
    // menangkap pilihan komputer

    // membangkitkan pilihan random
    var comp = Math.random()

    if (comp < 0.34) {
        comp = 'gajah';
    } else if( comp >= 0.34 && comp <0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    console.log(comp);
    var hasil = ' ';
    // menentukan rules
    if(p == comp) {
        hasil = 'SERI!'
    } else if (p == 'gajah') {
    // } if(comp == 'orang') {
    //     hasil = 'kamu MENANG!'
    // } else {
    //     hasil = 'kamu KALAH!'
    hasil = (comp == 'orang') ? 'kamu MENANG!' : 'kamu KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'kamu KALAH!' : 'kamu MENANG!';
    } else if (p == 'semut'){
        hasil = (comp == 'orang') ? 'kamu KALAH!' : 'kamu MENANG!';
    } else {
        hasil = 'anda memasukkan pilihan yang SALAH!';
    }

    // tampilkan hasilnya
    alert('kamu memilih ' + p + ' dan komputer memilih ' + comp + '\nmaka hasilnya ' + hasil);

    tanya = confirm('lagi?');
}

alert('TERIMA KASIH SUDAH BERMAIN!')