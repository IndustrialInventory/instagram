$("#howto-modal").click(function() {
    $("#howto").modal();
});

$("#about-modal").click(function() {
    $("#about").modal();
});

$(window).load(function(){
    $('#howto').modal('show');
});