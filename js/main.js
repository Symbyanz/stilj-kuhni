let isMobile = {
  Android: function() {return navigator.userAgent.match(/Android/i);},
  BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
  iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
  Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
  Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
  any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
let body=document.querySelector('body');

if(isMobile.any()){
  body.classList.add('touch');
}else{
  body.classList.add('mouse');
};


$(document).ready( function(){

// Smooth scrolling

$('button[href^="#"]').click(function() {
  var elementClick = $(this).attr("href");

  $('button.block_active').removeClass('block_active');
  $(this).addClass('block_active'); 
  
  var destination = $(elementClick).offset().top;
  $("html:not(:animated), body:not(:animated)").animate({
    scrollTop: destination
  }, 800);
  return false;
});






// Show/Hide cataloge
// $('#equipment_more').readmore({
//   speed: 200,
//   collapsedHeight: 0,
//   moreLink: '<a class="btn btn_bold">Показать полный каталог</a>',
//   lessLink: false
// });


// Kitchen toggle
$('.kitchen_slider').hide();
$('.kitchen_slider:first').show();
$('.btn_kitchen:first').addClass('btn_kitchen_active');

//toggle select
$('.toggle_kitchen').on('change', function() {
  $('.kitchen_slider').slick('unslick'); 
  $('.kitchen_slider').hide();
  $($(this).val()).show();
  $('.kitchen_slider').slick(); 
});
// toggle buttons
$('.btn_kitchen').click(function(event){
  $('.btn_kitchen').removeClass('btn_kitchen_active');
  $(this).addClass('btn_kitchen_active'); 

  $('.kitchen_slider').slick('unslick'); 
  $('.kitchen_slider').hide();
  $($(this).attr("data_obj")).show();
  $('.kitchen_slider').slick(); 
});





// Materials toggle
$('.materials_box').hide();
$('.materials_box:first').show();
$('.btn_materials:first').addClass('btn_materials_active');

//toggle select
$('.toggle_materials').on('change', function() {
  $('.materials_box').hide();
  $($(this).val()).show();
});
// toggle buttons
$('.btn_materials').click(function(event){
  $('.btn_materials').removeClass('btn_materials_active');
  $(this).addClass('btn_materials_active'); 

  $('.materials_box').hide();
  $($(this).attr("data_obj")).show();
});



// Premium toggle
$('.premium_box').hide();
$('.premium_box:first').show();
$('.btn_premium:first').addClass('btn_premium_active');
//toggle select
$('.toggle_premium').on('change', function() {
  $('.premium_box').hide();
  $($(this).val()).show();
});
// toggle buttons
$('.btn_premium').click(function(event){
  $('.btn_premium').removeClass('btn_premium_active');
  $(this).addClass('btn_premium_active'); 

  $('.premium_box').hide();
  $($(this).attr("data_obj")).show();
});


});











// Popups
let close_form = (id) => {
  $('body').css('overflow', 'auto');
  $(id).fadeOut(300);
};
// fadeIn 
let open_form = (id) => {
  $('body').css('overflow', 'hidden');
  $(id).fadeIn(300);
};



let close_form2 = (id) => {
  $(id).fadeOut(300);
  $('.quick_call').find(".circle").fadeIn(300);
};
// fadeIn 
let open_form2 = (id) => {
  $('.quick_call').find(".question").fadeOut(300);
  $('.quick_call').find(".circle").fadeOut(300);
  $(id).fadeIn(300);
};






// let open_form = (id) => $(id).hide();


// all sliders
$('.reviews_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

$('.kitchen_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});















let quizOne = ["Прямая", "Угловая", "П-образная", "Двухрядная", "Островная", "Полуостровная"];
let quizTwo = ["Пластик", "Массив", "Крашенный фасад", "МДФ-плёнка"];


let resultQuiz1 = "не указано";
let resultQuiz2 = "не указано";
let resultQuiz3  = "не указано";


// Pupup quiz
$('.quiz_item_1 > span').hide();
$('.quiz_item_2 > span').hide();



// First question
$('.quiz_item_1').click(function() {
  let activeSpan = $("<span></span>");

  $('.quiz_item_1 > span').hide();
  $(this).append(activeSpan);
  resultQuiz1 = quizOne[$(this).attr("data_obj") ];

});

// Second question
$('.quiz_item_2').click(function() {
  let activeSpan = $("<span></span>");

  $('.quiz_item_2 > span').hide();
  $(this).append(activeSpan);
  resultQuiz2 = quizTwo[$(this).attr("data_obj") ];

});


  // $($(this).attr("data_obj")).show();


  let toggleQuiz = (quizNumber) => {
    if (quizNumber == 'quizOne'){

      $('#quiz_one').fadeIn(0);
      $('#quiz_two').fadeOut(0);
      $('#quiz_three').fadeOut(0);
      $('#quiz_four').fadeOut(0);

      $('.quiz_progress').text("1/3");
      $('.quiz_progress2').css('width', '2%');

    } else if(quizNumber == 'quizTwo') {

      $('#quiz_one').fadeOut(0);
      $('#quiz_two').fadeIn(0);
      $('#quiz_three').fadeOut(0);
      $('#quiz_four').fadeOut(0);

      $('.quiz_progress').text("2/3");
      $('.quiz_progress2').css('width', '36%');

    } else if(quizNumber == 'quizThree') {
      $('.quiz_box> .top-end').fadeOut(0);
      $('.quiz_box> .top').fadeIn(0);

      $('#quiz_one').fadeOut(0);
      $('#quiz_two').fadeOut(0);
      $('#quiz_three').fadeIn(0);
      $('#quiz_four').fadeOut(0);

      $('.quiz_progress').text("3/3");
      $('.quiz_progress2').css('width', '70%');

    } else if(quizNumber == 'quizFour') {

      resultQuiz3 = $('#kitchen_size').val();

      $('.quiz_box> .top').fadeOut(0);
      $('.quiz_box> .top-end').fadeIn(0);

      $('#quiz_one').fadeOut(0);
      $('#quiz_two').fadeOut(0);
      $('#quiz_three').fadeOut(0);
      $('#quiz_four').fadeIn(0);

      $('.quiz_progress').text("");
      $('.quiz_progress2').css('width', '100%');

    } else {
      console.log('error');
    }
  };











  let phonenumber = (inputtxt) => {
    var phoneno = /^((\+7|7|8)+([0-9]){10})/;
    if (inputtxt.match(phoneno))
      return true;
    return false;
  }

  let data_validation = (name, phone) =>{
    if (name === undefined || phone === undefined) {
      alert("Произошла ошибка!");
      return false;
    }else if (name.val().length <= 3) {
      alert("Количество символов в поле имени должно быть больше 3");
      return false;
    }else if (!phonenumber(phone.val())) {
      alert("Введите корректный номер телефона");
      return false;
    }else{
      return true;
    }   
  }



  $("#sendRequest").on('click', function() {
    let phone = $("#phone");
    let name = $("#name");
    if(data_validation(name, phone)){
      $.ajax({
        url: 'sendform.php',
        type: 'POST',
        data: {'send': 1, 'name': name.val(), 'phone': phone.val(), 'type_kitchen': resultQuiz1, 'material_kitchen': resultQuiz2, 'size_kitchen': resultQuiz3},
        success: function (res) {
          alert('Заявка отправлена!');
          $("#phone").val('');
          $("#name").val('');
        }
      });
    }
    return false;
  });


  $("#sendRequest2").on('click', function() {
    let phone = $("#phone2");
    let name = $("#name2");
    if(data_validation(name, phone)){
      $.ajax({
        url: 'sendform.php',
        type: 'POST',
        data: {'send': 1, 'name': name.val(), 'phone': phone.val(), 'type_kitchen': resultQuiz1, 'material_kitchen': resultQuiz2, 'size_kitchen': resultQuiz3},
        success: function (res) {
          alert('Заявка отправлена!');
          $("#phone2").val('');
          $("#name2").val('');
        }
      });
    }
    return false;
  });


  $("#sendRequest3").on('click', function() {
    let phone = $("#phone3");

    if (!phonenumber(phone.val())) {
      alert("Введите корректный номер телефона");
      return false;
    } else {
      close_form('#popup_quiz');

      $.ajax({
        url: 'sendform.php',
        type: 'POST',
        data: {'send': 1, 'name': 'не указано', 'phone': phone.val(), 'type_kitchen': resultQuiz1, 'material_kitchen': resultQuiz2, 'size_kitchen': resultQuiz3},
        success: function (res) {
          alert('Заявка отправлена!');
          $("#phone3").val('');
        }
      });
    }
    return false;
  });


  $("#sendRequest4").on('click', function() {
    let phone = $("#phone4");

    if (!phonenumber(phone.val())) {
      alert("Введите корректный номер телефона");
      return false;
    } else {
      $.ajax({
        url: 'sendform.php',
        type: 'POST',
        data: {'send': 1, 'name': 'имя не указано', 'phone': phone.val(), 'type_kitchen': resultQuiz1, 'material_kitchen': resultQuiz2, 'size_kitchen': resultQuiz3},
        success: function (res) {
          alert('Заявка отправлена!');
          $("#phone4").val('');
        }
      });
    }
    return false;
  });


  $("#sendRequest5").on('click', function() {
    let phone = $("#phone5");
    let name = $("#name5");
    if(data_validation(name, phone)){
      $.ajax({
        url: 'sendform.php',
        type: 'POST',
        data: {'send': 1, 'name': name.val(), 'phone': phone.val(), 'type_kitchen': resultQuiz1, 'material_kitchen': resultQuiz2, 'size_kitchen': resultQuiz3},
        success: function (res) {
          alert('Заявка отправлена!');
          $("#phone5").val('');
          $("#name5").val('');
        }
      });
    }
    return false;
  });


  $("#sendRequest6").on('click', function() {
    let phone = $("#phone6");
    let name = $("#name6");
    if(data_validation(name, phone)){
      $.ajax({
        url: 'sendform.php',
        type: 'POST',
        data: {'send': 1, 'name': name.val(), 'phone': phone.val(), 'type_kitchen': resultQuiz1, 'material_kitchen': resultQuiz2, 'size_kitchen': resultQuiz3},
        success: function (res) {
          alert('Заявка отправлена!');
          $("#phone6").val('');
          $("#name6").val('');
        }
      });
    }
    return false;
  });

  $("#sendRequest7").on('click', function() {
    let phone = $("#phone7");

    if (!phonenumber(phone.val())) {
      alert("Введите корректный номер телефона");
      return false;
    } else {
      $.ajax({
        url: 'sendform.php',
        type: 'POST',
        data: {'send': 1, 'name': 'не указано', 'phone': phone.val(), 'type_kitchen': resultQuiz1, 'material_kitchen': resultQuiz2, 'size_kitchen': resultQuiz3},
        success: function (res) {
          alert('Заявка отправлена!');
          $("#phone7").val('');
        }
      });
    }
    return false;
  });
