function total() {

    //pc=precio costox kilo
    //cc=cantidad
    //x=pc*cc
    pc1=parseFloat(document.getElementById("precio_pera").value);
    cc1=parseInt(document.getElementById("cantidad_pera").value);
    x1=pc1*cc1
    document.getElementById("precio_parcial_pera").value=(x1).toFixed(2);

    pc2=parseFloat(document.getElementById("precio_tomate").value);
    cc2=parseInt(document.getElementById("cantidad_tomate").value);
    x2=pc2*cc2
    document.getElementById("precio_parcial_tomate").value=(x2).toFixed(2);

    pc3=parseFloat(document.getElementById("precio_maiz").value);
    cc3=parseInt(document.getElementById("cantidad_maiz").value);
    x3=pc3*cc3
    document.getElementById("precio_parcial_maiz").value=(x3).toFixed(2);

    pc4=parseFloat(document.getElementById("precio_brocoli").value);
    cc4=parseInt(document.getElementById("cantidad_brocoli").value);
    x4=pc4*cc4
    document.getElementById("precio_parcial_brocoli").value=(x4).toFixed(2);

    pc5=parseFloat(document.getElementById("precio_lechuga").value);
    cc5=parseInt(document.getElementById("cantidad_lechuga").value);
    x5=pc5*cc5
    document.getElementById("precio_parcial_lechuga").value=(x5).toFixed(2);

    pc6=parseFloat(document.getElementById("precio_papa").value);
    cc6=parseInt(document.getElementById("cantidad_papa").value);
    x6=pc6*cc6
    document.getElementById("precio_parcial_papa").value=(x6).toFixed(2);

    pc7=parseFloat(document.getElementById("precio_fresa").value);
    cc7=parseInt(document.getElementById("cantidad_fresa").value);
    x7=pc7*cc7
    document.getElementById("precio_parcial_fresa").value=(x7).toFixed(2);

    pc8=parseFloat(document.getElementById("precio_zapallo").value);
    cc8=parseInt(document.getElementById("cantidad_zapallo").value);
    x8=pc8*cc8
    document.getElementById("precio_parcial_zapallo").value=(x8).toFixed(2);


    pc9=parseFloat(document.getElementById("precio_uva").value);
    cc9=parseInt(document.getElementById("cantidad_uva").value);
    x9=pc9*cc9
    document.getElementById("precio_parcial_uva").value=(x9).toFixed(2);


    pc10=parseFloat(document.getElementById("precio_platano").value);
    cc10=parseInt(document.getElementById("cantidad_platano").value);
    x10=pc10*cc10
    document.getElementById("precio_parcial_platano").value=(x10).toFixed(2);

    pc11=parseFloat(document.getElementById("precio_mandarina").value);
    cc11=parseInt(document.getElementById("cantidad_mandarina").value);
    x11=pc11*cc11
    document.getElementById("precio_parcial_mandarina").value=(x11).toFixed(2);

    pc12=parseFloat(document.getElementById("precio_manzana").value);
    cc12=parseInt(document.getElementById("cantidad_manzana").value);
    x12=pc12*cc12
    document.getElementById("precio_parcial_manzana").value=(x12).toFixed(2);

  
  document.getElementById("total").value=(x1+x2+x3+x4+x5+x6+x7+x8+x9+x10+x11+x12).toFixed(2);

}

function compra(){
    let nombre=prompt("Ingrese su nombre");
    let direcci??n=prompt("Ingrese su direcci??n");
    let codigo1=parseInt(prompt("Ingrese su n??mero de DNI"))
    let delivery=prompt("?? Desea reservar o hacer un delivery?")

    document.write("<center><br> Su nombre es:"+ nombre +"<br>");
    document.write("<center> Su direcci??n  es:"+ direcci??n+"<br>");
    document.write("<center> Su N??mero de DNI es:"+ codigo1+"<br>");
    document.write("<center> La forma de comprar que eligi?? es:"+delivery+"<br>");  

    document.write("<br><br><center> DATOS REGITRADOS CON EXITO PARA LA COMPRA... REGRESE PRONTO " +"<br>");
    document.write("<br>"+'<img src="imagenes2/pepe.png" width=500px heigth=90px/>');
}