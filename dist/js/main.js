'use strict';

var flash = void 0;

document.addEventListener('DOMContentLoaded', function (event) {
    // console.log('test ready');
    flash = document.querySelector('path#path0_fill');

    var test = false;

    setInterval(function () {
        return flash.classList.toggle('active');
    }, 250);
});