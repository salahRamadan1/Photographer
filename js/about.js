$(window).scroll(function () {
    let navBar = $(".navbar").offset().top;
  
    let iconAboutPa = $("#iconAboutPa").offset().top;
    let iconUp = document.getElementById("iconUp");
  
    iconUp.addEventListener("click", function () {
      this.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  
    if (navBar >= iconAboutPa) {
      iconUp.style.display = "inline";
    } else {
      iconUp.style.display = "none";
    }
  });
  

  $(document).ready(function(){

    $("#spinner-border").fadeOut(1000 ,function(){
      $("#backGroundColorLoading").fadeOut(500 , function(){
        $("body").css("overflow" , "auto")
        $("#navbar").css("display" , "flex")
      })
    })
    
    })