'use strict';

module.exports = function turkishtoEnglish (str) {
    return str.replace(/[ş]+/g,'s')
        .replace(/[Ş]+/g,'S')
        .replace(/[Ü]+/g,'U')
        .replace(/[ü]+/g,'u')
        .replace(/[Ö]+/g,'O')
        .replace(/[ö]+/g,'o')
        .replace(/[İ]+/g,'I')
        .replace(/[ı]+/g,'i')
        .replace(/[ğ]+/g,'g')
        .replace(/[Ğ]+/g,'G')
        .replace(/[Ç]+/g,'C')
        .replace(/[ç]+/g,'c')
};
