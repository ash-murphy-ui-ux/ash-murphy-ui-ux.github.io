function runSA(){
var path = window.location.hash;
var Logo = document.querySelector("#logo");
if (path == '#home' || path == ''){
  Logo.classList.add("unscrolled");
  Logo.style.top = '';
  Logo.style.left = '';
  Logo.style.width = '';
  Logo.style.margin = '';
  document.addEventListener('scroll', scrollAnim);
  window.addEventListener('load', scrollAnim);
  window.addEventListener('resize', scrollAnim);
} else {
  //need to style inline or else it gets overwitten even though haschange should be stopping it from being overwritten
  Logo.style.top = '40px';
  Logo.style.left = '7%';
  Logo.style.width = '80px';
  Logo.style.margin = '0 0 0 0';
  }
};

window.addEventListener('hashchange', runSA);
window.addEventListener('load', runSA);



function scrollAnim() {
  var Logo = document.querySelector("#logo");
  var Name = document.querySelector("#name");
  var Desc = document.querySelector("#desc");
  var x = window.matchMedia("(max-width: 600px)");
  //mobile
  if (x.matches) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      Logo.classList.remove("unscrolled");
      Name.classList.add("scrolled");
      Desc.classList.add("scrolled");
    } else {
      Logo.classList.add("unscrolled");
      Name.classList.remove("scrolled");
      Desc.classList.remove("scrolled");
    }
  }

  //desktop
  else{
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      Logo.classList.remove("unscrolled");
      Name.classList.add("scrolled");
      Desc.classList.add("scrolled");
    } else {
      Logo.classList.add("unscrolled");
      Name.classList.remove("scrolled");
      Desc.classList.remove("scrolled");
    }
  }
}
