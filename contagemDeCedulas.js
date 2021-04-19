let cem= 0, cinquenta= 0,  vinte= 0, dez= 0, cinco= 0, dois= 0, troco= 0;
    let valor = parseInt(gets());

    troco = valor;
    cem = parseInt(troco / 100);
    troco = troco - (cem *100);
    cinquenta = parseInt(troco / 50);
    troco = troco - (cinquenta * 50);
    vinte = parseInt(troco / 20);
    troco = troco - (vinte * 20);
    dez = parseInt(troco /10);
    troco = troco -(dez * 10);
    cinco = parseInt(troco / 5);
    troco = troco - (cinco * 5);
    dois = parseInt(troco / 2);
    troco = troco - (dois * 2); 

    console.log(valor);
    console.log(cem + " nota(s) de R$ 100,00");
    console.log(cinquenta + " nota(s) de R$ 50,00");
    console.log(vinte + " nota(s) de R$ 20,00");
    console.log(dez + " nota(s) de R$ 10,00");
    console.log(cinco + " nota(s) de R$ 5,00");
    console.log(dois + " nota(s) de R$ 2,00");
    console.log(troco + " nota(s) de R$ 1,00");