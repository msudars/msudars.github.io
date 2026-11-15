// Reading-charge bar: fills as you scroll; says thanks at 100%.
(function () {
    var bar = document.createElement('div');
    bar.id = 'charge';
    bar.title = 'Reading charge';
    document.body.prepend(bar);
    var msg = document.querySelector('.full-msg');
    function update() {
        var max = document.documentElement.scrollHeight - innerHeight;
        var pct = max > 0 ? Math.min(100, (scrollY / max) * 100) : 100;
        bar.style.width = pct + '%';
        if (msg) msg.classList.toggle('on', pct > 99);
    }
    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    update();
})();
