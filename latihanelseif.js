var jmlBecak = 10;
var becakBeroperasi = 6;

for(noBecak=1; noBecak<=jmlBecak; noBecak++) {
    if(noBecak<=becakBeroperasi && noBecak !== 5){ // && jika kondisi salahsatunya false maka semuanya false
        console.log('Becak no. '+noBecak+' sedang beroperasi dengan baik')
    } 
    else if (noBecak===5){
        console.log('Becak no. '+noBecak+ ' sedang lembur')
    }
    else if(noBecak===8 || noBecak===10) { // || jika kondisi salahstunya false akan tetap dikerjakan
        console.log('Becak no. '+noBecak+ ' tiguling!')
    } else{
        console.log('Becak no. '+noBecak+' sedang tidak beroperasi')
    }
}