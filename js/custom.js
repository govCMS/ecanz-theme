$(document).ready(function() {
   $("path").mouseenter(function() {
        $(this).attr("fill", "#fbaf28");
     });
    $("path").mouseleave(function() {
        $(this).attr("fill", "#95bfe6");
     });

    $('.state-name').mouseenter(function() {
        var state_name = $(this).attr('data');
        $('.' + state_name).attr("fill", "#fbaf28");
     });
    $('.state-name').mouseleave(function() {
        var state_name = $(this).attr('data');
        $('.' + state_name).attr("fill", "#95bfe6");
     });
     
     $('.field-name-field-documents a').each(function(){
         $(this).attr('target','_blank');
     });
});