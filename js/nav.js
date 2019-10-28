//mobile menu
(function() {

	var hamburger = {
		menuToggle: document.querySelector('#navBurger'),
		menu: document.querySelector('menu'),
		doToggle: function(e) {
			e.preventDefault();
			this.menuToggle.classList.toggle('open');
			this.menu.classList.toggle('openM');
			wrap.classList.toggle('pushed');
		}
	};

	hamburger.menuToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());

wrap.addEventListener('click', closeMenu);
document.querySelector('#homelink').addEventListener('click', closeMenu);
document.querySelector('#portlink').addEventListener('click', closeMenu);
document.querySelector('#contlink').addEventListener('click', closeMenu);
function closeMenu(e){
	if (document.querySelector('#navBurger').classList.contains('open') && document.querySelector('menu').classList.contains('openM')){
		document.querySelector('#navBurger').classList.toggle('open');
		document.querySelector('menu').classList.toggle('openM');
		wrap.classList.toggle('pushed');
	}
};



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
function transOut(){
	
};

function navActive() {
	var oldHashLocal = oldHash;
	console.log("oldHashLocal  = ", oldHashLocal);
	var homelink = document.querySelector('#homelink');
	var portlink = document.querySelector('#portlink');
	var contlink = document.querySelector('#contlink');
	var wrap = document.querySelector('#wrap');
	wrap.classList.remove('moveright');
	wrap.classList.remove('moveleft');
	wrap.classList.remove('moveup');
	wrap.classList.remove('movedown');
	void wrap.offsetWidth;
	var path = window.location.hash;
	if (path.indexOf("#portfolio/") > -1){
		wrap.classList.add('movedown');
	}
	else if (path == '#home' || path == ''){
		homelink.classList.add('active');
		portlink.classList.remove('active');
		contlink.classList.remove('active');
			if (oldHashLocal  == 'portfolio' || oldHashLocal  == 'contact'){
			wrap.classList.add('moveleft');
		};
	} else if (path == '#portfolio'){
		homelink.classList.remove('active');
		portlink.classList.add('active');
		contlink.classList.remove('active');
			if (oldHashLocal  == 'contact'){
			wrap.classList.add('moveleft');}
			else if (oldHashLocal  == 'home' || oldHashLocal  == undefined){
			wrap.classList.add('moveright');}
			else if (oldHash.indexOf("portfolio/") > -1){
			wrap.classList.add('moveup');
			};
	} else if (path == '#contact'){
		portlink.classList.remove('active');
		homelink.classList.remove('active');
		contlink.classList.add('active');
			if (oldHashLocal  == 'home' || oldHashLocal  == undefined || oldHashLocal  == 'portfolio'){
			wrap.classList.add('moveright');};
	}
};
