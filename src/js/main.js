
let flash;

document.addEventListener('DOMContentLoaded', function (event) {
    // console.log('test ready');
    flash = document.querySelector('path#path0_fill');

    let test = false;

    setInterval(() => flash.classList.toggle('active'), 250);
});
