//mobile menu
(function() {

	var hamburger = {
		menuToggle: document.querySelector('#navBurger'),
		menu: document.querySelector('menu'),
		doToggle: function(e) {
			e.preventDefault();
			this.menuToggle.classList.toggle('open');
			this.menu.classList.toggle('openM');
		}
	};

	hamburger.menuToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

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
window.addEventListener('hashchange', navActive, false);
document.querySelector('#nav').addEventListener('load', navActive(event), false);

function navActive(e) {
	e.preventDefault;
	document.querySelector('#wrap').classList.remove('moveout');
	void document.querySelector('#wrap').offsetWidth;
	var path = window.location.hash;
	document.querySelector('#wrap').classList.add('moveout');

	if (path == '#home' || path == ''){
		document.querySelector('#homelink').classList.add('active');
		document.querySelector('#portlink').classList.remove('active');
		document.querySelector('#contlink').classList.remove('active');

	} else if (path == '#portfolio'){
		document.querySelector('#homelink').classList.remove('active');
		document.querySelector('#portlink').classList.add('active');
		document.querySelector('#contlink').classList.remove('active');

	} else if (path == '#contact'){
		document.querySelector('#portlink').classList.remove('active');
		document.querySelector('#homelink').classList.remove('active');
		document.querySelector('#contlink').classList.add('active');
	}
};
