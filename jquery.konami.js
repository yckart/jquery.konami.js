/*!
 * jQuery.konami.js 0.1 - https://github.com/yckart/jQuery.konami.js
 * Letterable Konami-Code
 *
 * Copyright (c) 2012 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2012/11/29
**/
;(function($, document) {
    $.konami = $.fn.konami = function(fn, code) {
        if (!(this instanceof $)) { return $.fn.konami.apply($(document), arguments); }

        // ↑ ↑ ↓ ↓ ← → ← → B A
        code = code || [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

        var i = 0;

        return this.keydown(function(e) {
            var char = typeof code === 'string' ? String.fromCharCode(e.which).toLowerCase() : e.which;
            i = char === code[i] ? i + 1 : 0;
            if (i === code.length) {
                fn();
                i = 0;
            }
        });
    };
})(jQuery, document);
