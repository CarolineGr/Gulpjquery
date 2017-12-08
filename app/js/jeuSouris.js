$(function(){
    //dimension de la div
    var largeur = ($('div').width())-128;
    var hauteur = ($('div').height())- 128;
    console.log('L : '+largeur+' / l : '+hauteur);

    // affichage premiere image
    var p = $('#target').offset();
    console.log(p);
    p.top = 100;
    p.left = 100;

    $('#target').offset(p);

    // gestion evenement click
    $('#target').click(function(){
        x = Math.floor(Math.random()*largeur);      
        y = Math.floor(Math.random()*hauteur); 
        console.log(x +' '+ y);
        var p = $('#target').offset();
        p.top = y;
        p.left = x;

        $('#target').offset(p);
    });

});