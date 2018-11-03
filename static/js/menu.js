(function() {
    const classNameOpen = 'open';

    function setOpen(element) {
        var target = document.getElementById(element.getAttribute('data-open'));
        var lists = target.getElementsByTagName('ul');
        target.classList.add(classNameOpen);
        for (var i=0; i<lists.length; i++) {
            var ul = lists[i];
            ul.style.display = 'block';
        }
    }

    function setClosed(element) {
        var target = document.getElementById(element.getAttribute('data-open'));
        var lists = target.getElementsByTagName('ul');
        target.classList.remove(classNameOpen);
        for (var i=0; i<lists.length; i++) {
            var ul = lists[i]
            ul.style.display = 'none';
        }
    }

    function init(element) {
        var target = document.getElementById(element.getAttribute('data-open'));
        if (target.classList.contains(classNameOpen)) {
            setOpen(element);
        } else {
            setClosed(element);
        }
    }

    function toggle(event) {
        var element = event.currentTarget;
        var target = document.getElementById(element.getAttribute('data-open'));
        if (target.classList.contains(classNameOpen)) {
            setClosed(element);
        } else {
            setOpen(element);
        }
    }

    var clickableElements = document.querySelectorAll('[data-open]');

    for (var i=0; i<clickableElements.length; i++) {
        var element = clickableElements[i];
        init(element);
        element.addEventListener('click', toggle);
    }
})();