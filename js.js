window.onscroll = function() {
  scrollAnim()
};

function scrollAnim() {
  var Logo = document.getElementById("logo");
  var Name = document.getElementById("name");
  var Head = document.getElementById("header");
  var x = window.matchMedia("(max-width: 500px)");

  //mobile
  if (x.matches) {
    Logo.style.width = '70vw';
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      Logo.style.width = '100px';
      Logo.style.top = '5%';
    } else {
      Logo.style.width = '';
      Logo.style.top = '';
    }
  }

  //desktop
  else{
    Logo.style.width = '50vw';
    if (document.body.scrollTop > 225 || document.documentElement.scrollTop > 225) {
      Logo.style.width = '100px';
      Logo.style.top = '5%';
      Logo.style.left = '7%';
      Name.style.left = '7%';
      Head.style.opacity = '1';
    } else {
      Logo.style.width = '';
      Logo.style.top = '';
      Logo.style.left = '';
      Logo.style.transform = '';
      Logo.style.position = '';
      Name.style.left = '';
      Head.style.opacity = '';
    }
  }
}
