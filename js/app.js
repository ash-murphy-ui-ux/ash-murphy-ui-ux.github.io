'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('portfolio', 'portfolio.html'),
            new Route('contact', 'contact.html')
        ]);
    }
    init();
}());
