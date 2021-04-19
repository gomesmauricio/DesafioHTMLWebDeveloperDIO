let n = [];
let positivo=0;
let negativo=0;
let par=0;
let impar=0;

for (let i=0;i<=4;i++){
  n[i] = parseInt(gets());
if(n[i]%2==0){
    par++;
  }else if (n[i]%2!=0) {
    impar++;
  }if(n[i] > 0){
    positivo++;
  }else if(n[i] < 0){
    negativo++;
    }}
    console.log(par+" valor(es) par(es)\n" +impar+" valor(es) impar(es)\n"+positivo+" valor(es) positivo(s)\n" +negativo+" valor(es) negativo(s)\n")