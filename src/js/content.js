import React from 'react';
import ReactDOM from 'react-dom';

console.log('Starting content.js');

window.onresize = function () {
    document.querySelector('#toc > ul').style.height = (window.innerHeight - 58) + 'px';
}
document.querySelector('#toc > ul').style.height = (window.innerHeight - 58) + 'px';