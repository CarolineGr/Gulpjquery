$(function(){
    // cloner et deplacer
    $('p:first').clone().insertAfter($('hr:last'));

    // entourer une balise
    $('li').wrap('<i></i>');
    $('h2').wrap('<font color="red"><b><i><u></u></i></b></font>');

    // wrappAll rassemble ts les h3 et les entoure de la div
    $('h3').wrapAll('<div></div>');

    // supprimer un element
    $('p:last').remove();

    // supprimer un p qui contient un mot précis
    // $('p').remove(':contains("Lorem")');
});