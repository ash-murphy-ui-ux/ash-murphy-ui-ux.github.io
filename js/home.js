function runSA(){
var path = window.location.hash;
if (path == '#home'){
  document.querySelector("#logo").classList.add("unscrolled");
  document.addEventListener('scroll', scrollAnim);
  window.addEventListener('resize', scrollAnim);
  console.log(path);
} else {
  document.querySelector("#logo").classList.remove("unscrolled");
  }
}

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
    if (document.body.scrollTop > 225 || document.documentElement.scrollTop > 225) {
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
