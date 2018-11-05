const classNameOpen = 'open';
const screen_sm_max = 991;

var clickableElements = document.querySelectorAll('[data-open]');

// from https://github.com/ryanve/verge
function viewportW() {
    var win = typeof window != 'undefined' && window;
    var doc = typeof document != 'undefined' && document;
    var docElem = doc && doc.documentElement;
    var a = docElem['clientWidth'], b = win['innerWidth'];
    return a < b ? b : a;
};
      
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

function set_to_screen(element) {
    if (viewportW() > screen_sm_max) {
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

// add click listeneres
for (var i=0; i<clickableElements.length; i++) {
    var element = clickableElements[i];
    set_to_screen(element);
    element.addEventListener('click', toggle);
}
// add resize listener to auto-open/close on window resize
window.addEventListener('resize', function(event){
    console.log("Triggering resize event");
    for (var i=0; i<clickableElements.length; i++) {
        var element = clickableElements[i];
        set_to_screen(element);
    }
});

console.log('Initialized menu')