(function() {

	var hamburger = {
		navToggle: document.querySelector('#nav-icon3'),
		nav: document.querySelector('nav'),

		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('open');
			this.nav.classList.toggle('open');
		}
	};

	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());
