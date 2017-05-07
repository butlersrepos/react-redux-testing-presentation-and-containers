import React from "react";
import ReactDOM from "react-dom";

window.React = React;
window.ReactDOM = ReactDOM;

window.$ = selector => document.querySelector(selector)
window.$$ = selector => document.querySelectorAll(selector)

const createFakeStore = fakeData => {
    window.dispatchSpy = jest.fn()
    window.subscribeSpy = jest.fn()

    return {
        dispatch: window.dispatchSpy,
        subscribe: window.subscribeSpy,
        getState() {
            return fakeData
        }
    }
}

window.createFakeStore = createFakeStore