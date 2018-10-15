
Instalacion de acuerdo al tutorial: https://scotch.io/tutorials/build-a-single-page-time-tracking-app-with-vue-js-introduction


Resumen instalación comandos:

Ejecutar los siguientes comandos en la terminal de linux(ubuntu)

$ install -g vue-cli

$ vue init webpack my-project

$ cd my-project

$ npm install # install dependencies

$ npm run dev # start dev server at http://localhost:8080

Luego instalar el Datepicker:

$  npm install --save moment vue-datepicker

$ npm run dev



Errores:
   En el archivo Mypicker.js reemplazar:
	 "import myDatepicker from 'vue-datepicker'" por: "import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'"
	sacado de: https://github.com/hilongjw/vue-datepicker/issues/134 y https://github.com/hilongjw/vue-datepicker/issues/117#issuecomment-328752446



Instalacion alternativa: https://scotch.io/tutorials/build-a-single-page-time-tracking-app-with-vue-js-part-ii

-----------------************  Casos de prueba parking-calc ***********----------------
https://docs.google.com/document/d/1SzNt3gdzfAMu2Zr5WIDxHMlsmZpQ7xF7CLlYz8nkSAs/edit
-----------------************  fin Casos de prueba parking-calc ***********----------------

-----*********** Casos uso parkeo de automoviles *********-------
Verificar que el costo de parqueo puede ser calculado usando parqueo economico con intervalo de tiempo exacto
(4-12)-> 2bs
Verificar que el costo de parqueo no puede ser calculado usando parqueo economico con intervalo de tiempo menor a 4 horas
<4 hrs .....no se puede calcular.......error es mostrado
Verificar que el costo de parque no puede ser calculado usando parqueo economico con intervalo de tiempo mayor a 12 horas
>12 hrs.....no se puede calcular ...... error mostrado
Verificar que el costo de parqueo puede ser calculado usando parqueo economico con un intervalo de tiempo de 4 horas
(4)-> 2bs
Verificar que el costo de parqueo puede ser calculado usando parqueo economico con un intervalo de tiempo de 12 horas
(12)-> 2bs
Verificar que el costo de parqueo es calculado correctamente cuando el intervalo de tiempo no es exacto y los minutos adicionales son 30
2 bs -> redondeo al superior, 3:30 deberia ser cobrado x 4 hrs
Verificar que el costo de parqueo es calculado correctamente cuando el intervalo de tiempo no es exacto y los minutos adicionales son mayor a 30
2 bs -> redondeo al superior, 3:37 deberia ser cobrado x 4 hrs
Verificar que el costo de parqueo es calculado correctamente cuando el intervalo de tiempo no es exacto y los minutos adicionales son menor 30
2 bs -> redondeo al superior, 3:26 deberia ser cobrado x 3 hrs

Verificar que el costo del parqueo no se puede calcular cuando la fecha/hora de ingreso es mayor a la fecha/hora de salida
no se realiza calculo, error mensaje (ingreso>salida)  


Verificar que el costo del parqueo no se puede calcular cuando la fecha/hora de ingreso es menor a la actual
Verificar que el costo del parqueo no se puede calcular cuando las fechas/horas de ingreso y salida estan en blanco

