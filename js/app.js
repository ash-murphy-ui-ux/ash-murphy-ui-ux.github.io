'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('portfolio', 'portfolio.html'),
            new Route('contact', 'contact.html'),
            new Route('portfolio/nidus', 'portfolio/port-test.html'),
            new Route('portfolio/energyumpire', 'portfolio/port-test.html'),
            new Route('portfolio/darkspede', 'portfolio/port-test.html'),
            new Route('portfolio/icondesigns', 'portfolio/port-test.html')
        ]);
    }
    init();
}());
