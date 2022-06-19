$(function() {
    $( ".draggable" ).draggable();
    $(".node2").draggable()
        .bind('mousedown', function(event, ui){
            // bring target to front
            $(event.target.parentElement).append( event.target );
        })
        .bind('drag', function(event, ui){
            // update coordinates manually, since top/left style props don't work on SVG
            event.target.setAttribute('x', ui.position.left);
            event.target.setAttribute('y', ui.position.top);
        })
});
