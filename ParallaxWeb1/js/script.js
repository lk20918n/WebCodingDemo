let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

const maxScroll = document.body.scrollHeight - window.innerHeight;
let lastScroll = 0;

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (value > maxScroll) {
        value = maxScroll;
    }

    let scrollDelta = value - lastScroll;
    lastScroll = value;

    text.style.marginTop = (parseFloat(getComputedStyle(text).marginTop) + scrollDelta * 2.5) + 'px';
    leaf.style.top = (parseFloat(getComputedStyle(leaf).top) - scrollDelta * 1.5) + 'px';
    leaf.style.left = (parseFloat(getComputedStyle(leaf).left) + scrollDelta * 1.5) + 'px';
    hill5.style.left = (parseFloat(getComputedStyle(hill5).left) + scrollDelta * 1.5) + 'px';
    hill4.style.left = (parseFloat(getComputedStyle(hill4).left) - scrollDelta * 1.5) + 'px';
    hill1.style.top = (parseFloat(getComputedStyle(hill1).top) + scrollDelta * 1) + 'px';
})
