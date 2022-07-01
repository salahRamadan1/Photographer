$(window).scroll(function () {
  let navBarBack = document.getElementById("navbar");
  let navBar = $(".navbar").offset().top;
  let changeNav = $("#changeNavBarByH3").offset().top;
  let iconUp = document.getElementById("iconUp");

  if (navBar >= changeNav) {
    navBarBack.style.background = "#202020";
    navBarBack.style.paddingRight = "70px";
    iconUp.style.display = "inline";

  } else {
    navBarBack.style.background = "transparent";
    navBarBack.style.paddingRight = "0px";
    iconUp.style.display = "none";

  }
});
let backGroundColorLoading = document.getElementById("backGroundColorLoading")


$(document).ready(function(){

$("#spinner-border").fadeOut(1000 ,function(){
  $("#backGroundColorLoading").fadeOut(500 , function(){
    $("body").css("overflow" , "auto")
    $("#navbar").css("display" , "flex")
  })
})

})
