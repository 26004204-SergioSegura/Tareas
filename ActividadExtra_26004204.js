var Numero;
var Adivina;
var Nombre;
var Carnet; 

Nombre = "Sergio Segura";
Carnet = "26004204";
do {
Numero = Math.floor(Math.random() * 9) + 1;
Adivina = parseInt(prompt("Adivina el núnero secreto entre 1 y 9 y adivine si el número que ingresó es mayor, menor o igual al número que la computadora generó"));

if (Adivina > 9 || Adivina < 1){
  alert("Ingresa nuevamente el número")
} else if (Adivina > Numero){
  alert("La computadora eligió ("+ Numero +")  usted eligió ("+Adivina+"). Su elección es mayor ¡Ha adivinado!")
} else if (Adivina == Numero){
  alert("Lo siento, fallaste. El número era ("+Numero+"). Su elección es igual.  Mejor suerte para la próxima")
}  else{
  alert("Lo siento, fallaste. El número era ("+Numero+"). Su elección es menor. Mejor suerte para la próxima")
}
Jugarnuevamente = prompt("Quiere jugar otra vez? (Si / No)");

}while (Jugarnuevamente == "Si");

alert("\nGracias por Jugar \nNombre: "+Nombre+" \nCarnet: "+Carnet+"");