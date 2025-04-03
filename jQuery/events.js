$(document).ready(function(){
  // focus
  $("#sname,#sclass,#scountry, #semail").focus(function(){
    $(this).css("background-color","grey");
  });
//  blur 
  $("#sname,#sclass,#scountry, #semail").blur(function(){
    $(this).css("background-color","");
  });
// change
  $("#scountry").change(function(){
    let country = $(this).val();
    $(".render-cntry").html(country);
  });
// select
  $("#sname,#sclass, #semail").select(function(){
    $(this).css("background-color","tan");
  });
//  submit
$("#sform").submit(function(){
  alert("submited");
});

});