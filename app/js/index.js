$(document).ready(function(){
    $('#textJQ').html('Hello world !');

    // $('p').html(function(index, actuel){
    //     alert("paragraphe n°" + (index+1) + ' : ' + actuel);
    // });

    // var posparent = $('#parent').offset();
    // var posenfant = $('#enfant').offset();

    // posenfant.top = 200;
    // posenfant.left = 350;

    // $('#enfant').offset(posenfant);

    // $('#resultat').text(posenfant.left+' '+posparent.left+' '+posenfant.top+' '+posparent.top);

    var dimensions = 'width=' + $('div').width() + ', innerWidth=' + $('div').innerWidth() + ', outerWidth=' + $('div').outerWidth() + ', outerWidth(true)=' + $('div').outerWidth(true);
    
    dimensions += ', height=' + $('div').height() + ', innerHeight=' + $('div').innerHeight() + ', outerHeight=' + $('div').outerHeight() + ', outerHeight(true)=' + $('div').outerHeight(true);
    
    $('#resultat').text(dimensions);

    var div = $('#mondiv');
    
    $.data(div, 'infodiv', {prems: 'bonjour', deuz: 29, troiz: 'http://www.siteduzero.com'});

    var sp1 = $.data(div, 'infodiv').prems;
    var sp2 = $.data(div, 'infodiv').deuz;
    var sp3 = $.data(div, 'infodiv').troiz;
    console.log(sp1);

    $('#sp1').text(sp1);
    $('#sp2').text(sp2);
    $('#sp3').text(sp3);
})