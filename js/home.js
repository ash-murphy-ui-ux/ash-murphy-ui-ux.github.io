/*trigger animation*/
window.addEventListener('hashchange', runSA);
window.addEventListener('load', runSA);

/*animate if home is active*/
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
  //need to style inline or else it gets overwitten even though hashchange should be stopping it from being overwritten
Logo.classList.remove("unscrolled");
    Logo.style.top = '40px';
    Logo.style.left = '7vw';
    Logo.style.width = '80px';
    Logo.style.margin = '0 0 0 0';
  }
};

/*home page animation code*/
function scrollAnim() {
  var Logo = document.querySelector("#logo");
  var Name = document.querySelector("#name");
  var Desc = document.querySelector("#desc");
  var Arrow = document.querySelector(".d-arrow");
  var x = window.matchMedia("(max-width: 750px)");
  //mobile
  if (x.matches) {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      setTimeout(function(){
      Logo.classList.remove("unscrolled");}, 0);
      Name.classList.add("scrolled");
      Desc.classList.add("scrolled");
      Arrow.classList.add("scrolled");
    } else {
      setTimeout(function(){
      Logo.classList.add("unscrolled");}, 0);
      Name.classList.remove("scrolled");
      Desc.classList.remove("scrolled");
      Arrow.classList.remove("scrolled");
    }
  }

  //desktop
  else{
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      setTimeout(function(){
      Logo.classList.remove("unscrolled");}, 0);
      Name.classList.add("scrolled");
      Desc.classList.add("scrolled");
      Arrow.classList.add("scrolled");
    } else {
      setTimeout(function(){
      Logo.classList.add("unscrolled");}, 0);
      Name.classList.remove("scrolled");
      Desc.classList.remove("scrolled");
      Arrow.classList.remove("scrolled");
    }
  }
};

function scrollDown(){
  var x = window.matchMedia("(max-width: 750px)");
  //mobile
  if (x.matches) {
    document.body.scrollTop = 650;
    document.documentElement.scrollTop = 650;
  }else{
  document.body.scrollTop = 750;
  document.documentElement.scrollTop = 750;
  }
};
