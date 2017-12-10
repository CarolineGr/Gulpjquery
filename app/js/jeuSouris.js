$(function(){
    //dimension de la div
    var largeur = ($('#div1').width())-128;
    var hauteur = ($('#div1').height())- 128;
    console.log('L : '+largeur+' / l : '+hauteur);

    // affichage premiere image
    var p = $('#target').offset();
    console.log(p);
    p.top = 100;
    p.left = 100;

    $('#target').offset(p);

    // gestion evenement mouseenter
    $('#target').mouseenter(function(){
        x = Math.floor(Math.random()*largeur);      
        y = Math.floor(Math.random()*hauteur); 
        console.log(x +' '+ y);
        var p = $('#target').offset();
        p.top = y;
        p.left = x;

        $('#target').offset(p);
    });

    //gestion event scroll sur div2
    $('#div2').scroll(function () { 
        alert('utilisation du scroll dans la div');
    });

    $(window).scroll(function () { 
        alert('utilisation du scroll dans la fenêtre');
    });
});