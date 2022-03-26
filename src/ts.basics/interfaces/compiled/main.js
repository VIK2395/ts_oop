"use strict";
/* eslint-disable @typescript-eslint/no-inferrable-types */
Object.defineProperty(exports, "__esModule", { value: true });
var Singer = /** @class */ (function () {
    function Singer(name, popularity) {
        // NO warnings shown that ISinger.id is readonly
        this.id = 1; // initialization
        this.name = 'unknown'; // intialization
        this.albums = 27; // initialization
        this.privateProp = 'privateProp';
        this.protectedProp = 'protectedProp';
        console.log(this);
        this.name = name;
        console.log('name(constructor prop): ' + this.name);
        // initialization
        this.popularity = popularity;
    }
    Singer.prototype.sing = function (words) {
        console.log(words);
    };
    Singer.prototype.setAlbums = function (albums) {
        this.albums = albums;
    };
    return Singer;
}());
var singer = new Singer('Biber', 'high');
console.log(singer);
singer.sing('Lalala!');
// Reassign works because readonly was NOT applied to Singer.id
singer.id = 5;
// private and protected are not visible
// singer.privateProp
// singer.protectedProp
console.log(singer.hasOwnProperty('popularity'));
