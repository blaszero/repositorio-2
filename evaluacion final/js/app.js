var calculadora={};
calculadora=(function(){
  var pantalla=document.getElementById("display");
  var procesador="";
  var contador="";
  var anotador="";
  var resultado;
  var c="";
  var d="";
   // tecla de encendido
   var on=document.querySelector("#on").addEventListener("click", function(){
     pantalla.innerHTML=0;
     procesador="";
     contador="";
     anotador="";
     resultado;
     d="";
     c="";
   });
   // tecla de invertir valor
   var invertir=document.querySelector("#sign").addEventListener("click",function(){
     if (contador < 0) {
      contador=contador*(-1);
      contador=contador+"";
      pantalla.innerHTML=contador;
    }else if(contador > 0){
      contador=contador*(-1);
      pantalla.innerHTML=contador;
      contador=contador+"";
    };
  });
   // tecla de dividir
   var dividir=document.getElementById("dividido").addEventListener("click", function(){
     c="/";
     anotador=contador;
     contador="";
   });
   // tecla de multiplicar
   var multiplicar=document.getElementById("por").addEventListener("click", function(){
     c="*";
     anotador=contador;
     contador="";
   });
   // tecla de restar
   var menos=document.getElementById("menos").addEventListener("click", function(){
     procesador="-";
     if (contador == 0) {
       maxLength();
       pantalla.innerHTML=contador;
     }else{
     anotador=contador;
     contador="";
     pantalla.innerHTML=anotador;
     c="-";
    };
   });
   // tecla de sumar
   var sumar=document.getElementById("mas").addEventListener("click", function(){
     c="+";
     anotador=contador;
     contador="";
   });
   // tecla de punto
   var punto=document.getElementById('punto').addEventListener("click", function(){

     if (d !== "d") {
       procesador=".";
       maxLength();
       pantalla.innerHTML=contador;
       d="d";
     };
   });

 // -------------------------------------------------------------------------------


   // boton 0
   var cero=document.getElementById("0").addEventListener("click", function(){
      procesador="0";
      if (contador > 0) {
        maxLength();
        pantalla.innerHTML=contador;

      }
   });
   // boton 1
   var uno=document.getElementById("1").addEventListener("click", function(){
     procesador=1;
     maxLength();
     pantalla.innerHTML=contador;
   });
   // boton 2
   var dos=document.getElementById("2").addEventListener("click", function(){
     procesador=2;
     maxLength();
     pantalla.innerHTML=contador;
   });
   // boton 3
   var tres=document.getElementById("3").addEventListener("click", function(){
     procesador=3;
     maxLength();
     pantalla.innerHTML=contador;
   });
   // boton 4
   var cuatro=document.getElementById("4").addEventListener("click", function(){
     procesador=4;
     maxLength();
     pantalla.innerHTML=contador;
   });
   // boton5
   var cinco=document.getElementById("5").addEventListener("click", function(){
     procesador=5;
     maxLength();
     pantalla.innerHTML=contador;
   });
   // boton 6
   var seis=document.getElementById("6").addEventListener("click", function(){
     procesador=6;
     maxLength();
     pantalla.innerHTML=contador;
   });
   // boton 7
   var siete=document.getElementById("7").addEventListener("click", function(){
     procesador=7;
     maxLength();
     pantalla.innerHTML=contador;
   });
   // boton 8
   var ocho=document.getElementById("8").addEventListener("click", function(){
     procesador=8;
     maxLength();
     pantalla.innerHTML=contador;
   });
   // boton9
   var nueve=document.getElementById("9").addEventListener("click", function(){
     procesador=9;
     maxLength();
     pantalla.innerHTML=contador;
   });
   // --------------------------------------------------------------------------


   // tecla igual
   var igual=document.getElementById("igual").addEventListener("click", function(){
     switch (c) {
       case "+":
         resultado=parseFloat(anotador)+parseFloat(contador);
         break;
       case "-":
         resultado=parseFloat(anotador)-parseFloat(contador);
         break;
       case "*":
         resultado=parseFloat(anotador)*parseFloat(contador);
         break;
       case "/":
         resultado=parseFloat(anotador)/parseFloat(contador);
         break;
     };
     pantalla.innerHTML=resultado;
     contador=resultado.toString();
     anotador="";
     c="";
   });
  //----------------------------------------------------------------------------

   // funcion para que la pantalla solo pueda ingresarse 8 digitos
   function maxLength(){
     if(contador.length < 8){
       return contador=contador+procesador;
     };
   };
  //----------------------------------------------------------------------------

}());
