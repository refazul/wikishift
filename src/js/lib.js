function ajax_post_data_process(post_data) {
    var post_data_array = [];
    for (var i in post_data) {
        post_data_array.push(i + '=' + encodeURIComponent(post_data[i]))
    }
    return post_data_array.join('&');
}
function ajax_post(url, post_data, callback_s, callback_f) {
    var httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send(ajax_post_data_process(post_data));

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                if (typeof callback_s === 'function') {
                    callback_s(httpRequest.responseText);
                }
            } else {
                console.log('There was a problem with the request.');
                if (typeof callback_f === 'function') {
                    callback_f(false);
                }
            }
        }
    }
}

function dom_search_by_text(searchText, tag_name) {
    tag_name = tag_name || 'div';

    var tags = document.getElementsByTagName(tag_name);
    var found = false;

    for (var i = 0; i < tags.length; i++) {
        if (tags[i].textContent == searchText) {
            found = tags[i];
            break;
        }
    }
    return found;
}
function dom_search_by_text_all(searchText, tag_name) {
    tag_name = tag_name || 'div';

    var tags = document.getElementsByTagName(tag_name);
    var found = [];

    for (var i = 0; i < tags.length; i++) {
        if (tags[i].textContent == searchText) {
            found.push(tags[i]);
        }
    }
    return found;
}
function dom_nth_sibling(node, n) {
    n = n || 0;
    if (node) {
        var nextSibling = node.nextSibling;
        var j = 0;
        while (nextSibling) {
            if (nextSibling.nodeType == 1) {
                if (j == n) {
                    return nextSibling;
                }
                j++;
            }
            nextSibling = nextSibling.nextSibling;
        }
    }
}
function dom_nth_child(node, n) {
    n = n || 0;
    if (node) {
        const childNodes = node.childNodes;
        for (var i = 0, j = 0; i < childNodes.length; i++) {
            if (childNodes[i].nodeType == 1) {
                if (j == n) {
                    return childNodes[i];
                }
                j++;
            }
        }
    }
}
function dom_textContent_get(node) {
    if (node) {
        return node.textContent;
    }
    return '';
}

function select_selected_value_get(select_dom) {
    if (select_dom && select_dom.selectedIndex) {
        return select_dom[select_dom.selectedIndex].value;
    }
}

function string_lowercase(string) {
    if (typeof string === 'string') {
        return string.toLowerCase();
    }
    return string;
}
function string_nonempty_is(string) {
    if (typeof string === 'string' && string.length > 0) {
        return true;
    }
    return false;
}
function string_contains(string, needle) {
    // If number, convert it to string
    if (typeof string === 'number') {
        string += '';
    }
    // Check if string before checking indexOf
    if (typeof string === 'string' && string.indexOf(needle) > -1) {
        return true;
    }
    return false;
}

function window_open(url) {
    window.open(url, '_blank');
}
function window_close() {
    window.close();
}
function window_close_delayed() {
    setTimeout(function () {
        window_close();
    }, Math.floor(Math.random() * 1 * 1000) + 1);
}

function url_param_get_by_name(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function send_message_to_background(message, callback) {
    chrome.runtime.sendMessage(message, function (response_ext) {
        if (typeof callback === 'function') {
            callback(response_ext);
        }
    });
}