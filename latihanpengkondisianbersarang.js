var s='';
for(var i=1; i<=10; i++) {
    for(var b = 1; b<=10; b++){
        if(b+1<=i){
            s+=' ';
        }else{
            s+='*';
        }
    }
    s+='\n';
}
console.log(s);