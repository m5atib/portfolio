function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      console.log("🚀 ~ file: main.js ~ line 5 ~ reveal ~ windowHeight", windowHeight)
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        
        reveals[i].classList.add("active");
        
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

window.addEventListener("load", reveal);

window.addEventListener("scroll", reveal);
reveal()