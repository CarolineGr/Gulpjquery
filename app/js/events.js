$(function(){
    // which & type :
    // which : quel bouton de la souris est cliqué
    // type : type d'evenement
    $('#target').mousedown(function (e) { 
        $('#rapport').html('Bouton pressé : '+ e.which+ ' évènement : '+e.type);
    });

    //event clavier
    $('#target2').keydown(function (e) { 
        $('#lumiere').css('background-color', 'green');
    });
    $('#target2').keyup(function (e) { 
        $('#lumiere').css('background-color', 'white');
    });

    //event focus
    $('.f').focus(function () { 
        $('#rfocus').text($(this).attr('id'));        
    });
    $('.f').blur(function () { 
        $('#rblur').text($(this).attr('id'));        
    });

    // redimensionnement fenetre
    $(window).resize(function () { 
        var taille = 'Taille de la fenêtre : x : '+ $(window).width() + ' px et y : '+$(window).height()+ ' px';
        $('#res').text(taille);
    });

    // event change
    $('select').change(function () { 
        $('#res1').text('Vous avez sélectionné : ' + $(this).val());        
    });
});