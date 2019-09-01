window.onscroll = function() {
  scrollAnim()
};

window.onresize = function() {
  scrollAnim()
};

function scrollAnim() {
  var Logo = document.querySelector("#logo");
  var Name = document.querySelector("#name");
  var Head = document.querySelector("header");
  var x = window.matchMedia("(max-width: 600px)");

  //mobile
  if (x.matches) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      Logo.style.width = '100px';
      Logo.style.top = '5%';
      Logo.style.left = '5%';
      Logo.style.margin = '0 0 0 0';
      Name.style.opacity = '0';
      Name.style.left = '0';
      Name.style.top = '25%';
    } else {
      Logo.style.width = '';
      Logo.style.top = '';
      Logo.style.left = '';
      Logo.style.margin = '';
      Name.style.opacity = '';
      Name.style.left = '';
      Name.style.top = '';
    }
  }

  //desktop
  else{
    if (document.body.scrollTop > 225 || document.documentElement.scrollTop > 225) {
      Logo.style.width = '100px';
      Logo.style.top = '25px';
      Logo.style.left = '7%';
      Name.style.left = '7%';
      Name.style.opacity = '1'
      Name.style.top = ''
      Head.style.opacity = '1'
    } else {
      Logo.style.width = '';
      Logo.style.top = '';
      Logo.style.left = '';
      Name.style.left = '';
      Name.style.opacity = '1'
      Name.style.top = ''
    }
  }
}
