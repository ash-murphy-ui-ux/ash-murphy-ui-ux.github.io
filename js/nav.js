//mobile menu
(function() {

	var hamburger = {
		navToggle: document.querySelector('#navBurger'),
		nav: document.querySelector('menu'),
		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('open');
			this.nav.classList.toggle('closedM');
			this.nav.classList.toggle('openM');
		}
	};

	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());


//night mode switch
const toggleSwitch = document.querySelector('.dark-btn #dark-btncheckbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);


//active nav link
document.querySelector('#nav').addEventListener('click',
function navActive(e) {
  if (document.querySelector('#nav a.active') !== null) {
    document.querySelector('#nav a.active').classList.remove('active');
  }
  e.target.className = "active";
});
