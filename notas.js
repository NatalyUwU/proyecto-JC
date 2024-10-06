/*
etiqueta header en html: La etiqueta <header> en HTML se utiliza para definir la cabecera de una página web, generalmente contiene información introductoria, logotipos, menús de navegación, o títulos relevantes.
etiqueta span html:Es ideal cuando necesitas aplicar estilos o scripts a una porción específica del contenido dentro de un bloque de texto sin interrumpir el flujo de la página

Aplicar texto negrilla: enfasis semantico  <strong>asdadasd</strong>
sin enfasis <b></b>

Aplicar cursiva: enfasis semantico <em>asdasda</em>
sin enfasis <i>asdasd</i>

Aplicar subrayado: <u>asdasd</u>

Aplicar tachado: enfasis semantico <del></del>
sin enfasis <s></s>

REDIRIGIR A OTRA PESTAÑA <a href="login.html" target="_blank">Iniciar sesión /</a>
REDIRIGIR A LA MISMA PESTAÑA <a href="login.html">Iniciar sesión /</a>

--------------------NAVEGAR PARA ENLAZAR
./para salir de 1 vez de donde estoy, ../ para salir 2 veces de donde estoy



-------------Ajustar tamaño a otro dispositivo
Unidades Responsivas
Utiliza unidades de medida responsivas como %, vw (viewport width), y vh (viewport height) en lugar de unidades fijas como px para que los elementos se ajusten al tamaño de la pantalla.

Ejemplo:
.container {
    width: 90%; /* Usa un porcentaje para que sea responsivo */
// max-width: 1368px; /* Máximo ancho para pantallas grandes */
//}

/*
Flexbox y Grid
Utiliza Flexbox o CSS Grid para crear diseños flexibles que se adapten automáticamente al tamaño de la pantalla.

Ejemplo con Flexbox:
.container {
    display: flex;
    flex-wrap: wrap; /* Permite que los elementos se ajusten en múltiples líneas */
/*}

.item {
    flex: 1 1 100%; /* Elementos ocupan el 100% en dispositivos móviles */
/*}

@media (min-width: 481px) {
    .item {
        flex: 1 1 48%; /* Ocupa el 48% en pantallas más grandes */
/*   }
/*}

*/

/*
Imágenes Responsivas
Asegúrate de que las imágenes se ajusten al tamaño del contenedor. Puedes usar max-width: 100%; para que las imágenes no se desborden de su contenedor.
img {
    max-width: 100%; /* Las imágenes no exceden el ancho del contenedor */
//    height: auto; /* Mantiene la proporción de la imagen */
//}

/*
--------------------------GIT
git init para iniciar repoasitorio en la carpeta, solo 1 vez

colocar:
git status
git add nombreArchivo             y agregar los archivos en rojo
git status            y verificar que aparezcan en verde
git commit -m ""           escribir dentro de las comillas una descripcion de lo que se hizo
git status           verificar que no aparezca ningun archivo para ser guardado
git log                 para ver el commit


*/






//-------------------------
//----------------------------             <link rel="stylesheet" href="../css/slider.css"></head>


//------------------------------------------Listas desordenadas
/*<ul type="none">
                                    <li><a href="#">Maquillaje</a></li>
                                    <li><a href="#">Crema facial</a></li>
                                    <li><a href="#">Protector Solar</a></li>
                                    <li><a href="#">serums</a></li>
                                    <li><a href="#">Limpiador facial</a></li>
                                    <li><a href="#">Accesorios</a></li>
                                </ul>

                                //type="none" : Sin nada
                                //type="circle": con circulo vacio
                                //type="square": con cuadrado
*/

//------------------------------------------Listas ordenadas

