$(document).ready(function(){
  $("#hider").click(function(){
      $("#alert").slideToggle("slow");
      $(this).toggleClass("active");
  });
});