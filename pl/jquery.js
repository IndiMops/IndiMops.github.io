$(document).ready(function(){
  $("#hider").click(function(){
    $("#alert").slideToggle("slow");
    $(this).toggleClass("active");
    $(".page-container-home").css("min-height", "90%");
  });

  // pagination
  $(".deteils-titlet").click(function(){
    $(".deteils-desc").slideToggle("slow");
    $(this).toggleClass("active");
  });


  // filter manga
  $('.manga-filter div:first-child').addClass('active'); // додаємо клас, якщо кнопка натиснута
  $('.manga-list').hide(); // ховаємо всі інші 
  $('.manga-list:first').show(); // показуємо першу категорію: "Всі"

  $('.manga-filter-btn').click(function(){
    $('.manga-filter-btn').removeClass('active');
    $(this).addClass('active');
    $('.manga-list').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });

  // filter game
  $('.game-filter div:first-child').addClass('active'); // додаємо клас, якщо кнопка натиснута
  $('.game-list').hide(); // ховаємо всі інші 
  $('.game-list:first').show(); // показуємо першу категорію: "Всі"

  $('.game-filter-btn').click(function(){
    $('.game-filter-btn').removeClass('active');
    $(this).addClass('active');
    $('.game-list').hide();
    
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });

});
