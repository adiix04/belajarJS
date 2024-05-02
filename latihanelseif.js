var jmlBecak = 10;
var becakBeroperasi = 6;

for(noBecak=1; noBecak<=jmlBecak; noBecak++) {
    if(noBecak<=becakBeroperasi){
        console.log('Becak no. '+noBecak+' sedang beroperasi dengan baik')
    } else if(noBecak==8) {
        console.log('Becak no. '+noBecak+ ' tiguling!')
    } else{
        console.log('Becak no. '+noBecak+' sedang tidak beroperasi')
    }
}