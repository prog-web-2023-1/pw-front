function slideDown(el) {
    if (!el) return;

    console.log(el)

    let height = 0;

    el.classList.add('opacity-0');
    el.classList.remove('max-h-0');

    height = el.offsetHeight;
    el.classList.add('max-h-0');
    el.classList.remove('opacity-0');

    setTimeout(() => {
        el.style.maxHeight = height + 'px';
        el.classList.remove('max-h-0');
        el.classList.add('open');
    }, 10);
}

function slideUp(el) {
    if (!el) return;

    el.classList.add('max-h-0');
    el.classList.remove('open');
    el.style.maxHeight = null;
}
  
export { slideDown, slideUp };