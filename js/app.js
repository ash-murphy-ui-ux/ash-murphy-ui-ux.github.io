'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('portfolio', 'portfolio.html'),
            new Route('contact', 'contact.html'),
            new Route('portfolio/nidus', 'portfolio/portItem.html'),
            new Route('portfolio/energyumpire', 'portfolio/portItem.html'),
            new Route('portfolio/darkspede', 'portfolio/portItem.html'),
            new Route('portfolio/icondesigns', 'portfolio/portItem.html')
        ]);
    }
    init();
}());
