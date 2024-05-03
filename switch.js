var olahraga = prompt('masukan olahraga yang memakai tangan atau kaki\n(contoh: sepak bola, takraw, volley, basket):')

switch(olahraga){
    case'sepak bola':
    case'takraw':
        alert('olahraga menggunakan kaki');
    break;
    case'volley':
    case'basket':
        alert('olahraga menggunakan tangan');
        break
    default:
        alert('olahraga tidak termasuk dalam daftar');
    break;
}