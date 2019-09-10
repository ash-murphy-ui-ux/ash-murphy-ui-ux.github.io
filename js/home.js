window.onscroll = function() {
  scrollAnim()
};

window.onload = function() {
  scrollAnim()
};

window.onresize = function() {
  scrollAnim()
};

function scrollAnim() {
  var Logo = document.querySelector("#logo");
  var Name = document.querySelector("#name");
  var Desc = document.querySelector("#desc");
  var x = window.matchMedia("(max-width: 600px)");
  //mobile
  if (x.matches) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      Logo.classList.add("scrolled");
      Name.classList.add("scrolled");
      Desc.classList.add("scrolled");
    } else {
      Logo.classList.remove("scrolled");
      Name.classList.remove("scrolled");
      Desc.classList.remove("scrolled");
    }
  }

  //desktop
  else{
    if (document.body.scrollTop > 225 || document.documentElement.scrollTop > 225) {
      Logo.classList.add("scrolled");
      Name.classList.add("scrolled");
      Desc.classList.add("scrolled");
    } else {
      Logo.classList.remove("scrolled");
      Name.classList.remove("scrolled");
      Desc.classList.remove("scrolled");
    }
  }
}
