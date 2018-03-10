/*
	Author: LAB

	Global singleton
	Used to share global config

    LICENSE: MIT
*/

"use strict";
var app = app || {};

app.Global = Object.freeze({
    HALF_PI: Math.PI / 2,
    TWO_PI: Math.PI * 2,
    COLOR: {
        WHITE: "#EEEEEE",
        BLACK: "#333333",
        RED: "#FD5B78",
        REDORANGE: "#FF6037",
        ORANGE: "#FF9966",
        YELLOW: "#FFFF66",
        GREEN: "#66FF66",
        BLUE: "#50BFE6",
        PINK: "#FF6EFF",
        PURPLE: "#EE34D2"
    },
    KEYBOARD: {
        KEY_LEFT: 37,
        KEY_UP: 38,
        KEY_RIGHT: 39,
        KEY_DOWN: 40,
        KEY_SPACE: 32,
        KEY_SHIFT: 16
    },
    BASIC_SHAPE: {
        Circle: 'Circle',
        Square: 'Square',
        Triangle: 'Triangle',
        Diamond: 'Diamond'
    }
});