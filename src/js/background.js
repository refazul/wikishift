// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
import React from 'react';
import ReactDOM from 'react-dom';

console.log("Background");

chrome.browserAction.onClicked.addListener(function (tab) {
    // No tabs or host permissions needed!
    chrome.tabs.executeScript({
        code: 'alert("clicked");',
        allFrames: true
    });
});