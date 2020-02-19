import React from 'react';
import ReactDOM from 'react-dom';

console.log('Starting content.js');

window.onresize = function () {
    //document.querySelector('#toc > ul').style.height = (window.innerHeight - 58) + 'px';
}
//document.querySelector('#toc > ul').style.height = (window.innerHeight - 58) + 'px';

function utl_env_page_script_run(script) {
    // Add a script to the page
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.textContent = script;
    document.getElementsByTagName('head')[0].appendChild(s);
    document.getElementsByTagName('head')[0].removeChild(s);
    return true;
}

utl_env_page_script_run(`
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
`)

document.addEventListener("keydown", function (e) {
    if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 32) {
        e.preventDefault();
        // Process the event here (such as click on submit button)
        utl_env_page_script_run(`
            var flashvars = eval('flashvars_' + ad_player_id);
            console.log('flashvars', flashvars);
            openInNewTab(flashvars.quality_720p);
        `);
    }
}, false);