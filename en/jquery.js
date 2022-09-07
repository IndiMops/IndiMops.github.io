$(document).ready(function(){
  $("#hider").click(function(){
    $("#alert").slideToggle("slow");
    $(this).toggleClass("active");
    $(".page-container-home").css("min-height", "90%");
  });
});