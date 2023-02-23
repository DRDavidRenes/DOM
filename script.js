//Tarea 6 DEWC
//autor: David Renes Tejado 71270642J ®
//version: 1.0
//***************************************************************************/
//***************************************************************************/


function crearBody_modificarEnlace() {
    var body = document.getElementsByTagName('body')[0];

    //Se creará una etiqueta <h1> con el texto "Encabezado dinámico" que será la primera etiqueta del body.
    var title = document.createElement('h1');
    var titleText = document.createTextNode('Encabezado dinámico');
    title.appendChild(titleText);
    body.insertBefore(title, body.firstChild);

    //Se creará a continuación una segunda etiqueta <hr>.
    var brLine = document.createElement('hr');
    body.insertBefore(brLine, title.nextSibling);

    //Después se creará un <div> que contendrá un párrafo <p>. El párrafo contendrá el siguiente texto "Párrafo creado dinámicamente".
    var container = document.createElement('div');
    var paragr = document.createElement('p');
    paragr.appendChild(document.createTextNode('Párrafo creado dinámicamente.'));
    container.appendChild(paragr);
    body.insertBefore(container, brLine.nextSibling);


    //Se modificará el atributo href para que apunte a la página de la Wikipedia.
    var link = document.getElementsByTagName('a')[0];
    var hrefAttr = link.attributes.getNamedItem('href');
    hrefAttr.value = "http://www.wikipedia.org";


    //Se modificará el texto contenido en el enlace "Ir a Google" por el de "Ir a Wikipedia"
    link.childNodes[0].textContent = 'Ir a Wikipedia';
};

