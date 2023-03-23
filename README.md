# Tarjeta de crédito válida
#Introducción 
Se creó una página donde el enfoque principal era la validación de una tarjeta de crédito la cual se hace por medio del algoritmo de Luhn, que es un método de verificación.

##Instrucción de Uso de la página 
- La página  tiene un enfoque sencillo, al principio se pensó en hacer 2 páginas en el prototipo de baja fidelidad, una página de inicio que diera un breve contexto de la tienda, y la 2da página ya con la parte de la tarjeta de crédito para hacer la validación. Posterior al feedback de compañeras y coach elegí enfocarme en una página que incorporara las 2 ideas y hacerla de una manera más amigable para el usuario, colocando imágenes y frases que ayuden al usuario a identificar que se encuentra en una página de tienda de ropa para mujeres.  
- En la página el usuario puede ver al principio una barra de menú y el logo. Un poco más bajo está el nombre en grande para ayudar a identificar la tienda.  Se creó un botón que lleva directamente a la parte del formulario para ingresar los datos de la tarjeta y hacer la validación, o también se puede acceder a él haciendo scroll .
- Más abajo está una sección que hace alusión a la ropa "elegida por la cliente" para realizar la compra y luego está un diseño de una tarjeta de crédito junto con un botón que dice "validar formulario".
- Se le da click al botón y despliega el formulario con las casillas:
* Número de la tarjeta
*Nombre del Usuario
*Fecha de expiración (mes/año)
*CCV
- Luego se le da al botón "Confirmar tu pago" para que se haga la validación, debajo aparece un mensaje de aviso indicando el número de la tarjeta ingresada con los dígitos ocultos reemplazados por "#" menos los últimos 4, y al lado indicando si fue aceptada o rechazada según la validación. 
-Se creó otro botón de "reset" para resetear el formulario completo.

##Desarrollo del proyecto 
1.-  Cree el HTML semántico, lo dividí en "section" 
- El formulario lo hice con la etiqueta "form"  y con "input" para ingresar los valores del formulario
-Los botones los cree con la etiqueta "button" 
2.- Diseño de la página con CSS
3,. Funcionalidad en JS. 
-Manipulación del DOM 
-Creación de funciones y eventos
-Declaración de variables
4.- Creación de las funciones para isValid y Maskify en validator.js
5.- Correr los test con npm test en la terminal

####Deploy
https://valenparaguatey.github.io/-DEV006-card-validationV2/src/