/*<ol type="A">
                                    <li><a href="#">Maquillaje</a></li>
                                    <li><a href="#">Crema facial</a></li>
                                    <li><a href="#">Protector Solar</a></li>
                                    <li><a href="#">serums</a></li>
                                    <li><a href="#">Limpiador facial</a></li>
                                    <li><a href="#">Accesorios</a></li>
                                </ol>


                                  //type="A" : Abecedario mayusculas
                                //type="a" : Abecedario minusculas

                                //type="I" : Num romanos mayus
                                //type="i" : Num romanos minusculos

//------------------------------------------Tablas
<table border="1">
    <tr>//tabla
        <th>Nombres</th>//titulos
        <th>apellidos</th>

        <tr>//tabla
            <td>Juan</td>//datos
            <td>67</td>

            <td>Isabel</td>//datos
            <td>50</td>
        </tr>
    </tr>
</table>



/*----------------------------------------FORMULARIO
contenedor para formulario:  <form action=""></form>

-----------------TEXTO
<label for="nombre">Nombre:</label>: infomacion que se pide
 <input type="text" name="nombre" placeholder="Ingresa tu nombre aqui" required>:   Cuadro para la informacion que llena el usuario


-----------------CORREO
 <label for="correo">Correo electrónico::</label>
            <input type="email" name="correo" placeholder="Ingresa tu correo aqui" required>


-----------------------------CONTRASEÑA
            <label for="contra">Contraseña:</label>
            <input type="password" name="contra" placeholder="Ingresa tu contraseña aqui" required>

--------------------NUMERO
            <label for="edad">edad:</label>
        <input type="number" name="edad" min="18" max="89">

 --------------FECHA

        <label for="fecha">fecha:</label>
        <input type="date" name="fecha">

--------------------SOLO UNA OPCION

<label for="masculino">Masculino</label>
                <input type="radio" name="genero" value="masculino" id="masculino">

                <label for="femenino">Femenino</label>
                <input type="radio" name="genero" value="femenino" id="femenino">

                <label for="otro">Otro</label>
                <input type="radio" name="genero" value="otro" id="otro">

  --------------------MAS DE UNA OPCION

  <label for="opcion1">Opcion 1</label>
<input type="checkbox" name="opcion1">

<label for="opcion2">Opcion 2</label>
<input type="checkbox" name="opcion2">

--------------------ARCHIVOS
<label for="archivo">Archivo</label>
<input type="file" name="archivo">

--------------------CUADRO DE TEXTO
<label for="texto">Ingresa un texto</label>
<textarea name="texto" rows="60" cols="50"></textarea>


------------------------------------------CSS                ID ES UNICO, CLASE SE PUEDE REPETIR A ELEMENTOS QUE PERTENEZCAN A UNA MISMA FAMILIA, PARA JS ES MEJOR USAR ID 

id, class, a todos los h1, osea a todas las etiquetas de un mismo tipo, universales

-----------------------------------PARA ETIQUETA
h1 {
    color: black;
    font-size: 100px;
    background-color: aqua;
}

-------------------------------------PARA CLASS

<p class="parrafoBase">

        </p>

        Se inicia con .

        .parafoBase {
    font-size: 30px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-style: italic;
}

-------------------------------PARA ID

p id="parrafoBase">

        </p>

#nombreId {
background-color: aliceblue;
font-style: oblique;
}


p id="parrafoBase" class="parrafoBase">

        </p>


        -------------------------------UN CONTENEDOR Y LOS ELEMENTOS QUE CUMPLAN CON LOS REQUISITOS SE LE APLICA

        
-------------------------------------------------CSS Texto  -- FONT
opacity: 0.5;      -opacidad
 font-size: ;       ---- tamaño
    text-align: ;      --- alineacion texto
    font-family: ; ----------fuente
    font-style: ;        ----arrecostada
    font-weight: ;      ------grosor
    font-variant: small-caps;     ----pasar a minuscula
     vertical-align: ;         ------- varios textos verticales


     ----------imagenes
     width: 150px; ----alto y ancho
     height: ; -----------largo

     text-aling: cente;        alinear texto

---------------------------------------CSS
border-radius: 0px;           esquinas redondeadas
border: 0px solid;              borde con color

heigth: auto;         cambiar tamaño por ancho y largo automaticamente


----------------------------CSS DISPLAY
 display: block;     los elementos ocupan el 100% del ancho, quedando asi una vista como bloques uno debajo del otro
 display: inline-block          elementos en linea uno al lado del otro
display: flex              elementos en linea uno al lado del otro


------------------------------CSS POSISIONES
position: relative;         para que el elemento permazeca en un determinado lugar, para moverlo se usa top lieft, bottom right

position: fixed;       para que se quede dijo asi se haga scroling, para moverlo se usa top lieft, bottom right

position: absolute;      se posiciona el elemento en base a otro elemento, para esto debeje esta dentro del contenedor del elemento que vamos
a tomar como referencia y ese elemento debe tener position relative, para moverlo se usa top lieft, bottom right

-----------------------------FLOAT



















*/