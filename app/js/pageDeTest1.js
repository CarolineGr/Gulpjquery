$(function(){
    //ajout à la fin/debut à l'intérieur de la balise
    $('h2').append(' **');
    $('h2').prepend('** ');

    // ajout avant/apres la balise
    $('h2').before('title : ');
    $('h2').after('end : ');

    // changement de balise (h3 remplace h2)
    $('h2').each(function(){
        var elem_h2 = $(this);
        console.log(elem_h2);

        elem_h2.replaceWith('<h3>'+elem_h2.text()+'</h3>')
    });

    //ajout d un element avant/apres la cible (ext)
    $('<h1>ZE Liste</h1>').insertBefore($('ul'));
    $('<progress id="avancement" value="50" max="100"></progress>').insertAfter($('p'));

    //ajout d un element juste avant/apres la cible (int)
    $('<ol><li>sous-menu 1</li><li>sous-menu 2</li></ol>').appendTo($('li:nth-child(2)'));
    $('<strong>TEST GRAS</strong>').prependTo($('p'));



});