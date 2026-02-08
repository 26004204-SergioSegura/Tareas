var Dia_nacimiento;
var Mes_nacimiento;

Dia_nacimiento = parseInt(prompt("Bienvenido! vamos a determinar su signo zodiacal y para iniciar por favor ingrese el día de su nacimiento (1-31)"));
Mes_nacimiento = parseInt(prompt("Ahora ingrese su mes de nacimiento (1-12)"));

if(Dia_nacimiento < 1 || Dia_nacimiento > 31 || Mes_nacimiento < 1 || Mes_nacimiento > 12){
  alert("Los valores ingresados son incorrectos!")
} else if(Dia_nacimiento >= 24 && Mes_nacimiento == 10 || (Dia_nacimiento <= 22 && Mes_nacimiento == 11)){
  alert("Usted es Escorpión")
} else if(Dia_nacimiento >= 21 && Mes_nacimiento == 3 || (Dia_nacimiento <= 20 && Mes_nacimiento == 4)){
  alert("Usted es Aries")
} else if(Dia_nacimiento >= 21 && Mes_nacimiento == 4 || (Dia_nacimiento <= 20 && Mes_nacimiento == 5)){
  alert("Usted es Tauro")
} else if(Dia_nacimiento >= 21 && Mes_nacimiento == 5 || (Dia_nacimiento <= 20 && Mes_nacimiento == 6)){
  alert("Usted es Géminis")
} else if(Dia_nacimiento >= 21 && Mes_nacimiento == 6 || (Dia_nacimiento <= 22 && Mes_nacimiento == 7)){
  alert("Usted es Cáncer")
} else if(Dia_nacimiento >= 23 && Mes_nacimiento == 7 || (Dia_nacimiento <= 23 && Mes_nacimiento == 8)){
  alert("Usted es Leo")
} else if(Dia_nacimiento >= 24 && Mes_nacimiento == 8 || (Dia_nacimiento <= 22 && Mes_nacimiento == 9)){
  alert("Usted es Virgo")
} else if(Dia_nacimiento >= 23 && Mes_nacimiento == 9 || (Dia_nacimiento <= 23 && Mes_nacimiento == 10)){
  alert("Usted es Libra")
} else if(Dia_nacimiento >= 23 && Mes_nacimiento == 11 || (Dia_nacimiento <= 21 && Mes_nacimiento == 12)){
  alert("Usted es Sagitario")
} else if(Dia_nacimiento >= 22 && Mes_nacimiento == 12 || (Dia_nacimiento <= 20 && Mes_nacimiento == 1)){
  alert("Usted es Capricornio")
} else if(Dia_nacimiento >= 21 && Mes_nacimiento == 1 || (Dia_nacimiento <= 19 && Mes_nacimiento == 2)){
  alert("Usted es Acuario")
} else if(Dia_nacimiento >= 20 && Mes_nacimiento == 2 || (Dia_nacimiento <= 20 && Mes_nacimiento == 3)){
  alert("Usted es Piscis")
}