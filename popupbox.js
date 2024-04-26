alert('Contoh Penggunaan ALERT!');
alert('ALERT! bisa berulang');
prompt('Contoh PROMPT!. ini bedanya:');
var nama = prompt('bisa juga dipakai seperti ini, isi nama:');
alert('nama yang diisi akan disimpan sebagai var dan seperti ini:'+' '+nama);
var nama = confirm('kamu yakin itu nama mu?');
if(nama === true) {
    alert('selamat kamu ingat namamu!')
} else {
    alert('kok bisa kamu tidak ingat namamu!')
}