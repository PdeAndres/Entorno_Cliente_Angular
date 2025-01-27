# Tabla

Crear una tabla con cuatro filas y dos columnas:
◦ Fila 1: en la primera columna tiene un checkbox y en la segunda columna una capa div con el
mensaje Hola. El funcionamiento debe ser el siguiente: Si se marca el checkbox, la capa div
tendrá el estilo ‘fondo’:
.fondo { background: yellow; }
Si se desmarca, la capa div, no tendrá dicho estilo.
◦ Fila 2: crear una columna con colspan=2 para que ocupe las dos columnas. Tiene un enlace <a>
y queremos que el atributo href se le pase con un valor desde el componente, por ejemplo:
“https://ceuandalucia.es”
◦ Fila 3: En la primera columna crear un botón que inicialmente muestre el valor ‘Mostrar’ y
cuando se pulse, cambie el texto a ‘Ocultar’. Cuando esté en ‘Ocultar’, cambiará a ‘Mostrar’.
En la segunda columna, hay una capa div, con un texto ‘Visible’ que se ve cuando el botón de la
primera columna muestre ‘Mostrar’. Cuando se pulse el botón con texto ‘Ocultar’, la capa se
oculta (hidden).
Pista: crear un atributo mostrarCapa en el componente que inicialmente será true. Esto hará que
el botón muestre ‘Mostrar’ y la capa estará hidden.
◦ Fila 4: En la primera columna hay un botón que podrá tener los valores ‘Habilitar’ o
‘Deshabilitar’. Inicialmente mostrará ‘Habilitar’. Cuando se pulse ‘Habilitar’, el botón de la
segunda columna con texto ‘Hola que tal’ se habilitará. Cuando el primer botón muestre
‘Deshabilitar’, el segundo botón se deshabilitará.
