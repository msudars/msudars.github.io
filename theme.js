// Theme: follow the system setting unless the visitor has chosen with the toggle.
(function () {
    var root = document.documentElement, KEY = 'theme';
    function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
    function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
    function current() {
        return root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    var t = stored();
    if (t === 'dark' || t === 'light') root.dataset.theme = t;

    addEventListener('DOMContentLoaded', function () {
        var bar = document.querySelector('.topbar .wrap');
        if (!bar) return;
        var b = document.createElement('button');
        b.className = 'theme-toggle'; b.type = 'button';
        function paint() {
            var dark = current() === 'dark';
            b.textContent = dark ? '☀' : '☾';
            b.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
            b.title = b.getAttribute('aria-label');
        }
        b.addEventListener('click', function () {
            var next = current() === 'dark' ? 'light' : 'dark';
            root.dataset.theme = next; save(next); paint();
        });
        bar.appendChild(b); paint();
    });
})();
